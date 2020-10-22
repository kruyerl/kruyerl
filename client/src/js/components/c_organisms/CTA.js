import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../a_atoms/Button'

const StyledCTA = styled.section`
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 160px 24px;
    margin-top: -80px;
    margin-bottom: -80px;
    z-index: -1;
    p {
        max-width: 600px;
    }
    background-image: url('./images/00100srPORTRAIT_00100_BURST20200814103217085_COVER (1).jpg');
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    * {
        z-index: 10;
    }
    #color-overlay {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            rgba(40, 40, 40, 1) 0%,
            rgba(40, 40, 40, 0.8) 40%,
            rgba(40, 40, 40, 0.8) 60%,
            rgba(40, 40, 40, 1) 100%
        );
        opacity: 1;
    }
`
function CTA() {
    return (
        <StyledCTA>
            <h3>Secondary Headings H3</h3>
            <p>
                Outside of his love for design and tech, Joel spends his free time enjoying being a family man, getting
                tattoos, listening all things punk/metal, and documenting life/work on YouTube.
            </p>

            <Button type="primary"></Button>
            <div id="color-overlay"></div>
        </StyledCTA>
    )
}

export default CTA
