import { InputHTMLAttributes } from "react";
import { StyledInputField } from "./InputField.styles";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>

const InputField = ({ ...inputProps }:InputFieldProps) => {
	return <StyledInputField { ...inputProps} />;
};

export default InputField;