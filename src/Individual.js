import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/content.css";
import { updateItem, markIncomplete } from "./action/action";
const Individual = (props) => {
  console.log("child" + props.vals.isComplete);
  const [toggle, isToggled] = useState(false);
  const handleToggle = () => {
    const mytoggle = !toggle;
    isToggled(mytoggle);
  };

  return (
    <div>
      <div
        className={toggle ? "toggled" : "card-elements"}
        onMouseDown={handleToggle}
        onClick={(e) => {
          props.handleClick(
            e,
            props.vals.isComplete,
            props.vals.content,
            props.vals.id
          );
          handleToggle;
        }}
      >
        {props.vals.content}
      </div>
    </div>
  );
};
export default Individual;
