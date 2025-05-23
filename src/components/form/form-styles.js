import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 375px;
  padding: 1.5rem;
  gap:1rem
`

const StyledInputBox = styled.input`
  height: 45px;
  width: ${({ $cvc, $expDate }) =>
  $cvc ? '164px' : $expDate ? '72px' : '327px'};
  border-radius: 6px;
  border: 1px solid ${({ $hasError }) => ($hasError ? COLORS.error : COLORS.default)};
  font-size: 1.125rem;
  color: ${COLORS.secondaryColor};
  font-weight: 500;
  padding-inline: 1rem; 

  &:focus {
  border: 2px solid ${COLORS.focus};
  outline: none;
  }
`

const StyledLabel = styled.label`
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 500;
  color:${COLORS.secondaryColor};
  text-transform: uppercase;
`

const StyledSmallSizeFields = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`

const StyledSubmitButton = styled.input`
  background-color:${COLORS.secondaryColor};
  color: #fff;
  width: 327px;
  height: 53px;
  border-radius: 8px;
  border: none;
`
const StyledErrorText = styled.span`
  color: ${COLORS.error};
  font-size: 0.75rem;
`

export {StyledForm, StyledInputBox, StyledLabel, StyledSmallSizeFields, StyledSubmitButton, StyledErrorText}