const InputEntry = (props) => {
  return (
    <div>
      <div className="input-label">{props.label}: </div>
      <input
        className="input"
        value={props.newValue}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default InputEntry;
