import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import ManageServices from './Pages/ManageServices/ManageServices';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
      <Header></Header>
    <Routes>
      <Route exact path="/" element={<Home />} />    
      <Route path="/home" element={<Home />} />  
      <Route path="/login" element={<Login />} /> 
      <Route path="/booking/:serviceId" element={<Booking />} />
      <Route path="/addService" element={<AddService />} />
      <Route path="/manageService" element={<ManageServices />} />
      <Route path="*" element={<NotFound />} />     
    </Routes>
    </Router>
    </AuthProvider>
  </div>
  );
}

export default App;
