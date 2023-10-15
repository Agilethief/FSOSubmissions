import { useState } from "react";

const App = (props) => {
  const [persons, setPersons] = useState(props.contacts);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameSearch, setNameSearch] = useState("");

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

  const handleNameSearchChange = (event) => {
    setNameSearch(event.target.value);
  };

  // Ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
  // Ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
  // filter persons to show based on the name filter. Use a bit of regex to search the start of the strings to make a little fancy
  const personsToShow = () => {
    if (nameSearch.length === 0) {
      return persons;
    }
    //person.name.toLowerCase() === nameSearch.toLowerCase()
    return persons.filter((person) => reNameSearchPattern.test(person.name));
  };

  // Search for if any of the nameSearch is in the start of the string
  // i at the end indicates it ignores case
  const reNameSearchPattern = new RegExp(`^${nameSearch}`, "i");

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        Contact Search:{" "}
        <input value={nameSearch} onChange={handleNameSearchChange} />
      </div>
      <hr />
      <h2>Add new contact</h2>
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
        {personsToShow().map((person) => (
          <li key={person.id}>
            {person.name} : {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
