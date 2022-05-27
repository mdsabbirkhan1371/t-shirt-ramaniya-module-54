
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GrandPa from './components/GrandPa/GrandPa';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NothingFound from './components/NothingFound/NothingFound';
import OrderReveiw from './components/OrderReveiw/OrderReveiw';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrderReveiw></OrderReveiw>}></Route>
        <Route path='/*' element={<NothingFound></NothingFound>}></Route>
        <Route path='/grandpa' element={<GrandPa></GrandPa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
