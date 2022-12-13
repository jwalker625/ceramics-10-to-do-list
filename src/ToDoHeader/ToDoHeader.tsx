import './ToDoHeader.css';
import reactLogo from '../assets/react.svg';
import typescriptLogo from '../assets/ts-logo-128.svg';

const ToDoHeader = () => {
  return (
    <header className="ToDoHeader">
      <h1>To Do App</h1>
      <h3>
        Created with <img src="../../public/vite.svg" /> Vite +{' '}
        <img src={reactLogo} /> React +{' '}
        <img src={typescriptLogo} /> TypeScript
      </h3>
    </header>
  );
}

export default ToDoHeader;
