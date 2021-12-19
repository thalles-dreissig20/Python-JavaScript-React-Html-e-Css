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
        iconClosed: <RiIcons.RiArrowDownFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
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
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Reports 1',
                path: '/Reports/Reports1',
                icon: <IoIcons.IoIosPaper/>, 
            },
            {
                title: 'Reports 2',
                path: '/Reports/Reports2',
                icon: <IoIcons.IoIosPaper/>, 
            },
            {
                title: 'Reports 3',
                path: '/Reports/Reports3',
                icon: <IoIcons.IoIosPaper/>, 
            }
        ]
    },
    {
        title: 'Produts',
        path: '/produts',
        icon: <FaIcons.FaCartPlus/>,
    },
    {
        title: 'Team',
        path: '/Team',
        icon: <IoIcons.IoMdPeople/>,
    },
    {
        title: 'Messagens',
        path: '/Messagens',
        icon: <FaIcons.FaEnvelopeOpenText/>,

        iconClosed: <RiIcons.RiArrowDownFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,

        subNav: [
            {
                title: 'Messagens 1',
                path: '/Messagens/Messagens1',
                icon: <IoIcons.IoIosPaper/>, 
            },
            {
                title: 'Messagens 2',
                path: '/Messagens/Messagens2',
                icon: <IoIcons.IoIosPaper/>, 
            }
        ]
    },
    {
        title: 'Support',
        path: '/Support',
        icon: <IoIcons.IoMdHelpCircle/>,
    }
];