import logo from './logo.svg';
import './App.css';

function App() {
//  az 2 tarigh mituni namayesh bedi ye mojoodiato 
//  1 : estefade az console 1*
// 2: render kardane oon dar JSX 2*
// 1* sample:
// console.log(moteghayer)
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"  
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank" 
          rel="noopener noreferrer"
        >
         {/*  mahale farakhani function ha va moteghayer ha dar JSX */}
         {/* 2* sample:  */}
         {/* {moteghayer} */}
        </a>
      </header>
    </div>
  );
}

export default App;
