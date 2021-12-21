/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import fundo from './imagens/fundo.jpg';

const Baner = styled.div`
    position: absolute;
    left: 15%;
    top: 40%;
    @keyframes movebaner {
        0%{
            transform: translateY(10rem) rotateY(-40deg);
        }
        100%{
            transform: translateY(0) rotateY(0);
            opacity: 1;
        }
    }
`;
const Titulo = styled.div`
    color: white;
    font-size: 3.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-shadow: .3rem .4rem 2px rgb(0, 0, 0);
    opacity: 0;
    animation: movebaner 1s 0.5s forwards;
`;
const Nome = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    text-shadow: .3rem .4rem rgb(0, 0, 0, -4);
    font-size: 2rem;
    margin-bottom: 2rem;
    opacity: 0;
    animation: movebaner 1s 0.7s forwards;
`;
const Button = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 255);
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
    background-color: #6a3093;
    background: #8A2387;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #F27121, #E94057, #8A2387);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    opacity: 0;
    width: 150px;
    animation: movebaner 1s 0.9s forwards;

    &:hover{
        color: black;
    }
`;

const Fundo = styled.div`
    height: 60vh;
    width: 100%;
`;
const Img = styled.img`
    height: 100%;
    width: 100%;
    opacity: 0.8;
    object-fit: cover;
`;
const BanerPrincipal = () => {
    
    return ( 
        <>
            <Fundo>
                <Img src={ fundo }/>
            </Fundo>
            <Baner>
                <Titulo>Web Developer & Front End Designer</Titulo>
                <Nome>Thalles R. Dreissig</Nome>
                <Button to="#">Saiba mais</Button>
            </Baner>
            
        </>
    );
}
 
export default BanerPrincipal;