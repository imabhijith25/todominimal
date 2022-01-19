import "./styles/app.css";
import AddTodo from "./AddTodo";
import { useState } from "react";
import IsEmpty from "./IsEmpty";
import Contents from "./Contents";
export const Card = (props) => {
  console.log(props);
  const [isempty, setIsempty] = useState(true);
  const [dummy, setdummyl] = useState(true);
  const setdummy = () => {
    setdummyl(false);
    console.log("dummy enabled");
  };

  return (
    <div className="card-ui">
      <h3>Todo</h3>
      <AddTodo />
      {/* {isempty && <IsEmpty />} */}
      {isempty && (
        <Contents deletebutton={props.deletebutton} setdummy={setdummy} />
      )}
    </div>
  );
};
