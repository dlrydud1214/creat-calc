import { css, styled } from "styled-components";

export const StyledInputField = styled.input`
	${({ theme }) => css`
		display: inline-flex;
		background-color: ${theme.color.black};
		color: ${theme.color.white};
		border: none;
		box-sizing: border-box;
		padding: 0 30px;
		font-size: ${theme.font.pxToRem(30)};
		text-align: right;
		border-radius: 99px;
		grid-column-start: 1;
		grid-column-end: 5;
	`}
`;
