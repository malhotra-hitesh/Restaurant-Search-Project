import React  from "react";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateReview from "./pages/CreateReview";


function App() {
  return (
    <>
        <Header />
       <Routes>
        <Route path="/review" element={<CreateReview />}/>

      </Routes>
      <Footer />
    </>
  );
}

export default App;