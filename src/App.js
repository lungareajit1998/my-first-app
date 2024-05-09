import logo from './codemind-technology-high-resolution-logo-transparent.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>My Personal Details</h2>
        <img src="developer.jpg" alt=""/>
        <p><strong>Name:</strong>Ajit Lungare</p>
        <h3><strong>Contact Details</strong></h3>
        <p><strong>Mobile:</strong>7083686618 <br/>
           <strong>Email:</strong>lungareajit1998@gmail.com</p>
        <p>Student of CODEMIND TECHNOLOGY</p>
      </header>
    </div>
  );
}

export default App;
