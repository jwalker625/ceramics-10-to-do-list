import './ToDoHeader.css';
import reactLogo from '../assets/react.svg';
import typescriptLogo from '../assets/ts-logo-128.svg';

const ToDoHeader = () => {
  return (
    <header className="ToDoHeader">
      <h1 className="ToDoHeader-title">To Do App</h1>
      <h4 className="ToDoHeader-subtitle">
        Created with <img src="../../public/vite.svg" /> Vite +{' '}
        <img src={reactLogo} /> React +{' '}
        <img src={typescriptLogo} /> TypeScript
      </h4>
    </header>
  );
}

export default ToDoHeader;
