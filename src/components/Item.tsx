import { ItemType } from './App';

interface ItemProps {
  item: ItemType;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

export default function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
  const { description, quantity, packed, id } = item;
  return (
    <li>
      <input
        type='checkbox'
        checked={packed}
        onChange={() => {
          onToggleItem(id);
        }}
      />
      <span style={{ textDecoration: packed ? 'line-through' : '' }}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
