import "./App.css";
import Header from "../src/components/Header";
import Menubar from "../src/components/Menubar";
import Projects from "../src/components/Projects";

function App() {
  return (
    <div>
      <div className="grid grid-cols-12 w-full">
        <Menubar />
        <div className="col-span-10">
          <Header />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
