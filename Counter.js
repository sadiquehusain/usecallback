import React from "react";
function Counter(props) {
  console.log(props.children);
  return (
    <>
      <button onClick={props.handleclick}>{props.children}</button>
    </>
  );
}
export default React.memo(Counter);
