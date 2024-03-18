import "./App.css";
import TopBar from "./components/NavBar";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <TopBar />
      </UserProvider>
    </div>
  );
}

export default App;

