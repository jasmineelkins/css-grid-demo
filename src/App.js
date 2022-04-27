import react from "react";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import TaskList from "./components/TaskList";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="grid-container">
          <Header />
          <TaskList />
          <Calendar />
          <Notes />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
