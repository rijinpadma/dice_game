import React from 'react'
import styled from 'styled-components'
import TotaScore from './TotaScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'

const GamePlay = () => {
  return (
    <MainContainer>
        <div className="top_section">
            <TotaScore/>
            <NumberSelector/>
        </div>
        <RollDice/>
        
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.div`
    padding-top:70px;
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }   
`;