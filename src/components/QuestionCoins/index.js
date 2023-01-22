import { StyledQuestionCoins } from './style';
import CoinsImg from '../../images/coin.svg';

const QuestionCoins = ({ points }) => {
  return (
    <StyledQuestionCoins>
      <img src={CoinsImg} alt='coins images' />
      {points}
    </StyledQuestionCoins>
  );
};

export default QuestionCoins;
