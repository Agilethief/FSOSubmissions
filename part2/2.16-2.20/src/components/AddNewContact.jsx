import InputEntry from "./InputEntry";

const AddNewContact = (props) => {
  // Note we need to setup this function here to consume the default page load.
  // Which in turn means handing the whole action again to the parent component
  const submitForm = (event) => {
    event.preventDefault();
    props.submitAction(event);
  };

  return (
    <div>
      <h2>Add new contact</h2>
      <form onSubmit={submitForm}>
        <InputEntry
          newValue={props.newName}
          handleChange={props.handleNameChange}
          label="Name"
        />
        <InputEntry
          newValue={props.newNumber}
          handleChange={props.handleNumberChange}
          label="Number"
        />
        <div>
          <button className="button" type="submit">
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewContact;
