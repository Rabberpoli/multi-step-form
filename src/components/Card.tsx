import stepsArray from "../data/StepsArray";
import FormStep from "./FormStep";
import Step from "./Step";
import Button from "../UI/Button";
import { useEffect, useContext, useState } from "react";
import useInput from "../hooks/use-input";
import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";

function Card() {
  const steps = stepsArray;
  const [stepNumber, setStepNumber] = useState(1);
  const [billingPlan, setBillingPlan] = useState("");
  const [isMonthly, setisMonthly] = useState(true);
  const [checked, setChecked] = useState(false);

  useEffect(() => {}, []);

  const {
    value: enteredName,
    hasError: hasNameError,
    isValid: enteredNameIsValid,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value: string) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: hasEmailError,
    isValid: enteredEmailIsValid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value: string) => value.trim() !== "" && value.includes("@"));

  const {
    value: enteredNumber,
    hasError: hasNumberError,
    isValid: enteredNumberIsValid,
    inputChangeHandler: numberInputChangeHandler,
    inputBlurHandler: numberInputBlurHandler,
    reset: resetNumberInput,
  } = useInput((value: string) => value.trim() !== "");

  const onNextStep = (value: any) => {
    setStepNumber(value);
    console.log(stepNumber);
  };

  return (
    <main className="display-flex justify-center">
      <div className="display-flex card-container justify-space-between border-radius-20 box-shadow-bottom-right p-15">
        <div className="background-image flex-30 pl-25 pt-30">
          {steps.map((sa, i) => {
            return (
              <Step
                key={i}
                id={i + 1}
                description={sa.description}
                currentStepNumber={stepNumber}
              ></Step>
            );
          })}
        </div>
        <div className="display-flex justify-center flex-60 pt-30 pl-80 pr-80">
          {stepNumber === 1 && (
            <FormStep>
              <h1 className="bold font-size-25 title-form mb-10">
                Personal info
              </h1>
              <p className="font-regular font-size-16 grey-color mb-35">
                Please provide your name, email address and phone number{" "}
              </p>
              <div className="display-flex flex-flow-column mb-25">
                <div className="display-flex justify-space-between">
                  <label className="label-input bold">Name</label>
                  {hasNameError && (
                    <label className="label-input-error bold">
                      This field is required
                    </label>
                  )}
                </div>
                <input
                  className={"pl-15" + (hasNameError ? " input-error" : "")}
                  type="text"
                  placeholder="e.g. Stephen King"
                  onChange={nameInputChangeHandler}
                  onBlur={nameInputBlurHandler}
                  value={enteredName}
                />
              </div>
              <div className="display-flex flex-flow-column mb-25">
                <div className="display-flex justify-space-between">
                  <label className="label-input bold">Email Address</label>
                  {hasEmailError && (
                    <label className="label-input-error bold">
                      This field is required
                    </label>
                  )}
                </div>
                <input
                  className={"pl-15" + (hasEmailError ? " input-error" : "")}
                  type="text"
                  placeholder="e.g. stephenking@lorem.com"
                  onChange={emailInputChangeHandler}
                  onBlur={emailInputBlurHandler}
                  value={enteredEmail}
                />
              </div>
              <div className="display-flex flex-flow-column mb-90">
                <div className="display-flex justify-space-between">
                  <label className="label-input bold">Phone Number</label>
                  {hasNumberError && (
                    <label className="label-input-error bold">
                      This field is required
                    </label>
                  )}
                </div>
                <input
                  className={"pl-15" + (hasNumberError ? " input-error" : "")}
                  type="number"
                  placeholder="e.g. + 1 234 567 890"
                  onChange={numberInputChangeHandler}
                  onBlur={numberInputBlurHandler}
                  value={enteredNumber}
                />
              </div>
              <Button
                currentStepNumber={stepNumber}
                onNextStepHandler={onNextStep}
                isBtnDisabled={
                  !enteredNameIsValid ||
                  !enteredEmailIsValid ||
                  !enteredNumberIsValid
                }
              >
                Next Step
              </Button>
            </FormStep>
          )}
          {stepNumber === 2 && (
            <FormStep>
              <h1 className="bold font-size-25 title-form mb-10">
                Select your plan
              </h1>
              <p className="font-regular font-size-16 grey-color mb-35">
                You have the option of monthly or yearly billing
              </p>
              <div className="display-flex justify-space-between">
                <div className="billing-container display-flex flex-flow-column mb-25 pt-20 pl-10">
                  <img
                    style={{ width: "35px", marginBottom: "50px" }}
                    src="../public/icon-arcade.svg"
                  ></img>
                  <p className="bold font-size-14 title-form"> Arcade </p>
                  <p className="font-regular font-size-14 grey-color">
                    {" "}
                    $9/mo{" "}
                  </p>
                </div>
                <div className="billing-container display-flex flex-flow-column mb-25 pt-20 pl-10">
                  <img
                    style={{ width: "35px", marginBottom: "50px" }}
                    src="../public/icon-advanced.svg"
                  ></img>
                  <p className="bold font-size-14 title-form"> Advanced </p>
                  <p className="font-regular font-size-14 grey-color">
                    {" "}
                    $12/mo{" "}
                  </p>
                </div>
                <div className="billing-container display-flex flex-flow-column pt-20 pl-10">
                  <img
                    style={{ width: "35px", marginBottom: "50px" }}
                    src="../public/icon-pro.svg"
                  ></img>
                  <p className="bold font-size-14 title-form"> Pro </p>
                  <p className="font-regular font-size-14 grey-color">
                    {" "}
                    $15/mo{" "}
                  </p>
                </div>
              </div>
              <div className="billing-profile-selection mb-50">
                <p className={"font-size-14 mr-15 bold" + (checked ? ' grey-color' : ' title-form' )} > Monthly </p>
                <InputSwitch
                  checked={checked}
                  style={{ color: "red" }}
                  onChange={(e: InputSwitchChangeEvent) => setChecked(e.value)}
                />
                <p className={"bold font-size-14 ml-15" + (checked ? ' title-form' : ' grey-color' )}> Yearly </p>
              </div>
              <div className="display-flex justify-space-between mt-110">
                <Button
                  currentStepNumber={stepNumber}
                  isStepBack={true}
                  onNextStepHandler={onNextStep}
                >
                  Go Back
                </Button>
                <Button
                  currentStepNumber={stepNumber}
                  onNextStepHandler={onNextStep}
                >
                  Next Step
                </Button>
              </div>
            </FormStep>
          )}
        </div>
      </div>
    </main>
  );
}

export default Card;
