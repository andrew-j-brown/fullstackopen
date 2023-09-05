import { useEffect, useState } from "react";
import axios from "axios";
import NameList from "./components/NameList";

// components
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

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
      <Filter filter={filter} filterEntries={filterEntries} />
      <h2>Add new person</h2>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handleSetPerson={handleSetPerson}
      />
      <h2>Numbers</h2>
      <NameList persons={persons} filter={filter} />
    </div>
  );
};

export default App;
