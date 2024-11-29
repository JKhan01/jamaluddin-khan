// import logo from './static/logo.svg';
import './App.css';
import ContactInfo from './components/ContactInfo/ContactInfo';

function App() {
  return (
    <div className="App">
      
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mohammed J Khan
        </a> */}
      <ContactInfo></ContactInfo>
    </div>
  );
}

export default App;
