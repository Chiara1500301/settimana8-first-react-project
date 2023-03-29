import logo from './logo.svg';
import './App.css';
import MyBotton from'./components./MyBotton'
import ImageComponet from'./components/ImageComponet'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ImageComponet url="https://ecointernazionale.com/wp-content/uploads/2020/06/world-environment-day.jpg" info="Natura"/>
        <MyBotton testo="Premi"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
