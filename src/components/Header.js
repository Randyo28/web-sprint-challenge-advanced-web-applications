import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const UlList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    font-size: 2rem;
    list-style: none;
    background-color: #00acee;
    height:4rem;
    width: 100%;
    margin: 0;
`

function Header(props) {
    return (
        <>
            <UlList>
                <Link to='/'>Login</Link>
                <Link to='/protected'>Bubbles</Link>
            </UlList>
        </>
    );
}

export default Header;