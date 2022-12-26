import "./App.css";
import { Navbar } from "./Components/NavBar/NavBar";
import { MyRouter } from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRouter />
    </div>
  );
}

export default App;
