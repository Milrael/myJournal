import './App.css';
import { useState, useEffect } from 'react';
import AddButton from './components/AddButton/AddButton';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalForm from './components/JournalForm/JournalForm';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

// const DATA = [
//   {
//     id: 1,
//     title: 'Новое в React',
//     text: 'Сегодня обучился новому в Rea...',
//     date: new Date(),
//   },
//   {
//     id: 2,
//     title: 'Посетил театр',
//     text: 'Редко бываю в театре, поэтому...',
//     date: new Date()
//   }
// ]



function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      setItems(data.map(item => ({
        ...item,
        date: new Date(item.date)
      })));
    }
  }, []);

  useEffect(() => {
    if (items.length) {
      console.log('Записано!');
      localStorage.setItem('data', JSON.stringify(items))
    }
  }, [items])



  const addItem = (item) => {
    // console.log(item);
    setItems(oldItems => [...oldItems,
    {
      post: item.post,
      title: item.title,
      date: new Date(item.date),
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
    }]);
  }




  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <AddButton />
        <JournalList items={items} />

      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>

    </div>
  );
}

export default App
