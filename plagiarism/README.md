This folder's `main.py`:

1. Reads code blocks from Jupyter Notebooks in the cwd;
2. Counts the lines of code that match between them (non-fuzzy);
3. Puts dot syntax in `graph.dot`;
4. Renders it using `dot` if it's installed.

Make sure your files are named like so:

```text
2021-05-06-vito-corleone.ipynb
2021-05-08-luca-brasi.ipynb
2021-05-11-joey-zasa.ipynb
```
