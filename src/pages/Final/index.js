import { useContext } from 'react';
import Header from '../../components/header/header';
import TrailTitle from '../../components/trailtitle/TrailTitle';
import { StyledFinal } from './style';
import { MainContext } from '../../contexts/mainContext';
import Earn from '../../components/earn';

function Final() {
  const { trail, handleNavigation } = useContext(MainContext);

  return (
    <>
      <Header />
      <StyledFinal>
        <TrailTitle trailName={trail.descricao} />
        <p>Parabéns!! Agora você tem:</p>
        <Earn />
        <button onClick={() => handleNavigation('/home')}>INÍCIO</button>
      </StyledFinal>
    </>
  );
}

export default Final;
