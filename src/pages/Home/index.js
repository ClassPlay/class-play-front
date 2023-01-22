import HomeHeader from '../../components/HomeHeader';
import Header from '../../components/header/header';
import Trail from '../../components/trail/trail';
import { StyledTrailsSection } from "./trails";
import SideQuest from '../../components/SideQuest/sidequest';

function Home() {
  return (
    <>
      <Header />
      <HomeHeader />
      <StyledTrailsSection>
        <Trail />
        <Trail />
      </StyledTrailsSection>
      <SideQuest />
    </>
  );
}

export default Home;
