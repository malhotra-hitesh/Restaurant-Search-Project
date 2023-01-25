import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateRestaurantPage from './pages/CreateRestaurant/CreateRestaurant';



function App() {
  return (
    <>
      <Header />
     <CreateRestaurantPage />
     <Footer />
      {/* <p>
        Initial fronted you can start now working on
      </p> */}

       <Routes>
        {/*<Route path='/' element={< YourPage/>} />*/}

      </Routes>
      
    </>
  );
}

export default App;