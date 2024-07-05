import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Timekeeper from './components/Timekeeper';
import OnOffControl from './components/OnOffControl';
import Blog from './components/Blog';
import Form from './components/Form';
import Search from './components/Search';
import List from './components/List';
import { useState } from 'react';

function App() {
  // 1. Initialize the state for the search term
  const [searchTerm, setSearchTerm] = useState();

  // 2. Define a function to handle search input changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const userInfo = {
    firstname: "Nayli",
    lastname: "Umairah",
  };
  // 3. Define the posts data
  const posts = [
    {
      id: 1,
      title: 'Classic Plain Bagel',
      content: 'The classic plain bagel is a versatile base, perfect with any spread or topping.',
      author: 'Chef John',
      date: '2024-07-05'
    },
    {
      id: 2,
      title: 'Everything Bagel',
      content: 'An everything bagel is topped with a blend of sesame seeds, poppy seeds, onion flakes, garlic flakes, and salt.',
      author: 'Chef Emily',
      date: '2024-07-04'
    },
    {
      id: 3,
      title: 'Cinnamon Raisin Bagel',
      content: 'A cinnamon raisin bagel is sweet and chewy, filled with raisins and a hint of cinnamon.',
      author: 'Chef Sarah',
      date: '2024-07-03'
    },
    {
      id: 4,
      title: 'Sesame Bagel',
      content: 'A sesame bagel is topped with a generous sprinkling of toasted sesame seeds.',
      author: 'Chef John',
      date: '2024-07-02'
    },
    {
      id: 5,
      title: 'Blueberry Bagel',
      content: 'A blueberry bagel is dotted with sweet and juicy blueberries, perfect for a fruity breakfast.',
      author: 'Chef Emily',
      date: '2024-07-01'
    },
    {
      id: 6,
      title: 'Pumpernickel Bagel',
      content: 'A pumpernickel bagel has a deep, rich flavor with a slightly sweet and malty taste.',
      author: 'Chef Sarah',
      date: '2024-06-30'
    },
    {
      id: 7,
      title: 'Salt Bagel',
      content: 'A salt bagel is topped with coarse salt crystals, offering a crunchy and savory bite.',
      author: 'Chef John',
      date: '2024-06-29'
    },
    {
      id: 8,
      title: 'Cheddar Bagel',
      content: 'A cheddar bagel is baked with sharp cheddar cheese, giving it a rich and savory flavor.',
      author: 'Chef Emily',
      date: '2024-06-28'
    }
  ];

  // 4. Filter the list of posts based on the search term
  const filterList = posts.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm);
  });

  return (
    <>
      <h2>Grumpy Bagels Menu</h2>
      {/* 5. Render the Search component and pass the search term and handler */}
      <Search searchTerm={searchTerm} handleSearch={handleSearch}/>
      {/* 6. Render the List component and pass the filtered list */}
      <List list={filterList}/>
      {/*
      <Form />
      <Blog posts={posts}/>
      <Welcome user="Kazu"/>
      <Welcome user="Fumiko"/>
      <Welcome user="Kohtake"/>
      <OnOffControl />
      */}
      
    </>
  );
}

export default App;
