import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../a_atoms/Button'

const StyledNavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 90;
    h1 {
        font-size: 2em;
    }
`
const StyledMenu = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    li {
        padding: 0 16px;
        a {
            text-transform: uppercase;
            &#button {
                background-color: ${props => props.theme.colors.accent};
                color: ${props => props.theme.colors.black};
                font-family: ${props => props.theme.fonts.secondary};
                padding: 8px 16px;
                border-radius: 2px;
                ${props => props.theme.shadows.z1};
                transition: all 300ms ease;
                &:hover {
                    ${props => props.theme.shadows.z4};
                    transition: all 300ms ease;
                }
            }
        }
    }
`
const StyledMenuItem = styled.li``
function NavBar() {
    return (
        <StyledNavBar>
            <h1>LK</h1>
            <StyledMenu>
                <StyledMenuItem>
                    <Link to="/abc">about</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <Link to="/abc">projects</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <Link to="/abc">blog</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <Link to="/abc">blog</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <Button></Button>
                </StyledMenuItem>
            </StyledMenu>
        </StyledNavBar>
    )
}

export default NavBar
