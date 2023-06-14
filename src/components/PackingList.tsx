import { ItemType } from './App';
import { useState } from 'react';
import Item from './Item';

interface PackingListProps {
  items: ItemType[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onDeleteList: () => void;
}

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onDeleteList,
}: PackingListProps) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems!: ItemType[];

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((i) => (
          <Item
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            key={i.id}
            item={i}
          />
        ))}
      </ul>
      <div className='actions'>
        {items.length > 1 && (
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value='input'>Sort by input order</option>
            <option value='description'>Sort by description</option>
            <option value='packed'>Sort by packed status</option>
          </select>
        )}

        {items.length > 0 && <button onClick={onDeleteList}>Clear list</button>}
      </div>
    </div>
  );
}
