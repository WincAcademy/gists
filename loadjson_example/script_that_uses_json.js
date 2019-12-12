addEventListener("DOMContentLoaded", () => {
  const recipes = data.recipes.map(recipe => recipe.name);
  document.querySelector("h1").innerHTML = recipes.join(" en ");
});
