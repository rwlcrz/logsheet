import "./App.css";
import Churn from "./components/Churn";
import Header from "./components/header";
import NewTasks from "./components/NewTasks";
import Standing from "./components/Standing";
import Card from "./components/Card";
import Projects from "./components/data/Projects";

function App() {
  const cardElements = Projects.map((details) => {
    return <Card key={details.fiCase} {...details} />;
  });

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
            <section>{cardElements}</section>
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
