import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { data } from "../utils/ai";

const Main = () => {
  const [isIngredient, setIsIngredient] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);
  // const [isInputValue, setIsInputValue] = useState("");

  const addIngredientHandler = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIsIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
  };

  const getRecipe = async () => {
    if (isIngredient.length === 0) return;

    const recipeMarkdown = await data(isIngredient);
    console.log(recipeMarkdown);
    setRecipeShown(true);
    // You might want to store the recipeMarkdown in state to display it inside <ClaudeRecipe />
  };
  return (
    <>
      <main>
        <form className="add-ingredient-form" action={addIngredientHandler}>
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
            required
            // value={isInputValue}
            // onChange={(e) => setIsInputValue(e.target.value)}
          />
          <button type="submit">Add ingredient</button>
        </form>

        {isIngredient.length ? (
          <IngredientsList isIngredient={isIngredient} getRecipe={getRecipe} />
        ) : null}

        {recipeShown && <ClaudeRecipe />}
      </main>
    </>
  );
};

export default Main;
