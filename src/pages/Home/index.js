import { useContext } from 'react';
import HomeHeader from '../../components/HomeHeader';
import Header from '../../components/header/header';
import Trail from '../../components/trail/trail';

import { MainContext } from '../../contexts/mainContext';
import { StyledTrailsSection } from './trails';
import SideQuest from '../../components/SideQuest/sidequest';

function Home() {
  const { user, userTrails, setQuestionsCounter } = useContext(MainContext);
  setQuestionsCounter(0);
  return (
    <>
      <Header />
      <HomeHeader name={user} />
      <StyledTrailsSection>
        {userTrails.map((trail) => {
          return (
            <Trail
              key={trail.id}
              trailName={trail.descricao}
              trailImg={trail.imgUrl}
              trail={trail}
            />
          );
        })}
      </StyledTrailsSection>
      <SideQuest />
    </>
  );
}

export default Home;
