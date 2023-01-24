import { Route, Routes } from 'react-router-dom';
import Restaurants from "./pages/Restaurants";
function App() {
  return (
    <div className="App">
      <header className="App-header">

       <Routes>
            <Route path="/restaurants" element={<Restaurants/>} />
       </Routes>

      </header>
    </div>
  );
}

export default App;
