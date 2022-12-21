import logo from './logo.svg';
import './App.css';
import CreateCourse from './services/CreateCourse';
import CreateResources from './services/CreateResources';
import FooterC from './services/FooterC';
function App() {
  return (
    <>
      <div>
        <CreateCourse />
      </div>
      <div>
        <FooterC />
      </div>
    </>
      
  );
}

export default App;
