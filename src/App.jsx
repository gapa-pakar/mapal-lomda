import { Routes, Route } from "react-router-dom";
import Opening from "./components/Opening/Opening.jsx";
import ChapterOne from "./components/Chapter1/ChapterOne.jsx";
import ChapterTwo from "./components/Chapter2/ChapterTwo.jsx";
import ChapterThree from "./components/Chapter3/ChapterThree.jsx";
import ChapterFour from "./components/Chapter4/ChapterFour.jsx";
import Questions from "./components/Questions/Questions.jsx";
import Ending from "./components/Ending/Ending.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/ChapterOne" element={<ChapterOne />} />
        <Route path="/ChapterTwo" element={<ChapterTwo />} />
        <Route path="/ChapterThree" element={<ChapterThree />} />
        <Route path="/ChapterFour" element={<ChapterFour />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/Ending" element={<Ending />} />
      </Routes>
    </>
  );
}

export default App;
