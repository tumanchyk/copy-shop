import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Main from './pages/Main/Main';
import Login from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App
