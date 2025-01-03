import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import JournalItem from "./components/JournalItem/JournalItem";
import CardButton from "./components/CardButton/CardButton";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header";
import JournalList from "./components/JournalList/JournalList";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";

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

  const inputChange = () => {};

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              data={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              data={data[1].date}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>
        <input type="text" onChange={inputChange} />
      </Body>
    </div>
  );
}

export default App;
