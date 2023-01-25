import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./pages/Search"
function App() {
  return (
    <div className="App">
      <header className="App-header">

       <Routes>
            <Route path="/search" element={<Search/>} />
       </Routes>

      </header>
    </div>
  );
}

export default App;
