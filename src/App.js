import Contacts from "./components/Contacts";

import "./App.css";


function App() {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className="App">
      <h1>Pursuit App Template</h1>
      <h2>My new update</h2>
      <h3>Making changes on dan-first-branch</h3>
      <Contacts />
    </div>
  );
}

export default App;
