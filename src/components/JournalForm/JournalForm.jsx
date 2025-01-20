import Button from "../Button/Button";
import "./JournalForm.css";
import { useState } from "react";

function JournalForm({onSubmit}) {

  const addJornalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    onSubmit(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJornalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag"  />
      <textarea name="text" id="" cols="30" rows="10"></textarea>
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
