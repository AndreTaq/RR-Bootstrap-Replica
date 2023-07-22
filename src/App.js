import './App.css';
import TopBar from './components/TopBar';
import HomePage from './components/HomePage';
import StoreListing from './components/StoreListing';

function App() {
  return (
    <div className="App">
      <TopBar />
      <HomePage />
      <StoreListing />
    </div>
  );
}

export default App;
