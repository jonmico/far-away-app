import { ItemType } from './App';
import { useState, FormEvent } from 'react';

interface FormProps {
  handleAddItem: (item: ItemType) => void;
}

export default function Form({ handleAddItem }: FormProps) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    if (!description) return;

    const newItem: ItemType = {
      id: Math.random(),
      description,
      quantity,
      packed: false,
    };

    handleAddItem(newItem);
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
