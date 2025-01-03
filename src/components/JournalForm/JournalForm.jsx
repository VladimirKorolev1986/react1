import Button from "../Button/Button";
import "./JournalForm.css";
import { useState } from "react";

function JournalForm() {
  const [inputData, setinputData] = useState("");
  const inputChange = (event) => {
    setinputData(event.target.value);
    console.log(inputData);
  };

  const addJornalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJornalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" value={inputData} onChange={inputChange} />
      <textarea name="post" id="" cols="30" rows="10"></textarea>
      <Button
        text={"Сохранить"}
        onClick={() => {
          console.log("Нажали");
        }}
      />
    </form>
  );
}

export default JournalForm;
