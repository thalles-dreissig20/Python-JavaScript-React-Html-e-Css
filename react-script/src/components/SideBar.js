import React, { useState } from 'react';

import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from './SideBarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const SideBarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    position: fixed;
    justify-content: center;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 300ms;
    z-index: 10;
`
const SideBarWrap = styled.div`
    width: 100%;
`


const SideBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
                <SideBarNav sidebar={sidebar}>
                    <SideBarWrap>
                        <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {SideBarData.map((item, index) => {
                            return <SubMenu item={item} key={index} /> 
                        })};
                    </SideBarWrap>
                </SideBarNav>
            </Nav>
        </IconContext.Provider>
    </>
    );
};
export default SideBar; 