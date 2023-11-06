import { Routes, Route } from 'react-router-dom';
import { AuthLayout, DefaultLayout, OrnamentsLayout } from '../layouts';
import { SignIn, SignUp, HomePage, ExchangePage, Ornaments, Buycoin, Lease, Partner, About, Customer, NotFound, Bangles, BestSeller, NewArrivals, OtherJwellery, RingsAndEarings, Solitaries, SpecialDeals } from '../scenes';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/exchange" element={<ExchangePage />} />
                <Route path="/buy-coins" element={<Buycoin />} />
                <Route path="/lease" element={<Lease />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/partner" element={<Partner />} />
                <Route path="/about" element={<About />} />
            </Route>

            <Route element={<AuthLayout />}>
                <Route path="sign-up" element={<SignUp />} />
                <Route path="sign-in" element={<SignIn />} />
            </Route>

            <Route path="/ornaments" element={<OrnamentsLayout />}>
                <Route index element={<Ornaments />} />
                <Route path="best-seller" element={<BestSeller />} />
                <Route path="new-arrivals" element={<NewArrivals />} />
                <Route path="bangles" element={<Bangles />} />
                <Route path="special-deals" element={<SpecialDeals />} />
                <Route path="other-jewllery" element={<OtherJwellery />} />
                <Route path="rings-earrings" element={<RingsAndEarings />} />
                <Route path="solitaries" element={<Solitaries />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
