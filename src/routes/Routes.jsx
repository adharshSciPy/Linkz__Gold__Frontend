import { Routes, Route } from 'react-router-dom';
import { AuthLayout, DefaultLayout, OrnamentsLayout } from '../layouts';
import { SignIn, SignUp, HomePage, ExchangePage, Ornaments, Buycoin, Lease, Partner, About, Customer, NotFound } from '../scenes';

const AppRoutes = () => {
    return (
        <Routes>
            <Route />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />

            <Route element={<AuthLayout />}>
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/sign-in' element={<SignIn />} />
            </Route>

            <Route element={<DefaultLayout />}>
                <Route path='/exchange' element={<ExchangePage />} />
                <Route path='/buy-coins' element={<Buycoin />} />
                <Route path='/lease' element={<Lease />} />
                <Route path='/customer' element={<Customer />} />
                <Route path='/partner' element={<Partner />} />
                <Route path='/about' element={<About />} />
            </Route>

            <Route path='/ornaments' element={<OrnamentsLayout />}>
                <Route element={<Ornaments />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes