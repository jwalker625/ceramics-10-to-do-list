import './App.css';
import reactLogo from '../assets/react.svg';
import typescriptLogo from '../assets/ts-logo-128.svg';

const App = () => {
  return (
    <div className="ToDoApp">
      <header>
        <h1>To Do App</h1>
        <h3>Created with <img src="../../public/vite.svg" /> Vite + <img src={reactLogo} /> React + <img src={typescriptLogo} /> TypeScript</h3>
      </header>
    </div>
  );
}

export default App;
