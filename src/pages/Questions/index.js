import Answer from '../../components/Answer';
import QuestionHeader from '../../components/QuestionHeader';
import Header from '../../components/header/header';

function Questions() {
  return (
    <>
      <Header />
      <QuestionHeader points={10} />
      <Answer answer='teste' />
      <Answer answer='teste' />
    </>
  );
}

export default Questions;
