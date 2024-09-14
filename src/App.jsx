import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './stores/components/Navbar'; // Import the Navbar
import Login from './stores/pages/Login';
import LandingPage from './stores/pages/LandingPage';
import MobilePage from './stores/pages/MobilePage';
import ComputerPage from './stores/pages/ComputerPage';
import MenPage from './stores/pages/MenPage';
import WomenPage from './stores/pages/WomenPage';
import FurniturePage from './stores/pages/FurniturePage';
import AcPage from './stores/pages/AcPage';
import BookPage from './stores/pages/BookPage';
import KitchenPage from './stores/pages/KitchenPage';
import SpeakerPage from './stores/pages/SpeakerPage';
import FridgePage from './stores/pages/FridgePage';
import TvPage from './stores/pages/TvPage';
import MobileSingle from './singles/MobileSingle';
import WatchesPage from './stores/pages/WatchesPage';
import UserCart from './stores/UserCart';
import ComputerSingle from './singles/ComputerSingle';
import WatchSingle from './singles/WatchSingle';
import MenSingle from './singles/MenSingle';
import WomenSingle from './singles/WomenSingle';
import FurnitureSingle from './singles/FurnitureSingle';
import AcSingle from './singles/AcSingle';
import KitchenSingle from './singles/KitchenSingle';
import SpeakerSingle from './singles/SpeakerSingle';
import FridgeSingle from './singles/FridgeSingle';
import TvSingle from './singles/TvSingle';
import BookSingle from './singles/BookSingle';
import CartProvider from './stores/context/CarContext';

const App = () => {
  //state to manage the logged-in user, initially null
   const [user, setUser] = useState(null); //using useState hook to create a new user, initially it is set to null, means no user is logged in
   const navigate = useNavigate(); //Navigate hook for redirection

  const handleLogout = () => {
    setUser(null);//clear user state
    localStorage.removeItem('loggedInUser'); //optionally clear user from localStorage
    navigate('/'); //redirect to home page after logout
  }
  return (
    <CartProvider>
      <div>
      {/*we are passing 2 props to the Navbar component
      user = current user state, it will be null if no user logged in, or a user object if someone is logged in
      onLogout = pass handleLogout function that handles logout process, this fun is triggered when the log out button is clicked in the navbar*/}
      <Navbar user = {user} onLogout = {handleLogout}/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {/*pass the setUser func as a prop to the login comp. allows login comp to update the user state when a user logs in*/}
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path='/mobiles' element={<MobilePage />} />
        <Route path='/computers' element={<ComputerPage />} />
        <Route path='/watches' element={<WatchesPage />} />
        <Route path='/men' element={<MenPage />} />
        <Route path='/women' element={<WomenPage />} />
        <Route path='/furniture' element={<FurniturePage />} />
        <Route path='/ac' element={<AcPage />} />
        <Route path='/books' element={<BookPage />} />
        <Route path='/kitchen' element={<KitchenPage />} />
        <Route path='/speakers' element={<SpeakerPage />} />
        <Route path='/fridges' element={<FridgePage />} />
        <Route path='/tv' element={<TvPage />} />

        <Route path='/mobiles/:id' element={<MobileSingle />} />
        <Route path='/computers/:id' element={<ComputerSingle />} />
        <Route path='/watches/:id' element={<WatchSingle />} />
        <Route path='/men/:id' element={<MenSingle />} />
        <Route path='/women/:id' element={<WomenSingle />} />
        <Route path='/furniture/:id' element={<FurnitureSingle />} />
        <Route path='/ac/:id' element={<AcSingle />} />
        <Route path='/kitchen/:id' element={<KitchenSingle />} />
        <Route path='/speaker/:id' element={<SpeakerSingle />} />
        <Route path='/fridge/:id' element={<FridgeSingle />} />
        <Route path='/tv/:id' element={<TvSingle />} />
        <Route path='/book/:id' element={<BookSingle />} />
        <Route path='/cart' element={<UserCart />} />
      </Routes>
    </div>
    </CartProvider>
  );
};

export default App;
