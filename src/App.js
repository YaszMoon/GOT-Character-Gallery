import './App.css';
import CharacterGallery from './components/CharacterGallery';
import Character from './components/Character';


function App() {
  return (
    <div className="App" data-test="component-app">
      <CharacterGallery />
    </div>
  );
}

export default App;
