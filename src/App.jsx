import { Routes, Route } from "react-router-dom";
import StudentApplication from "./pages/StudentApplication";
import ComplexDOM from "./pages/ComplexDOM";
import NewWindow from "./pages/NewWindow";

const App = () => {
  
  return (
    <Routes>
      <Route path="/student-application" element={<StudentApplication />} />
      <Route path="/complex-dom" element={<ComplexDOM />} />
      <Route path="/new-window" element={<NewWindow />} />
    </Routes>
  );
};

export default App;
