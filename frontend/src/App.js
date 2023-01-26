import {Route, Routes} from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./pages/Search"
import HomePage from "./pages/HomePage";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/search" element={<Search/>}/>
                <Route path = "/home" element={<HomePage/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
