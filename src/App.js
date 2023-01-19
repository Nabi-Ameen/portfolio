import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Birthday from "./birthdayproject/Birthday";
import TodoApp from "./todoApp/TodoApp";
import MainAccordion from "./accordianProject/MainAccordian";
import MainMenu from "./menuProject/MainMenu";
import MainReview from "./reviewProject/MainReview";
import Tabs from "./tabsProject/Tabs";
import ToursProject from "./ToursProject/Tourss";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/birthday" element={<Birthday />}></Route>
          <Route path="/todoapp" element={<TodoApp />}></Route>
          <Route path="/accordian" element={<MainAccordion />}></Route>
          <Route path="/menu" element={<MainMenu />}></Route>
          <Route path="/reviews" element={<MainReview />}></Route>
          <Route path="/tabs" element={<Tabs />}></Route>
          <Route path="/tours" element={<ToursProject />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
