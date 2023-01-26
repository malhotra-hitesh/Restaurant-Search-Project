import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/Sign-up/SignUp';
import Congratulations from './pages/Congratulations/Congratulations';
import Verification from './pages/Verification/Verification';
import SignIn from './pages/Sign-in/SignIn';
import Footer from "./components/Footer";
import Header from "./components/Header";
<<<<<<< HEAD
import CreateRestaurantPage from './pages/CreateRestaurant/CreateRestaurant';



function App() {
  return (
    <div className="App">

      <Header />
      
      {/* <CreateRestaurantPage /> */}
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/congratulations' element={<Congratulations />} />
        <Route path='/verification' element={<Verification />} />
        <Route path='/restaurants' element={<CreateRestaurantPage />} />
       

      </Routes>
      <Footer />

=======
import HomePage from "./pages/HomePage";
import Search from "./pages/Search/Search";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/search' element={<Search />} />
                <Route path='/sing-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/congratulations' element={<Congratulations />} />
                <Route path='/verification' element={<Verification />} />
            </Routes>
        <Footer/>
>>>>>>> 16cd686605c5623ff36f3f993a550da94e97d3cc
    </div>
  );
}

export default App;
