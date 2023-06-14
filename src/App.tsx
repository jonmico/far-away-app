import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

export type ItemType = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

function App() {
  const [items, setItems] = useState<ItemType[]>([]);

  function handleAddItem(item: ItemType) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id: number) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems((prevItems) =>
      prevItems.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  }

  function handleDeleteList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );
    if (confirmed) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteList={handleDeleteList}
      />
      <Stats itemList={items} />
    </div>
  );
}

export default App;
