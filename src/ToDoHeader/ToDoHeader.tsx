import './ToDoHeader.css';
import reactLogo from '../assets/react.svg';
import typescriptLogo from '../assets/ts-logo-128.svg';

const ToDoHeader = () => {
  return (
    <header className="ToDoHeader">
      <h1 className="ToDoHeader-title">To-Do List App</h1>
      <h4 className="ToDoHeader-subtitle">
        Created with <img src="./vite.svg" aria-hidden={true} alt="Vite logo" /> Vite +{' '}
        <img src={reactLogo} aria-hidden={true} alt="React logo" /> React +{' '}
        <img src={typescriptLogo} aria-hidden={true} alt="TypeScript logo" /> TypeScript
      </h4>
    </header>
  );
}

export default ToDoHeader;
