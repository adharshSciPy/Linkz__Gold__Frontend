import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const OrnamentsNavbar = () => {

    const routeItems = [
        {
            label: 'Best Seller',
            to: '#'
        },
        {
            label: 'New Arrivals',
            to: '#'
        },
        {
            label: 'Bangles & Bracletes',
            to: '#'
        },
        {
            label: 'Special Deals',
            to: '#'
        },
        {
            label: 'Other Jwellery',
            to: '#'
        },
        {
            label: 'Rings & Earings',
            to: '#'
        },
        {
            label: 'Solitaries',
            to: '#'
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