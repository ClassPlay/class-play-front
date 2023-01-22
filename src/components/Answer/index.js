import { useContext, useState } from 'react';
import { StyledAnswer } from './style';
import { MainContext } from '../../contexts/mainContext';

const Answer = ({ answer }) => {
  const [status, setStatus] = useState('');
  const { questions, questionsCounter, setCoinsState, coinsState } =
    useContext(MainContext);

  const ensureAnswer = () => {
    if (answer === questions[questionsCounter].respostaCerta) {
      setStatus('right');
      setCoinsState(coinsState + questions[questionsCounter].ponto);
    } else if (answer !== questions[questionsCounter].respostaCerta) {
      setStatus('wrong');
    } else {
      setStatus('');
    }
  };

  return (
    <StyledAnswer onClick={() => ensureAnswer()} status={status}>
      {answer}
    </StyledAnswer>
  );
};

export default Answer;
