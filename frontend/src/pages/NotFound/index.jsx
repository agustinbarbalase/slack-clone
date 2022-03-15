import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.h1`
  margin: 0;
  font-size: 6rem;
  font-weight: 500;
`;

const Phrase = styled.p`
  margin: 0.25rem 0;
  font-size: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Pathname = styled.div`
  display: inline-block;
  background-color: #ccc;
  margin: 0.5rem 0;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  color: #d9922a;
`;

const NotFound = () => {
  let location = useLocation();

  return (
    <Content>
      <Header>404</Header>
      <Phrase>Not found</Phrase>
      <Pathname>{location.pathname}</Pathname>
      <Link to="/">Go to home</Link>
    </Content>
  );
};

export default NotFound;
