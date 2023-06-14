import { ItemType } from '../App';

interface StatsProps {
  itemList: ItemType[];
}

export default function Stats({ itemList }: StatsProps) {
  if (!itemList.length)
    return (
      <p className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = itemList.length;
  const numPacked = itemList.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);

  return (
    <footer className='stats'>
      <em>
        {percent === 100
          ? 'You got everything! Ready to go ✈'
          : `💼 You have ${numItems} items on your list, and you aleady packed
          ${numPacked} (${percent}%)`}
      </em>
    </footer>
  );
}
