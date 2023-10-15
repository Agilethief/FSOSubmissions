const InputEntry = (props) => {
  return (
    <div>
      {props.label}:{" "}
      <input value={props.newValue} onChange={props.handleChange} />
    </div>
  );
};

export default InputEntry;
