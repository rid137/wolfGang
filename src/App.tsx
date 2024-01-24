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
import AuthLayout from './components/auth/authLayout';
import Register from './components/auth/register';
import PaymentDetails from './components/auth/paymentDetails';
import DocumentUpload from './components/auth/documentUpload';
import CreatePassword from './components/auth/createPassword';
import Login from './components/auth/login';
import ForgotPassword from './components/auth/forgotPassword';
import SecurityCode from './components/auth/securityCode';
import ResetPassword from './components/auth/resetPassword';
import SettingsLayout from './pages/settingsLayout';
import NotFound from './pages/notFound';



const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Layout child={<Dashboard />} /> } />
                <Route path="/dashboard" element={<Layout child={<Dashboard />} /> } />
                <Route path="/payment" element={<Layout child={<Payment />} /> } />
                <Route path="/notifications" element={<Layout child={<Notification />} /> } />
                <Route path="/settings" element={<Layout child={<Settings />} /> } />
                <Route path="/editprofile" element={<Layout child={<EditProfile />} /> } />
                <Route path="/security" element={<Layout child={<Security />} /> } />
                <Route path="/support" element={<Layout child={<Support />} /> } />
                <Route path="/privacy" element={<Layout child={<Privacy />} /> } /> */}
                <Route path='/' element={<AuthLayout />}>
                    <Route index element={<Register />} />
                    <Route path='payment_details' element={<PaymentDetails />} />
                    <Route path='document_upload' element={<DocumentUpload />} />
                    <Route path='create_password' element={<CreatePassword />} />
                    <Route path='login' element={<Login />} />
                    <Route path='forgot_password' element={<ForgotPassword />} />
                    <Route path='security_code' element={<SecurityCode />} />
                    <Route path='reset_password' element={<ResetPassword />} />
                </Route>

                <Route path='/dashboard' element={<Layout />}>
                    <Route index element={<Dashboard/>} /> 

                    <Route path='/dashboard/payment' element={<Payment />} /> 

                    <Route path='/dashboard/notifications' element={<Notification />} />

                    <Route path='/dashboard/settings' element={<SettingsLayout />}>
                        <Route index element={<Settings />} />
                        <Route path='/dashboard/settings/edit_profile' element={<EditProfile />} />
                        <Route path='/dashboard/settings/security' element={<Security />} />
                        <Route path='/dashboard/settings/support' element={<Support />} />
                        <Route path='/dashboard/settings/privacy_policy' element={<Privacy />} />                        
                    </Route>
                </Route>
                <Route path='*' element={<NotFound />} />
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