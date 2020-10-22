import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { Link, Switch } from 'react-router-dom'

const StyledButtonContainer = styled.button`
    cursor: pointer;
    padding: 8px 12px;
    display: inline;
    border: 0px;
    ${props => props.theme.shadows.z1};
    transition: all 300ms ease;
    margin: 8px 12px;
    border-radius: 0px;
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => props.theme.baseSize};
    text-transform: uppercase;
    border: none;
    ::focus {
        outline: none;
        border: none;
    }
    &&:active {
        outline: none;
        border: none;
    }
    ${props => {
        console.log(props)
        if (props.type === 'primary')
            return `
            background-color: ${props.theme.colors.accent};
            color: ${props.theme.colors.black};
        `
        if (props.type === 'light')
            return `
            background-color: ${props.theme.colors.white};
            color: ${props.theme.colors.black};
        `
        if (props.type === 'dark')
            return `
            background-color: ${props.theme.colors.black};
            color: ${props.theme.colors.white};
        `

        return `
            background-color: ${rgba(props.theme.colors.white, 0)};
            color: ${props.theme.colors.white};
            ${props.theme.shadows.z0};
        `
    }};
`

function Button({ routeUrl, type, ...restProps }) {
    return (
        <Link to={routeUrl || '/'}>
            <StyledButtonContainer type={type || 'base'}>Click Me</StyledButtonContainer>
        </Link>
    )
}

export default Button
