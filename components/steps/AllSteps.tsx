import React from "react";
import { Step, Step1, Step2, Step3, Step4, Step5, Step6, Step7 } from "./";

function AllSteps() {
  return (
    <div className="flex flex-col gap-2">
      <Step />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
      <Step7 />
    </div>
  );
}

export default AllSteps;
