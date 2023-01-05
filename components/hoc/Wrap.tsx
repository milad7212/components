import React from "react";

function Wrap(Component) {
  // eslint-disable-next-line react/display-name
  return function () {
    return (
      <>
    
        <div className="overflow-hidden relative mx-4  py-4
         my-2 border-2 border-indigo-900 rounded-lg shadow-lg ">
          <Component />
        </div>
      </>
    );
  };
}

export default Wrap;

{
  /* <div className="h-60  relative m-4 border-2 border-indigo-900 rounded-lg"> */
}
{
  /* <Component  {...props}/> */
}
{
  /* </div> */
}
