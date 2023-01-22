import Answer from '../../components/Answer';
import Header from '../../components/header/header';
import Trail from '../../components/trail/trail';
import { StyledTrailsSection } from "./trails";

function Home() {
  return (
    <>
      <Header />
      <StyledTrailsSection>
        <Trail />
        <Trail />
      </StyledTrailsSection>
    </>
  );
}

export default Home;
