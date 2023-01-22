import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import api from '../services/api';
import { useHistory } from 'react-router-dom';

export const MainContext = createContext({});

export const MainProvider = ({ children }) => {
  const [coinsState, setCoinsState] = useState(0);
  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState();
  const [userPoints, setUserPoints] = useState();
  const [userTrails, setUserTrails] = useState([]);

  const [trail, setTrail] = useState();
  const [questions, setQuestions] = useState([]);
  const [questionsCounter, setQuestionsCounter] = useState(0);

  useEffect(() => {
    api
      .get('/home/1')
      .then((res) => {
        setUser(res.data.nome);
        setUserPoints(res.data.pontuacao);
        setUserTrails(res.data.trilhas);
      })
      .catch((err) => console.log(err));
  }, []);

  const history = useHistory();
  const handleNavigation = (path) => history.push(path);

  return (
    <MainContext.Provider
      value={{
        coinsState,
        setCoinsState,
        progress,
        setProgress,
        user,
        userPoints,
        userTrails,
        trail,
        setTrail,
        handleNavigation,
        questionsCounter,
        setQuestionsCounter,
        setQuestions,
        questions,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
