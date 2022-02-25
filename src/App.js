import './App.css';
import UserListPage from './pages/UserListPage';
import UserPage from './pages/UserPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path={"/user/:id"} element={<UserPage/>}/>
        <Route exact path="/users" element={<UserListPage/>} />
      </Routes>
    </>
  );
}

export default App;
