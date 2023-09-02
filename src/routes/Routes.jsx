import { Routes, Route } from 'react-router-dom';
import { AuthLayout, DefaultLayout } from '../layouts';
import { SignIn, SignUp, LandingPage } from '../scenes';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route element={<AuthLayout />}>
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/sign-in' element={<SignIn />} />
            </Route>

            <Route element={<DefaultLayout />}>

            </Route>
        </Routes>
    )
}

export default AppRoutes