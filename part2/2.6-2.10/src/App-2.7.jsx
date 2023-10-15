import { useState } from "react";

const App = (props) => {
  const [persons, setPersons] = useState(props.contacts);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    // Check if the person is added
    // 2.7 element
    if (personAlreadyAdded(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: "000",
    };

    setPersons(persons.concat(personObject));
    setNewName(""); // Clear new name field
  };

  // 2.7 element
  const personAlreadyAdded = (nameToCheck) => {
    const alreadyAdded = persons.find((person) => person.name === nameToCheck);
    return alreadyAdded;
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">Add contact</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
