import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import {AiOutlineMenuFold} from "react-icons/ai";

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const NavLogo = styled.div`
    height: 50px;
    font-size: 3rem;
    margin-top: 30px;
    margin-left: 30px;
    display: flex;
    cursor: pointer;
    color: white;
`;
const NavMenu = styled.div`
    height: 50px;
    font-size: 3rem;
    margin-top: 30px;
    margin-left: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    cursor: pointer;
    color: white;
`;
const MenuHome = styled.div`
`;
const Projetos = styled.div`
`;

const MenuPrincipal = () => {
    return ( 
        <>
            <Nav>
                <NavLogo to="#">
                    <AiOutlineMenuFold />
                </NavLogo>
                <NavMenu>
                    <MenuHome to="#">
                        Home
                    </MenuHome>
                    <Projetos to="#">
                        Projetos
                    </Projetos>
                </NavMenu>
            </Nav>
        </>
    )
};
 
export default MenuPrincipal;