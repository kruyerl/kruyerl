import React from 'react'
import styled from 'styled-components'
import Tile from './Tile'

const StyledShowcaseContainer = styled.section`
    max-width: ${props => props.theme.screens.desktop};
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-auto-flow: column;
`

const StyledTileContainer = styled.div`
    width: 100%;
    padding: 12px;
    min-height: 200px;
`
const StyledMultiTileContainer = styled(StyledTileContainer)`
    display: grid;
    padding: 48px 24px;
    grid-gap: 24px;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, auto);

    & :nth-child(2) {
        grid-column-start: span 2;
    }
    & :nth-child(3) {
        grid-column-start: span 2;
    }
`

function Showcase() {
    return (
        <StyledShowcaseContainer>
            <StyledMultiTileContainer>
                <Tile title="About me" imgUrl="milky_way_starry_sky_galaxy_119519_3840x2160.jpg" />
                <Tile title="Blog" imgUrl="milky_way_starry_sky_galaxy_119519_3840x2160.jpg" />
                <Tile title="Case Studies" imgUrl="milky_way_starry_sky_galaxy_119519_3840x2160.jpg" />
                <Tile title="Contact" imgUrl="milky_way_starry_sky_galaxy_119519_3840x2160.jpg" />
            </StyledMultiTileContainer>
            <StyledTileContainer>
                <Tile title="Latest Things" imgUrl="milky_way_starry_sky_galaxy_119519_3840x2160.jpg" />
            </StyledTileContainer>
        </StyledShowcaseContainer>
    )
}

export default Showcase
