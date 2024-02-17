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
import { AuthContextProvider } from './context/authcontext';
import { Toaster } from 'react-hot-toast';
import ProtectedPage from './components/auth/protectedPage';



const App = () => {
    return(
        <AuthContextProvider>
            <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                className: 'toaster',
                }}
            />
            <BrowserRouter>
                <Routes>
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
                        <Route index  element={<Dashboard/>} /> 

                        {/* <Route path='/dashboard/home'  element={<Dashboard/>} />  */}

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
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    );
};

export default App;