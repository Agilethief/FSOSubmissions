const Notification = (props) => {
  if (props.message === null) {
    return null;
  }

  // Lots of stuff to make the anim play nice.
  let baseClassNames = "notification notification-open";
  let textClassNames = "notification-text";
  let baseText = "";
  if (props.isError) {
    baseClassNames = baseClassNames.concat(" notification-error");
    textClassNames = textClassNames.concat(" notification-text-error");
    baseText = "Error: ";
    //console.log(baseClassNames);
  } else {
    baseClassNames = baseClassNames.concat(" notification-success");
    textClassNames = textClassNames.concat(" notification-text-success");
    baseText = "Success: ";
  }

  setTimeout(() => {
    const errorContainer = getErrorContainer();
    if (errorContainer === null) return;

    errorContainer.classList.remove("notification-open");
    errorContainer.classList.add("notification-close");
  }, 3000);

  const getErrorContainer = () => {
    return document.getElementById("errorContainer");
  };

  return (
    <div id="errorContainer" className={baseClassNames}>
      <div className={textClassNames}>
        {baseText} {props.message}
      </div>
    </div>
  );
};

export default Notification;
