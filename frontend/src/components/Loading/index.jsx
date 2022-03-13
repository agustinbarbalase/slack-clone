import styled, { keyframes, css } from "styled-components";

const Spin = keyframes`
  0% {
    transform-origin: center;
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform-origin: center;
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const animation = css`${Spin} 1s ease infinite`

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  border: 10px solid rgba(0, 0, 0, 0.1);
  border-top-color: #4A154B;
  border-radius: 50%;
  animation: ${animation};
`

export default Loading;
