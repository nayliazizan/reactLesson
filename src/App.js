import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  const userInfo = {
    firstname: "Nayli",
    lastname: "Umairah",
  };
  return (
    <>
      <Welcome user="Kazu"/>
      <Welcome user="Fumiko"/>
      <Welcome user="Kohtake"/>
      
    </>
  );
}

export default App;
