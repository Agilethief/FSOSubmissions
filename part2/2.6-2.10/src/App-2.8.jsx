import { useState } from "react";

const App = (props) => {
  const [persons, setPersons] = useState(props.contacts);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    // Check if the person is added
    // 2.7 element
    if (personAlreadyAdded(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    // 2.8 element
    if (numberAlreadyAdded(newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
      return;
    }

    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(personObject));
    setNewName(""); // Clear new name field
  };

  // 2.7 element
  const personAlreadyAdded = (nameToCheck) => {
    const alreadyAdded = persons.find((person) => person.name === nameToCheck);
    return alreadyAdded;
  };

  // 2.8 element
  const numberAlreadyAdded = (numberToCheck) => {
    const alreadyAdded = persons.find(
      (person) => person.number === numberToCheck
    );
    return alreadyAdded;
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add contact</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} : {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
