import os
import json
import sys
from itertools import combinations
from collections import defaultdict
from datetime import datetime as dt
import subprocess

print('START')
print('Reading notebooks to memory..')
docs = []
for e in os.scandir('.'):
    if e.name.endswith('ipynb'):
        docs.append((e.name, json.load(open(e))))

print('Initializing graph..')
# Init graph without curvy edges
graph = ['digraph G {',
         '    splines=false;',
         '    edge [dir=none];']

# Declare a node per doc
for node_id, doc in enumerate(docs):
    info = doc[0].replace('.ipynb', '').split('-')
    date = dt.strptime('-'.join(info[:3]), '%Y-%m-%d')
    name = ' '.join(info[3:])
    graph.append('    '
                 + str(node_id)
                 + '[label="'
                 + name
                 + r'\n('
                 + date.strftime('%d %b')
                 + ')"];')

# Count matching locs and add edges if > threshold
threshold = 35
print('Comparing code blocks (non-fuzzy) '
     f'and generating graph with threshold {threshold}..')
for a, b in combinations(enumerate(docs), r=2):
    a_id, b_id = a[0], b[0]
    a_src, b_src = set(), set()

    for cell in a[1][1]['cells']:
        if cell['cell_type'] == 'code':
            a_src |= set(cell['source'])

    for cell in b[1][1]['cells']:
        if cell['cell_type'] == 'code':
            b_src |= set(cell['source'])

    matching_locs = a_src & b_src
    if len(matching_locs) > threshold:
        edge = f'{a_id} -> {b_id} '
        edge_props = f'[label="{len(matching_locs)}"]'
        graph.append('    ' + edge + edge_props)

graph.append('}')

print('Writing graph to graph.dot')
with open('graph.dot', 'w') as f:
    f.write('\n'.join(graph))

try:
    print('Using dot to draw to graph.png..')
    subprocess.run(['dot', 'graph.dot', '-Tpng', '-o', 'graph.png'], check=True)
except FileNotFoundError:
    print('Error: drawing failed. Do you have dot installed?')

print('Done.\n'
      '- Find the rendered graph in graph.png\n'
      '- You can modify the graph manually by editing graph.dot\n'
      '- You can re-export the modified graph with `make`\n'
      '- You can modify the threshold on line 36 of main.py')
