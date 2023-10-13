function Button(props: any) {
  const goToNextStep = (event: any) => {
    if (!event || !event.target) {
      return;
    }

    props.isStepBack
      ? props.onNextStepHandler(props.currentStepNumber - 1)
      : props.onNextStepHandler(props.currentStepNumber + 1);
  };

  return (
    <div className={"btn-container"}>
      {props.isStepBack && (
        <button className={"go-back-btn"} onClick={goToNextStep}>
          {props.children}
        </button>
      )}
      {!props.isStepBack && (
        <button
          className={props.isBtnDisabled ? " btn-disabled" : ""}
          disabled={props.isBtnDisabled}
          onClick={goToNextStep}
        >
          {props.children}
        </button>
      )}
    </div>
  );
}

export default Button;
