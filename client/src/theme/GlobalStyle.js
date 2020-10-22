import { createGlobalStyle } from 'styled-components'
import modernNormalize from 'styled-modern-normalize'
import { rgba } from 'polished'

export const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: 'Arvo';
	src: url('./fonts/Arvo.woff2') format('woff2'),
        url('./fonts/Arvo.woff') format('woff'),
        url('./fonts/Arvo.ttf') format('truetype');
	font-weight: 300;
	font-style: normal;
}
@font-face {
	font-family: 'BantayogLight';
	src: url('./fonts/BantayogLight.woff2') format('woff2'),
        url('./fonts/BantayogLight.woff') format('woff'),
        url('./fonts/BantayogLight.ttf') format('truetype');
	font-weight: 300;
	font-style: normal;
}
@font-face {
	font-family: 'BantayogRegular';
	src: url('./fonts/BantayogRegular.woff2') format('woff2'),
        url('./fonts/BantayogRegular.woff') format('woff'),
        url('./fonts/BantayogRegular.ttf') format('truetype');
	font-weight: 300;
	font-style: normal;
}
@font-face {
	font-family: 'TuesdayNightRegular';
	src: url('./fonts/TuesdayNightRegular.woff2') format('woff2'),
        url('./fonts/TuesdayNightRegular.woff') format('woff'),
        url('./fonts/TuesdayNightRegular.ttf') format('truetype');
	font-weight: 300;
	font-style: normal;
}

/* ###
    Normalize
### */


${modernNormalize}


/* ###
    Typography
### */

    h1, h2, h3, h4, p, small, a {
        color: ${props => props.theme.colors.white};
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        margin-top: 0px;
        max-width: 800px;
    }

    h1 {
        font-family: ${props => props.theme.fonts.primary};
        font-size: 48px;
        line-height: 1.2;
        margin-bottom:${props => props.theme.baseSize};
        font-weight: 300;
        transform: rotate(-4deg);
        display: inline-block;
        letter-spacing: 5;
    }
    h2 {
        font-family: ${props => props.theme.fonts.secondary};
        font-size: 58px;
        line-height: 1.2;
        margin-bottom:${props => props.theme.baseSize};
        font-weight: 300;
        letter-spacing: 8px;
        text-transform: uppercase;
    }
    h3 {
        font-family: ${props => props.theme.fonts.tertiary};
        font-size: 40px;
        line-height: 1.2;
        margin-bottom:${props => props.theme.baseSize};
        font-weight: 300;
        letter-spacing: 6px;
        text-transform: uppercase;
    }
    h4 {
        font-family: ${props => props.theme.fonts.tertiary};
        font-size: 20px;
        line-height: 1.2;
        margin-bottom:${props => props.theme.baseSize};
        font-weight: 300;
        letter-spacing: 4px;
        text-transform: uppercase;
    }
    Body, p {
        font-family: ${props => props.theme.fonts.base};
        font-size: ${props => props.theme.baseSize};
        line-height: 1.4;
        margin-bottom:${props => props.theme.baseSize};
        font-weight: 300;
    }
    small, .caption {
        font-family: ${props => props.theme.fonts.base};
        font-size: 12px;
        line-height: 1.4;
        margin-bottom:${props => props.theme.baseSize};
        font-weight: 300;
    }
    a, .anchor {
        font-family: ${props => props.theme.fonts.tertiary};
        font-size: ${props => props.theme.baseSize};
        margin-bottom:${props => props.theme.baseSize};
        font-weight: 300;
        letter-spacing: 4px;
        text-transform: uppercase;
        text-decoration: none;
        display: inline-block;
    }

/* ###
    SelectionColors
### */

::selection{
    background: ${props => rgba(props.theme.colors.accent, 0.2)};
}
img::selection{
    background: transparent;
}


body{
    background-color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.baseSize};
    margin-bottom: 0px;
}


* {
    box-sizing: border-box;
}

`
