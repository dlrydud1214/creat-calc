import { Styledcalculator } from "./calculator.styles";

interface childrenProps {
	children: React.ReactNode;
}

const Calculator = ({ children }: childrenProps) => {
	return (
		<Styledcalculator>
			<form>
				{children}
			</form>
		</Styledcalculator>
	)
};

export default Calculator;
