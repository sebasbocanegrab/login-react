import './App.css';
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import apiPoke from './apiPokemon-main/src/pages/apiPoke';

function App() {
  return (
    <div className="App">
      <h1>App make for Sebas</h1>
      <LoginButton/>
      <Profile/>
      <apiPoke.tsx/>
    </div>
  );
}

export default App;
