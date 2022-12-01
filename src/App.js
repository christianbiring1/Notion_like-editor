import './App.css';
import EditablePage from './components/editableElement'


export default function App() {
  return (
    <div className="container">
      <h1>Front-end developer test project</h1>
      <p>The goal was to make a page that looks like this one, and has the ability
        to create H1 text simply by typing / then 1, then typing the text, and hitting enter.
      </p>
      <EditablePage />
    </div>
  );
}
