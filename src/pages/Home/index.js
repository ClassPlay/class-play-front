import { useContext } from 'react';
import HomeHeader from '../../components/HomeHeader';
import Header from '../../components/header/header';
import Trail from '../../components/trail/trail';
import { StyledTrailsSection } from './trails';
import { MainContext } from '../../contexts/mainContext';

function Home() {
  const { user, userTrails } = useContext(MainContext);

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
    </>
  );
}

export default Home;
