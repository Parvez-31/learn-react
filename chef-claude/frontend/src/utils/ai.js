export const response = await fetch("http://localhost:3000/api/recipe", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  // body: JSON.stringify({
  //   ingredients: ["onion", "tomato", "garlic"],
  // }),
});

export const data = await response.json();
console.log(data.recipe);
