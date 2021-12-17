import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export const SideBarData = [
    
    {
        title: 'OverViwer',
        path: '/overviwer',
        icon: <AiIcons.AiFillHome/>,
        iconsClose: <RiIcons.RiArrowDownFill/>,
        iconsOpen: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Users',
                path: '/overviwer/Users',
                icon: <IoIcons.IoIosPaper/>, 
            },
            {
                title: 'Revenue',
                path: '/overviwer/Revenue',
                icon: <IoIcons.IoIosPaper/>, 
            }
        ]
    },

    {
        title: 'OverViwer',
        path: '/overviwer',
        icon: <AiIcons.AiFillHome/>,
        iconsClose: <RiIcons.RiArrowDownFill/>,
        iconsOpen: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Users',
                path: '/overviwer/Users',
                icon: <IoIcons.IoIosPaper/>, 
            },
            {
                title: 'Revenue',
                path: '/overviwer/Revenue',
                icon: <IoIcons.IoIosPaper/>, 
            }
        ]
    },

]