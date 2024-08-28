
import reactLogo from "./assets/images/Sun.svg";
import Input from "./components/input.jsx";
import "./App.css";

function App() {
  

  return (<><div className="main">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <div>
        <Input/>
        </div>
      
      </div>
    </>
  );
}

export default App;
