import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CourseDetails from './pages/CourseDetails';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/courses'>
        <Route path=':id' Component={CourseDetails}/>
      </Route>
      <Route path='/dashboard' Component={Dashboard}/>
      <Route path='/login' Component={Login}/>
      {/* <Route path='*' Component={<h2>404 not found</h2>}/> */}
    </Routes>
  );
}

export default App;
