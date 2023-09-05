import { useState } from "react";
import NameList from "./components/NameList";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleSetPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    if (persons.some((person) => person.name === personObj.name)) {
      alert(`${personObj.name} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(personObj));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const personEntries = persons.map((person) => <li>{person}</li>);

  // filter entries

  const filterEntries = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter by name: <input value={filter} onChange={filterEntries} />
      </div>
      <h2>Add new person</h2>
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
      <h2>Numbers</h2>
      <NameList persons={persons} filter={filter} />
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
