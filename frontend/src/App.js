import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/Sign-up/SignUp';
import Congratulations from './pages/Congratulations/Congratulations';
import Verification from './pages/Verification/Verification';
import SignIn from './pages/Sign-in/SignIn';




function App() {
  return (
    <div className="App">
      <header className="App-header">

       <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/congratulations' element={<Congratulations />} />
        <Route path='/verification' element={<Verification />} />
      </Routes>

      </header>
    </div>
  );
}

export default App;
