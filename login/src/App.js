import logo from './logo.svg';
import './App.css';
import Login_page from './components/Login_page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';

/** root router */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login_page />
  },

]);

function App() {
  return (

    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
