import Answer from '../../components/Answer';
import QuestionHeader from '../../components/QuestionHeader';
import Header from '../../components/header/header';
import TrailTitle from '../../components/trailtitle/TrailTitle';

function Questions() {
  return (
    <>
      <Header />
      <TrailTitle />
      <QuestionHeader points={10} />

      <Answer answer='teste' />
      <Answer answer='teste' />
    </>
  );
}

export default Questions;
