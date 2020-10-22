import React from 'react'
import styled from 'styled-components'

import Showcase from '../c_organisms/Showcase'
import Button from '../a_atoms/Button'

const StyledHero = styled.header`
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 800px;
    justify-content: center;
    padding: 160px 24px;

    background-image: url('./images/00100srPORTRAIT_00100_BURST20200814103217085_COVER (1).jpg'); /* The image used */
    height: auto; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    * {
        z-index: 20;
    }
    #color-overlay {
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            rgba(40, 40, 40, 1) 0%,
            rgba(40, 40, 40, 0.3) 30%,
            rgba(40, 40, 40, 0.3) 60%,
            rgba(40, 40, 40, 1) 100%
        );
        opacity: 1;
    }
    #scroll-indicator {
        z-index: 10;
        position: absolute;
        bottom: -20px;
        right: 50%;
        width: 1px;
        height: 160px;
        background-color: ${props => props.theme.colors.white};
        opacity: 1;
    }
`
const StyleDiv = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 80px 24px;
    p {
        max-width: 600px;
    }
`

function LandingPage() {
    return (
        <>
            <StyledHero>
                <h1>Luke Kruyer</h1>
                <h2>
                    UX DESIGNER &<br></br> FRONT-END DEVELOPER
                </h2>
                <div id="color-overlay"></div>
                <div id="scroll-indicator"></div>
            </StyledHero>
            <StyleDiv>
                <h4>PHILADELPHIA BASED</h4>
                <h2>
                    SERVE PEOPLE. <br></br> SOLVE PROBLEMS.
                </h2>
                <p>
                    Outside of his love for design and tech, Joel spends his free time enjoying being a family man,
                    getting tattoos, listening all things punk/metal, and documenting life/work on YouTube.
                    <br></br>
                    <br></br>
                    Love for design and tech, Joel spends his free time enjoying being a family man, listening all
                    things punk/metal, and documenting life.
                </p>
                <div>
                    <Button type="primary" />
                    <Button />
                </div>
            </StyleDiv>
            <Showcase></Showcase>
        </>
    )
}

export default LandingPage
