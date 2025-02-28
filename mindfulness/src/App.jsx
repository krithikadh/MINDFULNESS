import DateAndDay from "./components/FunctionalComponents/DateAndDay";
import Meditation from "./components/FunctionalComponents/Meditation";
import Mood from "./components/FunctionalComponents/Mood";
import Sleep from "./components/FunctionalComponents/Sleep";
import Journal from "./components/FunctionalComponents/Journal";
import Profile from "./components/FunctionalComponents/Profile";
import Navbar from "./components/FunctionalComponents/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<DateAndDay />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/sleep" element={<Sleep />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
