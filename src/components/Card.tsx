import stepsArray from "../data/StepsArray";
import Step from "./Step";
import { useEffect } from "react";

function Card() {
  const steps = stepsArray;

  useEffect(() => {
    console.log(steps);
  }, []);

  return (
    <main className="display-flex justify-center">
      <div className="display-flex card-container border-radius-20 box-shadow-bottom-right">
        <div className="background-image flex-30 pl-25 pt-30">
          {steps.map((sa, i) => {
            return (
              <Step
                key={i}
                id={i}
                description={sa.description}
              ></Step>
            );
          })}
        </div>
        <div className="flex-70"></div>
      </div>
    </main>
  );
}

export default Card;
