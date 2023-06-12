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

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  return (
    <div className='add-form'>
      <h3>What do you need for your 😍 trip?</h3>
    </div>
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

function PackingList() {
  return (
    <div className='list'>
      <ul>
        {initialItems.map((i) => (
          <Item key={i.id} item={i} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className='stats'>
      💼<em>You have X items on your list, and you aleady packed X (X%)</em>🌞
    </footer>
  );
}

function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
