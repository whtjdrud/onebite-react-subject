import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Welcome isMember={false} name={"조성경"} />
      <Welcome isMember={true} name={"조성경"} />
      <Welcome />
    </>
  );
}

export default App;
