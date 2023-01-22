import React, { useContext, useEffect } from 'react';
import { StyledTrail } from './style';
import { MainContext } from '../../contexts/mainContext';
import api from '../../services/api';

function Trail({ trail, trailName, trailImg }) {
  const { handleNavigation, setTrail, questions, setQuestions } =
    useContext(MainContext);

  const goToQuiz = () => {
    setTrail(trail);
    handleNavigation(`/questions`);
  };

  return (
    <StyledTrail onClick={() => goToQuiz()}>
      <img src={trailImg} alt='trilha' />
      <h3>{trailName}</h3>
    </StyledTrail>
  );
}

export default Trail;
