import styled from "styled-components";

const Input = styled.input`
  padding: 0.5rem;
  font-size: ${(props) => (props.type === "submit" ? "1.5rem" : "1.3rem")};
  border: ${(props) => (props.type === "submit" ? "none" : "1px solid #888")};
  color: ${(props) => (props.type === "submit" ? "#fff" : "#000")};
  background-color: ${(props) =>
    props.type === "submit" ? "#4A154B" : "#fff"};
  font-weight: ${(props) => (props.type === "submit" ? "500" : "300")};
  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.type === "submit" ? "rgba(74, 21, 75, .8)" : "#fff"};
    cursor: pointer;
  }
`;

export default Input;
