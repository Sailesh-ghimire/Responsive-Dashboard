import React, { useEffect, useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const MainTable = () => {
  const [loading, setLoading] = useState(true);
  const [server, setServer] = useState('');
  const [game, setGame] = useState('');
  const [item, setItem] = useState('');
  const [filterKeyword, setFilterKeyword] = useState('');
  const [sortOption, setSortOption] = useState('');

  const data = [
    {
      item: 'This is a  first sample product with a fixed price',
      delivery: 'Instant',
      quantity: 1,
      price: 100,
      rating: 4.5,
    },
    {
      item: 'This is a  second sample product with a fixed price',
      delivery: '1 hour',
      quantity: 2,
      price: 80,
      rating: 4.7,
    },
    {
      item: 'This is a  third sample product with a fixed price',
      delivery: '2 hours',
      quantity: 5,
      price: 50,
      rating: 4.2,
    },
    {
      item: 'This is a  fourth sample product with a fixed price',
      delivery: 'Instant',
      quantity: 1,
      price: 100,
      rating: 4.5,
    },
    {
      item: 'This is a  fifth sample product with a fixed price',
      delivery: 'Instant',
      quantity: 1,
      price: 100,
      rating: 4.5,
    },
  ];

  const [filteredData, setFilteredData] = useState(data);

  const handleSort = (sortOption: string) => {
    let sortedData = [...filteredData];
    if (sortOption === 'rating') {
      sortedData.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'price') {
      sortedData.sort((a, b) => a.price - b.price);
    }
    return sortedData;
  };

  useEffect(() => {
    const data = handleSort(sortOption).filter(
      d =>
        !filterKeyword ||
        d.item.toLowerCase().includes(filterKeyword.toLowerCase())
    );
    setFilteredData(data);
  }, [sortOption, filterKeyword]);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedData = [...filteredData];
    updatedData[index].quantity = newQuantity;
    setFilteredData(updatedData);
  };

  return (
    <div className='flex flex-col flex-grow'>
      <div className='w-full h-24 bg-gray-900 bg-opacity-75 text-white p-2 flex justify-between items-center rounded-3xl'>
        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <img
              src='https://avatar.iran.liara.run/public/boy?username=Ash'
              alt='User Profile'
              className='w-12 h-12 rounded-full'
            />
            <span className='absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-gray-900 rounded-full'></span>
          </div>
          <div>
            <div className='text-lg font-semibold flex items-center space-x-2'>
              <span> 4.5</span>
              <span className=' text-sm text-red-600 p-1 rounded'>
                Power Seller{' '}
              </span>
            </div>
            <div className='mt-2'>
              <div className='text-sm text-gray-400'>applegold</div>
              <span className=' text-sm text-white  mt-1 rounded'>
                Since 2019
              </span>
            </div>
          </div>
        </div>
        <div className='relative bg-gray-800 p-4 rounded-lg shadow-md'>
          <div className='absolute inset-0 bg-gray-800 z-10 rounded-t-3xl pt-1'></div>
          <div className='flex flex-col items-center relative z-20'>
            <div className='w-full bg-gray-900 rounded-full h-3 relative mb-4'>
              <div
                className='bg-blue-500 h-3 rounded-full relative'
                style={{ width: '55%' }}
              ></div>
              <span className='absolute left-0 top-1/2 transform -translate-y-1/2 text-xs text-gray-200 ml-1'>
                Level 2
              </span>
              <span className='absolute right-0 top-1/2 transform -translate-y-1/2 text-xs text-gray-200 mr-1'>
                Level 3
              </span>
            </div>
            <div className='flex justify-between w-full text-sm text-gray-400 space-x-10'>
              <span className=' bg-gray-900 rounded-md px-2'>Field 1</span>
              <span className=' bg-gray-900 rounded-md px-2'>Field 2</span>
              <span className=' bg-gray-900 rounded-md px-2'>Field 3</span>
              <span className=' bg-gray-900 rounded-md px-2'>Field 4</span>
            </div>
          </div>
        </div>
        <div className='text-right'>
          <div className='flex justify-between space-x-4'>
            <div className='flex flex-col items-end '>
              <div className='text-sm text-gray-400 '>Orders</div>
              <div className='text-lg text-green-500 font-bold '>11753</div>
            </div>
            <div className='flex flex-col items-end'>
              <div className='text-sm text-gray-400'>Positive</div>
              <div className='text-lg text-green-500 font-bold'>+24</div>
            </div>
            <div className='flex flex-col items-end'>
              <div className='text-sm text-gray-400'>Negative</div>
              <div className='text-lg text-red-500 font-bold'>-5</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-700 pt-6 pl-6 pr-6 rounded-lg shadow-lg bg-opacity-80'>
        <div className=' p-2 rounded-lg shadow-md'>
          <div className='flex flex-col space-y-4 mb-6'>
            <div className='flex flex-row w-full  p-2 rounded-3xl'>
              <div className='relative mb-4 w-full'>
                <select
                  id='server'
                  className='block w-full p-2 bg-gray-800 text-white rounded-lg border border-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 peer'
                  value={server}
                  onChange={e => setServer(e.target.value)}
                >
                  <option value='Server'>Select Server</option>
                  <option value='Server1'>Server1</option>
                  <option value='Server2'>Server2</option>
                </select>
                <div className='absolute bottom-0 left-0 w-full border-t border-gray-600'></div>
              </div>
              <div className='relative mb-4 w-full'>
                <select
                  id='game'
                  className='block w-full p-2 bg-gray-800 text-white rounded-lg border border-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 peer'
                  value={game}
                  onChange={e => setGame(e.target.value)}
                >
                  <option value='Game'>Select Game</option>
                  <option value='Game1'>Game1</option>
                  <option value='Game2'>Game2</option>
                </select>
                <div className='absolute bottom-0 left-0 w-full border-t border-gray-600'></div>
              </div>
              <div className='relative w-full'>
                <select
                  id='item'
                  className='block w-full p-2 bg-gray-800 text-white rounded-lg border border-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 peer'
                  value={item}
                  onChange={e => setItem(e.target.value)}
                >
                  <option value='item'>Select Item</option>
                  <option value='Sword'>Sword</option>
                  <option value='Shield'>Shield</option>
                  <option value='Potion'>Potion</option>
                </select>
              </div>
            </div>
            <div className='flex items-center justify-between space-x-4'>
              <div className='flex space-x-2'>
                <button
                  onClick={() => setFilterKeyword('first')}
                  className={`p-2 rounded-lg border-2 ${
                    filterKeyword === 'first'
                      ? 'bg-gray-800 border-gray-600'
                      : 'bg-none border-gray-600'
                  }  transition duration-300 shadow-md text-white`}
                >
                  first
                </button>
                <button
                  onClick={() => setFilterKeyword('second')}
                  className={`p-2 rounded-lg border-2 ${
                    filterKeyword === 'second'
                      ? 'bg-gray-800 border-gray-600'
                      : 'bg-none border-gray-600'
                  }  transition duration-300 shadow-md text-white`}
                >
                  second
                </button>
                <button
                  onClick={() => setFilterKeyword('third')}
                  className={`p-2 rounded-lg border-2 ${
                    filterKeyword === 'third'
                      ? 'bg-gray-800 border-gray-600'
                      : 'bg-none border-gray-600'
                  } transition duration-300 shadow-md text-white`}
                >
                  third
                </button>
              </div>
              <select
                className='p-1 bg-gray-800 text-white rounded-lg border border-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500'
                value={sortOption}
                onChange={e => setSortOption(e.target.value)}
              >
                <option value=''>Sort by</option>
                <option value='rating'>Rating</option>
                <option value='price'>Price</option>
              </select>
            </div>
          </div>
        </div>
        <div className='mt-2 rounded-lg shadow-md overflow-hidden'>
          <table className='min-w-full text-white'>
            <thead>
              <tr className=''>
                <th className='py-4 px-6 text-left text-xs font-medium uppercase tracking-wider'>
                  Item
                </th>
                <th className='py-4 px-6 text-left text-xs font-medium uppercase tracking-wider'>
                  Delivery
                </th>
                <th className='py-4 px-6 text-left text-xs font-medium uppercase tracking-wider'>
                  Quantity
                </th>
                <th className='py-4 px-6 text-left text-xs font-medium uppercase tracking-wider'>
                  Unit Price
                </th>
                <th className='py-4 px-6 text-left text-xs font-medium uppercase tracking-wider'>
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((d, index) => (
                <tr
                  key={index}
                  className={`transition duration-300 bg-gray-800 my-1`}
                >
                  <td className='py-3 px-6'>{d.item}</td>
                  <td className='py-3 px-6'>{d.delivery}</td>
                  <td className='py-3 px-6 flex items-center'>
                    <button
                      onClick={() =>
                        handleQuantityChange(index, d.quantity - 1)
                      }
                      className=' text-white rounded-full w-6 h-6 flex items-center justify-center focus:outline-none'
                    >
                      -
                    </button>
                    <span className='mx-3'>{d.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(index, d.quantity + 1)
                      }
                      className=' text-white rounded-full w-6 h-6 flex items-center justify-center focus:outline-none'
                    >
                      +
                    </button>
                  </td>
                  <td className='py-3 px-6'>${d.price.toFixed(2)}</td>
                  <td className='py-3 px-6 flex items-center'>
                    ${(d.price * d.quantity).toFixed(2)}
                    <ShoppingCartOutlinedIcon className='ml-1 bg-emerald-600' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainTable;
