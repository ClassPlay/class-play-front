import Answer from '../../components/Answer';
import QuestionHeader from '../../components/QuestionHeader';
import Header from '../../components/header/header';
import TrailTitle from '../../components/trailtitle/TrailTitle';
import NextArrow from '../../components/nextarrow/nextarrow';
import ProgressBar from '../../components/progressbar/progress';
import { StyledQuestions } from './style';

function Questions() {
  return (
    
    <StyledQuestions>
      <Header />
      <TrailTitle />
      <QuestionHeader points={10} />

      <Answer answer='teste' />
      <Answer answer='teste' />
      
      <div className='progress-div'>
        <ProgressBar />
        <NextArrow />
      </div>
    </StyledQuestions>
    
  );
}

export default Questions;
