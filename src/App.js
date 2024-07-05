import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Timekeeper from './components/Timekeeper';
import OnOffControl from './components/OnOffControl';
import Blog from './components/Blog';

function App() {
  const userInfo = {
    firstname: "Nayli",
    lastname: "Umairah",
  };

  const posts = [
    {
      id: 1,
      title: 'Classic Spaghetti Carbonara',
      content: 'This classic spaghetti carbonara recipe is simple yet delicious.',
      author: 'Chef John',
      date: '2024-07-05'
    },
    {
      id: 2,
      title: 'Best Homemade Pizza',
      content: 'To make the best homemade pizza, you need flour, yeast, water, olive oil, tomato sauce, mozzarella cheese, and your favorite toppings.',
      author: 'Chef Emily',
      date: '2024-07-04'
    },
    {
      id: 3,
      title: 'Healthy Avocado Salad',
      content: 'For a healthy avocado salad, you need avocados, cherry tomatoes, red onions, cucumber, olive oil, lemon juice, salt, and pepper.',
      author: 'Chef Sarah',
      date: '2024-07-03'
    }
  ];

  return (
    <>
      <Blog posts={posts}/>
      {/* 
      <Welcome user="Kazu"/>
      <Welcome user="Fumiko"/>
      <Welcome user="Kohtake"/>
      <OnOffControl />
      */}
      
    </>
  );
}

export default App;
