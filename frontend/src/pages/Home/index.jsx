import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  background-color: #3B173C;
  height: 2.5rem;
  width: 100%;
  color: #fff;
`;

const Header = styled.header`
  height: calc(100vh - 2.5rem);
  background-color: #4a154b;
`;

const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: max-content;
  @media (min-width: 670px) {
    display: grid;
    grid-template-areas:
      "img h1"
      "img p";
  }
`;

const Title = styled.h1`
  display: inline-block;
  font-size: 3rem;
  text-align: center;
  margin: 1rem 0;
  color: #fff;
  @media (min-width: 670px) {
    font-size: 5rem;
    margin: 0;
    grid-area: h1;
  }
`;

const Phrase = styled.p`
  margin: 0;
  font-size: 1.5rem;
  color: #fff;
  grid-area: p;
`;

const Logo = styled.img`
  height: 8rem;
  grid-area: img;
  margin: 0;
  @media (min-width: 670px) {
    margin-right: 1rem; 
  }
`;

const Home = () => {
  return (
    <>
      <NavBar>
        <Link className="link-navbar" to="/login">
          Login
        </Link>
        <Link className="link-navbar" to="/signup">
          Sign Up
        </Link>
      </NavBar>
      <Header>
        <Presentation>
          <Logo src="/src/slack-favicon.svg" />
          <Title>Slack clone</Title>
          <Phrase>Your favorite app to work</Phrase>
        </Presentation>
      </Header>
    </>
  );
};

export default Home;
