// import logo from './static/logo.svg';
import './App.css';
import ContactInfo from './components/ContactInfo/ContactInfo';

function App() {
  return (
    <div className="App">
      <div className="row empty-container">
        <div className="col-sm-2 empty-container">
          <h2>Logo</h2>
          <h4>Headline</h4>
        </div>
        <div className='col-sm-8 main-container'>
          <ContactInfo></ContactInfo>
        </div>
        <div className="col-sm-2 empty-container list-group">
            <div className="nav-links-container"><a href="#About" className="list-group-item list-group-item-action list-group-item-info">About Me</a></div>
            <div className="nav-links-container"><a href="#About" className="list-group-item list-group-item-action list-group-item-info">Experience</a></div>
            <div className="nav-links-container"><a href="#About" className="list-group-item list-group-item-action list-group-item-info">Projects</a></div>
            <div className="nav-links-container"><a href="#About" className="list-group-item list-group-item-action list-group-item-info">Recommendations</a></div>
            <div className="nav-links-container"><a href="#About" className="list-group-item list-group-item-action list-group-item-info">Blogs</a></div>
            <div className="nav-links-container"><a href="#About" className="list-group-item list-group-item-action list-group-item-info">Let's Talk!</a></div>
            <div className="nav-links-container"><a href="#About" className="list-group-item list-group-item-action list-group-item-info">Freelance</a></div>
        </div>
      </div>
    </div>
  );
}

export default App;
