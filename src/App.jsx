import "./App.css";
import Churn from "./components/Churn";
import Header from "./components/header";
import NewTasks from "./components/NewTasks";
import Standing from "./components/Standing";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <div className="row">
          <div className="col-3">
            <Standing />
          </div>
          <div className="col-6">
            <NewTasks />
          </div>
          <div className="col-3">
            <Churn />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
