import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/Sign-up/SignUp';
import Congratulations from './pages/Congratulations/Congratulations';
import Verification from './pages/Verification/Verification';
import SignIn from './pages/Sign-in/SignIn';
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateReviewPage from "./pages/CreateReview";
import CreateReview from "./pages/CreateReview";

function App() {
  return (
    <div className="App">

    <Header/>
       <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/congratulations' element={<Congratulations />} />
        <Route path='/verification' element={<Verification />} />
           <Route path='/reviews' element={<CreateReview />} />
      </Routes>
<Footer/>

    </div>
  );
}

export default App;
