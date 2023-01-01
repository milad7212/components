import React from "react";

function Wrapper({ children }) {
  return (
    <div className="h-60  relative m-4 border-2 border-indigo-900 rounded-lg">
      {children}
    </div>
  );
}

export default Wrapper;
