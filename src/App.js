import "./styles.css";
import { Card } from "./card";
import DeleteMe from "./DeleteMe";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function App() {
  const [deletebutton, setDeletebutton] = useState(false);
  const selecteditems = useSelector((state) => state.todoReducer.indexs);
  const displayDeleteButton = (data) => {
    // if (selecteditems.size > 0) {
    //   setDeletebutton(true);
    // }
    console.log(selecteditems);
    if (selecteditems.size > 0) {
      setDeletebutton(true);
    } else {
      setDeletebutton(false);
    }
  };
  const rerend = () => {
    setDeletebutton(false);
  };

  return (
    <div className="App">
      {deletebutton && <DeleteMe rerend={rerend} />}
      <Card deletebutton={displayDeleteButton} />
    </div>
  );
}
