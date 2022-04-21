import { SignIn } from "./pages/SignIn";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Table from './components/Table';
import Extra from './components/Extra';
import Profile from './pages/Profile';
import ChangePassword from "./pages/ChangePassword";
import { Registration } from "./pages/Registration";
import Faq from "./pages/Faq";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<SignIn />}>
            <Route path='registration' element={<Registration />} />
          </Route>
          <Route path='/' element={<Menu />}>
            <Route  path='profile' element={<Profile />}/>            
            <Route path='table' element={<Table />} />
            <Route path='extra' element={<Extra />}/>
            <Route path='faq' element={<Faq />}/>
            <Route path='contactUs' element={<ContactUs />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
