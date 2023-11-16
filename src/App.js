import "./App.css";
import AppProvider from "./Project/Context/AppProvider";
import Router from "./Route";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router />
      </AppProvider>
    </div>
  );
}

export default App;
