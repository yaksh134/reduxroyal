import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import {Routes , Route} from 'react-router-dom';
import HomeContainerExam from './containers/HomeContainerExam';

function App() {
  return (
    <div className="App">

      {/* <Routes>
        <Route path= '/Listproducts' element = {<HomeContainer.ListProduct/>}/>
        <Route path='/' element= {<HomeContainer.AddProduct/>}/>
      </Routes> */}
      {/* <HomeContainer/> */}
      <HomeContainerExam/>
    </div>
  );
}

export default App;
