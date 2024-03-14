import React from "react";

function RecipeFormat({ name, cuisine, photo, ingredients, preparation, onDelete }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td>
        <img src={photo} alt={`${name} Recipe`} />
      </td>
      <td>{ingredients}</td>
      <td>{preparation}</td>
      <td>
        <button name="delete" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeFormat;
