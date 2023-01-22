import { useContext } from 'react';
import Header from '../../components/header/header';
import TrailTitle from '../../components/trailtitle/TrailTitle';
import { StyledFinal } from './style';
import { MainContext } from '../../contexts/mainContext';

function Final() {
  const { trail, coinsState, handleNavigation } = useContext(MainContext);

  return (
    <>
      <Header />
      <StyledFinal>
        <TrailTitle trailName={trail.descricao} />
        <p>Parabéns, agora você tem:</p>
        <button onClick={() => handleNavigation('/home')}>INÍCIO</button>
      </StyledFinal>
    </>
  );
}

export default Final;
