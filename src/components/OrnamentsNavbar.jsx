import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const OrnamentsNavbar = () => {

    const routeItems = [
        {
            label: 'Best Seller',
            to: '/ornaments/best-seller'
        },
        {
            label: 'New Arrivals',
            to: '/ornaments/new-arrivals'
        },
        {
            label: 'Bangles & Bracletes',
            to: '/ornaments/bangles'
        },
        {
            label: 'Special Deals',
            to: '/ornaments/special-deals'
        },
        {
            label: 'Other Jwellery',
            to: '/ornaments/other-jewllery'
        },
        {
            label: 'Rings & Earings',
            to: '/ornaments/rings-earrings'
        },
        {
            label: 'Solitaries',
            to: '/ornaments/solitaries'
        }
    ]

    return (
        <>
            <motion.div
                className='ornamentsnavbar'
                initial={{ y: -20 }}
                animate={{ y: 1 }}
            >
                <div className='ornamentsnavbar__elements'>
                    {
                        routeItems.map((item, val) => {
                            return (
                                <NavLink to={item?.to} key={val}>
                                    <p>{item.label}</p>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </motion.div>
        </>
    )
}

export default OrnamentsNavbar