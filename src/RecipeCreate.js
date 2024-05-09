import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.


  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };

  const [formData, setFormData] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if any required fields are empty before proceeding
    if (!formData.name || !formData.cuisine || !formData.ingredients || !formData.preparation) {
      // Handle the case where required fields are not filled
      alert("Please fill in all required fields.");
      return;
    }
    // Call the createRecipe function passed from App.js with the current form data
    createRecipe(formData);
    // Clear the form data by resetting it to the initial state
    setFormData({ ...initialState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table class="form">
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  placeholder="URL"
                  onChange={handleChange}
                  value={formData.photo}
                />
              </label>
            </td>
            <td class="td">
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  name="ingredients"
                  placeholder="Ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                />
              </label>
            </td>
            <td class="td">
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  name="preparation"
                  placeholder="Preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
