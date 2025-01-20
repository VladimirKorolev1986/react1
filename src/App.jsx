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
import { id } from "date-fns/locale";

const INITIAL_DATA = [
  {
    id: 1,
    title: "Подготовка к обновлению курсов",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, animi! Rerum aut voluptate eveniet quidem reprehenderit quas laboriosam! Perspiciatis pariatur velit autem explicabo debitis non quibusdam distinctio sequi nesciunt consequuntur.",
    date: new Date(),
  },
  {
    id: 2,
    title: "Поход в горы",
    text: "Думал что очень много времени",
    date: new Date(),
  },
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA)

  const addItem = (item) => {
    setItems(oldItems => [...oldItems, {
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: Math.max(...oldItems.map(i => i.id)) + 1
    }])
  }
  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  }



  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {items.sort(sortItems).map(el=>(
            <CardButton key={el.id}>
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
        <JournalForm onSubmit={addItem}/>
      </Body>
    </div>
  );
}

export default App;
