import styled from "styled-components";

const StyledForm = styled.form`
display: flex;
flex-direction: column;
 width: 375px;
  padding: 1.5rem;
`
// #DFDEE0 color por default del borde
const StyledInputBox = styled.div`
  height: 45px;
   width: ${({ $cvc, $expDate }) =>
    $cvc ? '164px' : $expDate ? '72px' : '327px'};
  border-radius: 6px;
  border: 1px solid ${({ $hasError }) => ($hasError ? 'red' : 'pink')};
  font-size: 1.125rem;
  color: #21092F;
  font-weight: 500;
  padding-inline: 1rem; 
`

const StyledLabel = styled.label`
font-size: 12px;
letter-spacing: 2px;
font-weight: 500;
color: #21092F;
text-transform: uppercase;
`

const StyledSmallSizeFields = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`

export {StyledForm, StyledInputBox, StyledLabel, StyledSmallSizeFields}