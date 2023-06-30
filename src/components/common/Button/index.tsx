import { StyledButton } from "./Button.styles";

interface childrenProps {
	children: React.ReactNode;
}

const Button = ({ children }: childrenProps) => {
	return <StyledButton>{children}</StyledButton>;
};

export default Button;
