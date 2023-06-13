import { FormEvent, useState } from 'react';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
];

type Item = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

interface ItemProps {
  item: Item;
}

interface PackingListProps {
  items: Item[];
}

interface FormProps {
  handleAddItem: (item: Item) => void;
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form({ handleAddItem }: FormProps) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    if (!description) return;

    const newItem: Item = {
      id: Math.random(),
      description,
      quantity,
      packed: false,
    };

    handleAddItem(newItem);
    console.log(newItem);
    setDescription('');
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit} className='add-form'>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(evt) => setQuantity(Number(evt.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={(evt) => setDescription(evt.target.value)}
        value={description}
        type='text'
        placeholder='Item...'
      />
      <button>Add</button>
    </form>
  );
}

function Item({ item }: ItemProps) {
  const { description, quantity, packed } = item;
  return (
    <li>
      <span style={{ textDecoration: packed ? 'line-through' : '' }}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
}

function PackingList({ items }: PackingListProps) {
  return (
    <div className='list'>
      <ul>
        {items.map((i) => (
          <Item key={i.id} item={i} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className='stats'>
      💼<em>You have X items on your list, and you aleady packed X (X%)</em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  function handleAddItem(item: Item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  return (
    <div>
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
