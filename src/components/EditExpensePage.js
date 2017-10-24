import React from "react";

const EditExpensePage = (props) => {
  console.log(props);
  return <div>This is the edit expense page of {props.match.params.id}...</div>;
};

// const EditExpensePage = () => (
//   <div>This is the edit expense page...</div>
// );

export default EditExpensePage;