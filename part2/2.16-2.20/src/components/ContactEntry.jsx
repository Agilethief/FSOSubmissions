const ContactEntry = (props) => {
  const person = props.person;
  return (
    <li>
      <button className="button" onClick={() => props.onClickHandler(person)}>
        D
      </button>{" "}
      {person.name} : {person.number}
    </li>
  );
};

export default ContactEntry;
