import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CreateCourse from './services/CreateCourse';
import CreateResources from './services/CreateResources';
import ReadResources from './services/ReadResources';
function App() {
  return (
    <>
        <Routes>
          <Route path="/addResources" element={<CreateResources/>} />
          <Route path="/addCourse" element={<CreateCourse/>} />
          <Route path="/readResources" element={<ReadResources/>} />
        </Routes>
    </>
  );
}

export default App;
