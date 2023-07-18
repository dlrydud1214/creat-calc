import Button from "@/components/common/Button";
import InputField from "@/components/common/InputField";
import { Styledcalculator } from "./calculator.styles";
import { useState } from "react";
import { calcArr } from "@/constants/calc";
import { CalcItemType } from "@/type/calc";

const Calculator = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const [funcStack,setFuncStack] = useState<CalcItemType[]>([]);

	return (
		<Styledcalculator>
			<div>
				<InputField value={funcStack.map(item => item.value).join('')} />
				{calcArr.map((calcItem, index) => {
					const {color, halfwidth, value} = calcItem
					return (
						<Button 
							color={color} 
							halfwidth={halfwidth}
							key={value}
							onClick={() => {
								if(calcItem.type === "operator"){
									setFuncStack((prev) => {
										if( prev.length && prev[prev.length-1].type !== "operator" ){
											return [...prev, calcItem];
										} 
										return prev;
									});
								} else if (calcItem.type === "number") {
									setFuncStack((prev)=>[...prev, calcItem]);
								}
							}}
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
