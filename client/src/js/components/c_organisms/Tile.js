import React from 'react'
import styled from 'styled-components'

const StyledTileContainer = styled.div`
    background: grey;
    height: 100%;
    padding: 24px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background-image: url('./images/00100srPORTRAIT_00100_BURST20200814103217085_COVER (1).jpg');
    height: 100%;
    width: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 320px;
    h4 {
        margin: 0px;
    }
`

function Tile({ title, linkUrl, imgUrl, ...restProps }) {
    return (
        <StyledTileContainer props>
            <h4>{title}</h4>
        </StyledTileContainer>
    )
}

export default Tile
