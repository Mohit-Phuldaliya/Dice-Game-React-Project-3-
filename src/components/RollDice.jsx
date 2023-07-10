import React from "react";
import styled from "styled-components";

export default function RollDice({ currentDice, roleDice }) {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/Images/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on the dice to roll</p>
    </DiceContainer>
  );
}

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
