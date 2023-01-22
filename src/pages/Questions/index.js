import { useContext, useEffect, useState } from 'react';
import Answer from '../../components/Answer';
import QuestionHeader from '../../components/QuestionHeader';
import Header from '../../components/header/header';
import TrailTitle from '../../components/trailtitle/TrailTitle';

import { MainContext } from '../../contexts/mainContext';
import axios from 'axios';
import api from '../../services/api';

import NextArrow from '../../components/nextarrow/nextarrow';
import ProgressBar from '../../components/progressbar/progress';
import { StyledQuestions } from './style';

function Questions() {
  const {
    trail,
    questions,
    questionsCounter,
    setQuestionsCounter,
    setQuestions,
  } = useContext(MainContext);

  const counter = () => {
    if (questionsCounter + 1 < questions.length) {
      setQuestionsCounter(questionsCounter + 1);
    }
  };

  useEffect(() => {
    api
      .get(`trilhas/${trail.id}`)
      .then((res) => {
        console.log(res.data.perguntas);
        setQuestions(res.data.perguntas);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {}, [questions]);

  if (!questions || questions.length === 0) {
    return <></>;
  }

  return (
    
    <StyledQuestions>
      <Header />
      <TrailTitle trailName={trail.descricao} />
      <QuestionHeader
        points={questions[questionsCounter].ponto}
        questionNumber={`0${questionsCounter + 1}`}
        questionDescription={questions[questionsCounter].tituloPergunta}
      />
      {questions[questionsCounter].respostas.map((answer) => {
        return <Answer answer={answer} />;
      })}
      <button onClick={() => counter()}>next</button>
    </StyledQuestions>
  );
}

export default Questions;
