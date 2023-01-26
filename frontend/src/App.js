import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/Sign-up/SignUp';
import Congratulations from './pages/Congratulations/Congratulations';
import Verification from './pages/Verification/Verification';
import SignIn from './pages/Sign-in/SignIn';
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateRestaurantPage from './pages/CreateRestaurant/CreateRestaurant';



function App() {
  return (
    <div className="App">

    <Header/>
        {/* <CreateRestaurantPage /> */}
       <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/congratulations' element={<Congratulations />} />
        <Route path='/verification' element={<Verification />} />
        <Route path='/restaurants/new' element={<CreateRestaurantPage />} />
      </Routes>
<Footer/>

    </div>
  );
}

export default App;
