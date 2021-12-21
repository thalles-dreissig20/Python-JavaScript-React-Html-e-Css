import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import {AiOutlineMenuFold} from "react-icons/ai";

const Nav = styled.div`
    background: #5C6169;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const NavLogo = styled.div`
    height: 50px;
    font-size: 3rem;
    margin-left: 30px;
    display: flex;
    cursor: pointer;
    color: white;
`;
const NavMenu = styled.div`
    height: 50px;
    color: white;
    font-size: 3rem;
    display: grid;
    right: 5%;
    margin-top: 20px;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr;
`;
const MenuHome = styled.div`
    font-size: 20px;
    transition: 3ms;
    cursor: pointer;
    margin: 0 20px;
    text-align: center;

    &:hover{
        border-bottom: 2px solid #F2F2F2;
    }
`;
const Projetos = styled.div`
    font-size: 20px;
    transition: 3ms;
    cursor: pointer;
    margin: 0 20px;
    text-align: center;

    &:hover{
        border-bottom: 2px solid #F2F2F2;
    }
`;
const Contato = styled.div`
    font-size: 20px;
    transition: 3ms;
    cursor: pointer;
    margin: 0 20px;
    text-align: center;

    &:hover{
        border-bottom: 2px solid #F2F2F2;
    }
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
                        Project
                    </Projetos>
                    <Contato to="#">
                        Contact
                    </Contato>
                </NavMenu>
            </Nav>
        </>
    )
};
 
export default MenuPrincipal;