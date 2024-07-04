import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Timekeeper from './components/Timekeeper';
import OnOffControl from './components/OnOffControl';

function App() {
  const userInfo = {
    firstname: "Nayli",
    lastname: "Umairah",
  };
  return (
    <>
      <OnOffControl />
      {/* 
      <Welcome user="Kazu"/>
      <Welcome user="Fumiko"/>
      <Welcome user="Kohtake"/>
      */}
    </>
  );
}

export default App;
