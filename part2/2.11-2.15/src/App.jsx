import { useState, useEffect } from "react";
import axios from "axios";
import contactService from "./services/contacts";

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

  const getContactsHook = () => {
    //console.log("Get contacts starting");
    contactService
      .getAll()
      .then((initialContacts) => {
        setPersons(initialContacts);
      })
      .catch((error) => {
        console.log("Error getting contacts", error);
      });
  };

  useEffect(getContactsHook, []); // Using an empty array here means it only runs once on the first render. What a strange way for react to work.

  const addPerson = (event) => {
    console.log("addPerson");
    event.preventDefault();
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    // Check if the person is added
    // 2.7 element
    const exisitingPerson = personAlreadyAdded(newName);
    //console.log("exisitingPerson", exisitingPerson);
    if (exisitingPerson) {
      if (
        !window.confirm(
          `${exisitingPerson.name} is already added to phonebook, would you like to update their details? ${exisitingPerson.name} : ${exisitingPerson.number} will become ${newName} : ${newNumber}`
        )
      ) {
        // If no, return and do nothing
        return;
      }

      contactService
        .update(exisitingPerson.id, personObject)
        .then((returnedContact) => {
          setPersons(
            persons.map((p) =>
              p.id !== exisitingPerson.id ? p : returnedContact
            )
          );
        })
        .catch((error) => {
          alert(`An error occured updating ${exisitingPerson.name}`);
          console.log(error);
        });
      return;
    }
    // 2.8 element
    // We do a lot of duplication here, we should refactor.
    const existingNumber = numberAlreadyAdded(newNumber);
    if (existingNumber) {
      if (
        !window.confirm(
          `${existingNumber.number} is already added to phonebook, would you like to update their details? ${existingNumber.name} : ${existingNumber.number} will become ${newName} : ${newNumber}`
        )
      ) {
        // If no, return and do nothing
        return;
      }

      // After all this, we can now add the person.
      contactService
        .update(existingNumber.id, personObject)
        .then((returnedContact) => {
          setPersons(
            persons.map((p) =>
              p.id !== existingNumber.id ? p : returnedContact
            )
          );
        })
        .catch((error) => {
          alert(`An error occured updating ${existingNumber.name}`);
          console.log(error);
        });
      return;
    }

    contactService.create(personObject).then((returnedContact) => {
      setPersons(persons.concat(returnedContact));
      setNewName(""); // Clear new name field
    });
  };

  // Deleting a contact
  const deleteContact = (personToDelete) => {
    console.log("deleteContact for: ", personToDelete.name);

    if (!window.confirm(`Delete contact ${personToDelete.name}?`)) {
      return;
    }

    contactService
      .deleteContact(personToDelete.id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== personToDelete.id));
      })
      .catch((error) => {
        console.log("Error deleting contact: ", personToDelete.name, error);
      });
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

      <ContactList
        contactsToShow={personsToShow()}
        onClickHandler={deleteContact}
      />
    </div>
  );
};

export default App;
