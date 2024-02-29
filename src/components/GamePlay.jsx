import React from 'react'
import styled from 'styled-components'
import TotaScore from './TotaScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button } from '../styles/Button'
import Rules from './Rules'

const GamePlay = () => {


    const [score,setScore] = useState(0);
    const [selectedNUmber,setSelectedNUmber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error,setError] = useState("");
    const [showRules,setShowRules] = useState(false);


    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random()* (max-min) + min);
    }

    const roleDice = () => {
        if(!selectedNUmber) {
            
            setError("You have not selected any number");
            return;
        } ;
        
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber);

        

        if (selectedNUmber === randomNumber ){
            setScore( prev => prev+randomNumber);
        }
        else{
            setScore( prev => prev - randomNumber)
        }

        setSelectedNUmber(undefined)

    };
    const resetScore = () => {
        setScore(0);
    }

    

  return (
    <MainContainer>
        <div className="top_section">
            <TotaScore
            score={score}/>
            <NumberSelector
            error={error}
            setError={setError}
            selectedNUmber={selectedNUmber}
            setSelectedNUmber={setSelectedNUmber}
            />
        </div>
        <RollDice
        currentDice={currentDice}
        roleDice={roleDice}
        />

        <div className="btns">
            <Button onClick={resetScore}>Reset</Button>
            <Button onClick= {() => setShowRules(prev => !prev)}>
                {showRules ? "Hide" : "Show" }Rules</Button>
        </div>
        {showRules && <Rules/>}
        
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.div`
    padding-top:70px;
    max-width: 1180px;
    height: 100vh;
   
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;