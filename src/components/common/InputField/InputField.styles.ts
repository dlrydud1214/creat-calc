import { css, styled } from "styled-components";

export const StyledInputField = styled.input`
	${({ theme }) => css`
		display: inline-flex;
		background-color: ${theme.color.black};
		color: ${theme.color.white};
		border: none;
		box-sizing: border-box;
		padding: 0 30px;
		${theme.typography.body1};
		text-align: right;
		border-radius: 99px;
		grid-column-start: 1;
		grid-column-end: 5;
	`}
`;
