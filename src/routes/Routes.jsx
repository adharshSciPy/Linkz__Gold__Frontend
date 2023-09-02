import { Routes, Route } from 'react-router-dom';
import { AuthLayout, DefaultLayout } from '../layouts';
import { SignIn, SignUp, HomePage, ExchangePage, Ornaments, Buycoin, Lease, Partner, About, Customer } from '../scenes';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route element={<AuthLayout />}>
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/sign-in' element={<SignIn />} />
            </Route>

            <Route element={<DefaultLayout />}>
                <Route path='/exchange' element={<ExchangePage />} />
                <Route path='/ornaments' element={<Ornaments />} />
                <Route path='/buy-coins' element={<Buycoin />} />
                <Route path='/lease' element={<Lease />} />
                <Route path='/customer' element={<Customer />} />
                <Route path='/partner' element={<Partner />} />
                <Route path='/about' element={<About />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes