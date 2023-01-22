import HomeHeader from '../../components/HomeHeader';
import Header from '../../components/header/header';
import Trail from '../../components/trail/trail';
import { StyledTrailsSection } from './trails';

function Home() {
  return (
    <>
      <Header />
      <HomeHeader />
      <StyledTrailsSection>
        <Trail />
        <Trail />
      </StyledTrailsSection>
    </>
  );
}

export default Home;
