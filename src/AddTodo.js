import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/addTodo.css";
import { AddItem } from "./action/action";
const AddTodo = () => {
  const items = useSelector((state) => state.todoReducer.items);
  const [text, settext] = useState();

  const dispatch = useDispatch();
  const reference = useRef();

  const handlesubmit = () => {
    let newkey;
    console.log(items);
    // console.log(text);
    if (items.length === 0) {
      newkey = 1;
    } else {
      newkey = items[items.length - 1].id;
    }
    if (text !== undefined) {
      const newobj = {
        id: newkey + 1,
        content: text,
        isComplete: false
      };

      dispatch(AddItem(newobj));
      reference.current.value = "";
    }
  };
  const handletext = (e) => {
    settext(e.target.value);
  };
  const enterhandler = (e) => {
    if (e.key === "Enter") {
      handlesubmit();
      // console.log("hii");
    }
  };
  return (
    <div className="inputportion">
      <input
        type="text"
        placeholder="Add your new todo"
        onChange={(e) => handletext(e)}
        maxLength={280}
        ref={reference}
        onKeyPress={enterhandler}
      ></input>
      <button onClick={handlesubmit}>+</button>
    </div>
  );
};
export default AddTodo;
