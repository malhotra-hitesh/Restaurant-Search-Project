import {Routes, Route} from "react-router-dom";
import Restaurants from "./pages/Restaurants";

function App() {
    return (
        <>
            <Routes>
                <Route path="/restaurants" element={<Restaurants/>} />
            </Routes>
        </>
    );
}

export default App;
