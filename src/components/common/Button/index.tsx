import { css, styled } from "styled-components";

type childrenProps = {
	halfWidth?: boolean;
	fullWidth?: boolean;
	color?: "fill-amber-900" | "fill-gray-300" | "fill-gray-800";
}

const Button = styled.button<childrenProps>`
		display: inline-flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		border-radius: 999px;

	${({ color, theme }) => {
	switch (color) {
		case "fill-amber-900":
			return css`
			color: ${theme.color.white};
			background-color: ${theme.color.amber[900]};
			`;
		case "fill-gray-300":
			return css`
			color: ${theme.color.black};
			background-color: ${theme.color.gray[300]};
			`;
		case "fill-gray-800":
		default:
			return css`
			color: ${theme.color.white};
			background-color: ${theme.color.gray[800]};
			`;
		}
	}}
	${({ halfWidth }) =>
		halfWidth &&
	css`
		grid-column-start: 1;
		grid-column-end: 3;
	`};
	${({ fullWidth }) =>
		fullWidth &&
	css`
		grid-column-start: 1;
		grid-column-end: 6;
	`};
`;
export default Button;
