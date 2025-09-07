

import  React  from 'react'
import { Routes, Route } from "react-router-dom";


import Login from './Pages/Login.jsx';
import User from './Pages/User.jsx';
import Admin from './Pages/Admin.jsx';
import Home from './Pages/Home.jsx';
import Aboutme from './Pages/Aboutme.jsx';
import Studentdetails from './Pages/Studentdetails.jsx';
import Complain from './Pages/Complain.jsx';
import Feepayment from './Pages/Feepayment.jsx';
import Subwarden from './Pages/Subwarden.jsx';
import MedicalCenter from './Pages/MedicalCenter.jsx';
import Ambulance from './Pages/Ambulance.jsx';
import Hostelfans from './Pages/Hostelfans.jsx';
import Hostelbeds from './Pages/Hostelbeds.jsx';
import Hostelwifi from './Pages/Hostelwifi.jsx';
import Hostelbathrooms from './Pages/Hostelbathrooms.jsx';
import Hostelstudyarea from './Pages/Hostelstudyarea.jsx';
import Facilities from './Pages/Facilities.jsx';
import HotlineNumbers from './Pages/Hotlinenumbers.jsx';
import Dailycount from './Pages/Dailycount.jsx';




function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutme" element={<Aboutme />} />
      <Route path="/studentdetails" element={<Studentdetails />} />
      <Route path="/complain" element={<Complain />} />
      <Route path="/feepayment" element={<Feepayment />} />
      
      <Route path="/subwarden" element={<Subwarden />} />
      <Route path="/medicalcenter" element={<MedicalCenter />} />
      <Route path="/ambulance" element={<Ambulance />} />
      <Route path="/hostelfans" element={<Hostelfans />} />
      <Route path="/hostelbeds" element={<Hostelbeds />} />
      <Route path="/hostelwifi" element={<Hostelwifi />} />
      <Route path="/hostelbathrooms" element={<Hostelbathrooms />} />
      <Route path="/hostelstudyarea" element={<Hostelstudyarea />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/HotlineNumbers" element={<HotlineNumbers />} />
      <Route path="/Dailycount" element={<Dailycount />} />
      
      
    </Routes>
  );
}

export default App;








