import { useSelector, useDispatch } from "react-redux";
import "./styles/content.css";
import Individual from "./Individual";
import { useEffect, useState } from "react";
import { updateItem, markIncomplete } from "./action/action";
const Contents = (props) => {
  const items = useSelector((state) => state.todoReducer.items);

  const dispatch = useDispatch();
  const handleClick = (e, isComplete, content, id) => {
    // console.log(isComplete);

    if (isComplete === false) {
      //evaluates false to true
      const newobj = {
        isComplete: true,
        content,
        id
      };

      dispatch(updateItem(newobj));

      props.deletebutton(true);
    } else {
      const falseobj = {
        isComplete: false,
        content,
        id
      };

      dispatch(markIncomplete(falseobj));
    }
  };

  // console.log(items);

  // const [toggle, settoggle] = useState(true);
  // const dispatch = useDispatch();

  // const handletoggle = () => {
  //   settoggle(!toggle);
  // };

  // const handleClick = (e, isComplete, content, id) => {
  //   if (isComplete) {
  //     console.log("true inside is complete");
  //     const newobj = {
  //       isComplete: false,
  //       content: content,
  //       id
  //     };
  //     dispatch(updateItem(newobj));
  //     // dispatch(selected(id));

  //     props.deletebutton(true);
  //   } else {
  //     const markIncompleteobj = {
  //       isComplete: true,
  //       content: content,
  //       id
  //     };
  //     dispatch(markIncomplete(markIncompleteobj));
  //     // dispatch(unselected(id));
  //     props.deletebutton(false);
  //   }
  // };
  useEffect(() => {
    console.log("statechanging of contents");
  });
  return (
    <div className="content-ui">
      <div>
        {items.map((vals) => (
          <Individual
            key={vals.id}
            vals={vals}
            deletebutton={props.deletebutton}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Contents;
