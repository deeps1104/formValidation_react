import styled, { keyframes } from "styled-components";

const Alert = ({ justAttached }) => {
  return (
    <ContainerBox justAttached={justAttached}>This is alert</ContainerBox>
  );
};

const slideIn = keyframes`
  0%{
    transform: translateX(200px) scale(0.5);

  }
  100%{
    transform: translateX(0) scale(1);
  }
  
`;

const slideOut = keyframes`
  0%{
    transform: translateX(0) scale(1);
  }
  100%{
    transform: translateX(200px) scale(0.5);
  }
  
`;

const ContainerBox = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  background-color: green;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  color: white;
  animation: ${slideIn} 1s ease;
  animation: 1s ${(props) => (props.justAttached ? slideIn : slideOut)} ease;
`;

export default Alert;
