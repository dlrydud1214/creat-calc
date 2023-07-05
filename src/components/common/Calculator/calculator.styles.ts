import { CACLCULATOR_COLUMNS } from "@/constants/calc";
import { css, styled } from "styled-components";

export const Styledcalculator = styled.div`
	${({ theme }) => css`
        padding: 20px 10px;
        width: 100vw;
        height: 100vh;
		background-color: ${theme.color.black};
		color: ${theme.color.white};	

        div {		
            display: grid;
            grid-template-columns: repeat(${CACLCULATOR_COLUMNS}, 1fr);
            gap: 10px;
            justify-content: space-between;
            height: 100%;
        }
	`}
`;
