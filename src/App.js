import logo from './logo.svg';
import './App.css';

function App() {
  // const
  var variableNahid = "nahid"
  const nahidConstant = "nahid is constant"
  // Array
  const araye = [1, 2, 3]
  // object
  const adam = {
    name: "alireza",
    familyName: "talei",
    work: () => "food"
  } 
  adam.work()
  // function
  function tabee() {
    const varibaleUnderFunction = "alireza"
    // console.log(varibaleUnderFunction)
    masalan(varibaleUnderFunction);
    //return same as =>
    return "sameple of returning in a function"
  }
function masalan(input) {
  console.log(document.getElementById("root"))
  // console.log(varibaleUnderFunction)
  // console.log(input)

  const varibaleUnderFunction = "a"
}
// ECMA 2015, 2016 => arrow function  
const tabeeeee = () => console.log('hi')
  // JSX 

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
          {/* baraye seda zadan function */}
          {tabee()}
          {/* baraye seda zadan variable */}
          {/* {nahidConstant} */}
        </a>
      </header>
    </div>
  );
}

export default App;
