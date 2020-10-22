import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../a_atoms/Button'
import CTA from './CTA'

const StyledFooter = styled.footer`
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start
    padding: 0px 24px 80px 24px;
    flex-wrap: wrap;
`
const StyledContactDetailContainer = styled.div`
    margin-top: 80px;
    z-index: 2;
    h3 {
        color: ${props => props.theme.colors.accent};
    }
`
const StyledContactImg = styled.div`
    width: 100%;
    height: 100%

    margin-right: -80px;
    ${props => props.theme.shadows.z5};

    background-image: url('./images/milky_way_starry_sky_galaxy_119519_3840x2160.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    max-width: 436px;
    min-height: 320px;
`
const StyledLogo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    * {
        color: ${props => props.theme.colors.gray};
    }
    h1 {
        font-size: 24px;
        margin: 80px 24px 24px 24px;
    }
`

function Footer() {
    return (
        <>
            <CTA />

            <StyledFooter>
                <StyledContactImg>test</StyledContactImg>
                <StyledContactDetailContainer>
                    <h1>Get In Touch</h1>
                    <h3>
                        @kruyerl <br></br> +1 215 667 9739
                    </h3>
                </StyledContactDetailContainer>
                <StyledLogo>
                    <h1>LK</h1>
                    <small>John 13:35</small>
                </StyledLogo>
            </StyledFooter>
        </>
    )
}

export default Footer
