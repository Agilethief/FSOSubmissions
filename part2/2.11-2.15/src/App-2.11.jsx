import { useState, useEffect } from "react";
import axios from "axios";
//import ContactEntry from "./components/ContactEntry";
import ContactList from "./components/ContactList";
import InputEntry from "./components/InputEntry";
import AddNewContact from "./components/AddNewContact";

// This is excersise 2.10 - Phonebook step 5

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameSearch, setNameSearch] = useState("");

  // 2.11 element
  const getContactsHook = () => {
    console.log("Get contacts starting");
    axios.get("http://localhost:3001/contacts").then((response) => {
      console.log("Get contacts: Promise fulfilled");
      setPersons(response.data);
    });
  };

  useEffect(getContactsHook, []); // Using an empty array here means it only runs once on the first render. What a strange way for react to work.

  const addPerson = (event) => {
    console.log("addPerson");
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

      <InputEntry
        newValue={nameSearch}
        handleChange={handleNameSearchChange}
        label="Contact Search"
      />
      <hr />
      <AddNewContact
        submitAction={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <ContactList contactsToShow={personsToShow()} />
    </div>
  );
};

export default App;
