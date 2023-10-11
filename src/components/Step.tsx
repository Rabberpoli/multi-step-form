import { StepsArray } from "../data/StepsArray";

function Step(props: StepsArray) {
  const label = 'STEP ' + (props.id + 1);

  return (
    <>
      <div className="mb-25 display-flex">
        <div className="step-number-size mr-15 display-flex justify-center">
            <div className="align-center color-p-step font-size-14 bold">
                { props.id }
            </div>
        </div>
        <div>
          <label className="font-medium font-size-13 color-label-step"> {label} </label>
          <p className="bold font-size-14 color-p-step"> {props.description.toUpperCase()} </p>
        </div>
      </div>
    </>
  );
}

export default Step;
