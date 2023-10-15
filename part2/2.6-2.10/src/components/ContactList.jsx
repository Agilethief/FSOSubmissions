import ContactEntry from "./ContactEntry";

const ContactList = (props) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {props.contactsToShow.map((person) => (
          <ContactEntry key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
