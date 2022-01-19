import "./styles/delete.css";
import deleteimg from "./images/deleteimg.svg";
import { useDispatch } from "react-redux";
import { deleteValues } from "./action/action";

const DeleteMe = (props) => {
  console.log("delete rerenderd");
  const dispatch = useDispatch();
  const deletevalues = () => {
    dispatch(deleteValues());
    props.rerend();
  };

  return (
    <div className="delete-button" onClick={deletevalues}>
      <img src={deleteimg} alt="Delete" />
      <p>Delete Selected Items</p>
    </div>
  );
};

export default DeleteMe;
