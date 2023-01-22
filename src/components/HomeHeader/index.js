import { StyledHomeHeader } from './style';

function HomeHeader({ name }) {
  return (
    <StyledHomeHeader>
      <h1 className='animate-fade-in-down'>Bem Vindo, {name}!</h1>
      <p>O que você vai querer aprender hoje?</p>
    </StyledHomeHeader>
  );
}

export default HomeHeader;
