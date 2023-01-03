import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import Navigation from './component/Navigation';
import PageNotFound from './component/PageNotFound';
import About from './component/About';
import Contact from './component/Contact';
import Products from './component/Products';
import Shirts from './component/Shirts';
import Jeans from './component/Jeans';
import Users from './component/Users';
import UserDetails from './component/UserDetails';
import Admin from './component/Admin';
import Search from './component/Search';
import Validation from './component/Validation';
import Card from './component/Card';
import { useState } from 'react';
import Data from './component/Data';
import Click from './Click';


function App() {
  const navigate = useNavigate();

  // navigation inside  event handler 
  // const navigateToHesder=()=>{
  //   navigate('/header')
  // }

  // navigation to Multiple pages with single  event handler 
  // const navigateTo=(url)=>{
  //   navigate(url)
  // }

  // condition based navigation
  //  const navigateToWhere=()=>{
  //   let name='Ashok';
  //   if(name=='Ashok'){
  //     navigate('/header');
  //   }
  //   else{
  //     navigate('/footer');
  //   }
  // }
  const [active,setActive] = useState('FirstCard');

  return (
    <>
      <Navigation />
      
      {/* <Click/> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/search' element={<Search />}></Route>

        <Route path='/products' element={<Products />}>
          {/* index routing is also called child or nested routing it's use to select one child component as default */}
          <Route index element={<Shirts />}></Route>
          <Route path='shirts' element={<Shirts />} />
          <Route path='jeans' element={<Jeans />} />
        </Route>
        {/* this line is use for page not found */}
        <Route path='*' element={<PageNotFound />}></Route>

        <Route path='/users' element={<Users />}>
          <Route path=':id' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>

      </Routes>

      {/* <button onClick={()=>navigate('/header')}>Header</button>  
    <button onClick={()=>navigate('/footer')}>Footer</button>   */}

      {/*  // navigation inside  event handler
    <button onClick={()=>navigateToHeader()}>Header</button>   */}

      {/* // navigation to Multiple pages with single  event handler  */}

      {/* <button onClick={()=>navigateTo('/header')}>Header</button>  
    <button onClick={()=>navigateTo('/footer')}>Footer</button>   */}

      {/* // condition based navigation */}
      {/* <button onClick={()=>navigateToWhere()}>ClickMe</button>   */}


      {/* <Validation/> */}


    </>

  );
}

export default App;
