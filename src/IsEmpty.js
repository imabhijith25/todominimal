import "./styles/isempty.css";
import bug from "./images/bug.svg";
const IsEmpty = () => {
  return (
    <div className="empty-field">
      <img src={bug} alt="empty"></img>
      <p>Wow! Such empty</p>
    </div>
  );
};
export default IsEmpty;
