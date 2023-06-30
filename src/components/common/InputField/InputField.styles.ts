import { css, styled } from "styled-components";

export const StyledInputField = styled.button`
	${({ theme }) => css`
		display: inline-flex;
		justify-content: center;
		align-items: center;
		background-color: ${theme.color.amber[900]};
		color: ${theme.color.white};
		height: 40px;
		width: 50px;
		border-radius: 99px;
	`}
`;
