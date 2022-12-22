import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CreateCourse from './services/CreateCourse';
import CreateResources from './services/CreateResources';
import FooterC from './services/FooterC';
function App() {
  return (
    <>
        <Routes>
          <Route path="/addResources" element={<CreateResources/>} />
          <Route path="/addCourse" element={<CreateCourse/>} />
        </Routes>
    </>
  );
}

export default App;
