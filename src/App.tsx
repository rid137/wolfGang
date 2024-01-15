import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/shared/layout';
import Dashboard from './pages/dashboard';
import Payment from './pages/payment';
import Notification from './pages/notification';
import Settings from './pages/settings';
import EditProfile from './pages/editProfile';
import Security from './pages/security';
import Support from './pages/support';
import Privacy from './pages/privacy';


const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout child={<Dashboard />} /> } />
                <Route path="/dashboard" element={<Layout child={<Dashboard />} /> } />
                <Route path="/payment" element={<Layout child={<Payment />} /> } />
                <Route path="/notifications" element={<Layout child={<Notification />} /> } />
                <Route path="/settings" element={<Layout child={<Settings />} /> } />
                <Route path="/editprofile" element={<Layout child={<EditProfile />} /> } />
                <Route path="/security" element={<Layout child={<Security />} /> } />
                <Route path="/support" element={<Layout child={<Support />} /> } />
                <Route path="/privacy" element={<Layout child={<Privacy />} /> } />
                  {/* <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/notification" element={<Notification />} />
                  <Route path="/settings" element={<Settings />} /> */}

                {/* <Route path="/notification" element={<Notification />} /> */}

                {/* <Route path="/login" element={<Login  />} /> */}
                {/* <Route path="*" element={<Notfound />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;