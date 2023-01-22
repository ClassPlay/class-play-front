import QuestionCoins from '../QuestionCoins';
import { StyledQuestionHeader } from './style';

const QuestionHeader = ({ questionNumber, questionDescription, points }) => {
  return (
    <StyledQuestionHeader>
      <div>
        <h1>Questão {questionNumber}</h1>
        <QuestionCoins points={points} />
      </div>
      <p>testando ahsauihdhudh basuduabu bu duddaudiu{questionDescription}</p>
    </StyledQuestionHeader>
  );
};

export default QuestionHeader;
