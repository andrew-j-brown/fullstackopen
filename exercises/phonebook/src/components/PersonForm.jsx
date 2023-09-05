import { useState } from "react";

const PersonForm = ({
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
  handleSetPerson,
}) => {
  return (
    <form action="">
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit" onClick={handleSetPerson}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
