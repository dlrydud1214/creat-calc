import Button, { buttonProps } from "@/components/common/Button";
import InputField from "@/components/common/InputField";
import { Styledcalculator } from "./calculator.styles";
import { useState } from "react";
import { type } from "os";
import { calcArr } from "@/constants/calc";

// interface childrenProps {
// 	children: React.ReactNode;
// }

const Calculator = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const handleOnClick = () => {
	console.log(inputValue);
	}

	const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		console.log(inputValue)
	}

	return (
		<Styledcalculator>
			<div>
				<InputField value={inputValue} onChange={handleChangeValue} />
				{calcArr.map(({color, halfwidth, value}, index) => {
					return (
						<Button 
							color={color} 
							halfwidth={halfwidth}
							key={value}
							onClick={() => handleOnClick()}
						> 
							{value}
						</Button>
					)
				})}
			</div>
		</Styledcalculator>
	)
};

export default Calculator;
