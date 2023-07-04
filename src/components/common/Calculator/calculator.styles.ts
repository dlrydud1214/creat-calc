import { css, styled } from "styled-components";

export const Styledcalculator = styled.div`
	${({ theme }) => css`
        padding: 20px 10px;
        width: 100vw;
        height: 100vh;
		background-color: ${theme.color.black};
		color: ${theme.color.white};	

        form {		
            display: grid;
            grid-template-columns: repeat(4, calc(100% / 4 - 10px)) ;
            grid-template-rows: repeat(6, calc(100% / 6 - 10px)) ;
            gap: 10px;
            justify-content: space-between;
            height: 100%;
        }
	`}
`;
