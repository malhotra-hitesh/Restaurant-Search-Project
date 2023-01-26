import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/Sign-up/SignUp';
import Congratulations from './pages/Congratulations/Congratulations';
import Verification from './pages/Verification/Verification';
import SignIn from './pages/Sign-in/SignIn';
import Footer from "./components/Footer";
import Header from "./components/Header";
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
    </div>
  );
}

export default App;
