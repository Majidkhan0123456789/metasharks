import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Homepage from './Pages/Homepage';
import Augementation from './Pages/Augementation';
import Instantpage from './Pages/Instantpage';


function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={< Homepage/>}/>
    <Route path='/Augementation' element={< Augementation/>}/>
    <Route path='/Instantpage' element={<Instantpage />} />

    </Routes>
    </Router>    
      
      </>
  );
}

export default App;
