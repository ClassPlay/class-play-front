import { useContext, useEffect, useState } from 'react';
import Answer from '../../components/Answer';
import QuestionHeader from '../../components/QuestionHeader';
import Header from '../../components/header/header';
import TrailTitle from '../../components/trailtitle/TrailTitle';
import { MainContext } from '../../contexts/mainContext';
import axios from 'axios';
import api from '../../services/api';

function Questions() {
  const {
    trail,
    questions,
    questionsCounter,
    setQuestionsCounter,
    setQuestions,
  } = useContext(MainContext);

  const [perguntas, setPerguntas] = useState([]);

  const counter = () => {
    if (questionsCounter + 1 <= questions.length) {
      setQuestionsCounter(questionsCounter + 1);
    }
  };

  useEffect(() => {
    api
      .get(`trilhas/${trail.id}`)
      .then((res) => {
        console.log(res.data.perguntas);
        setPerguntas(res.data.perguntas);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {}, [perguntas]);

  if (!perguntas || perguntas.length === 0) {
    return <></>;
  }

  return (
    <>
      <Header />
      <TrailTitle trailName={trail.descricao} />
      <QuestionHeader points={perguntas[questionsCounter].ponto} />
      {perguntas[questionsCounter].respostas.map((answer) => {
        return <Answer answer={answer} />;
      })}
      <button onClick={() => counter()}>next</button>
    </>
  );
}

export default Questions;
