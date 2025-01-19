import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import JournalItem from "./components/JournalItem/JournalItem";
import CardButton from "./components/CardButton/CardButton";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header";
import JournalList from "./components/JournalList/JournalList";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";

function App() {
  const data = [
    {
      title: "Подготовка к обновлению курсов",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, animi! Rerum aut voluptate eveniet quidem reprehenderit quas laboriosam! Perspiciatis pariatur velit autem explicabo debitis non quibusdam distinctio sequi nesciunt consequuntur.",
      date: new Date(),
    },
    {
      title: "Поход в горы",
      text: "Думал что очень много времени",
      date: new Date(),
    },
  ];

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {/* {[<Button>1</Button>, <Button>2</Button>]} */}
          {data.map(el=>(
            <CardButton>
            <JournalItem
              title={el.title}
              text={el.text}
              data={el.date}
            />
          </CardButton>
          ))}
          

        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm />
      </Body>
    </div>
  );
}

export default App;
