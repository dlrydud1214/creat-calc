import Button from "./components/common/Button";
import Calculator from "./components/common/Calculator";
import InputField from "./components/common/InputField";
import Typography from "./components/common/Typography";

function App() {
	return (
		<>
			{/* <div style={{ background: "black" }}> */}
			{/* <Typography variant="body2" as="p">버튼 컴포넌트 만들기</Typography> */}
				<Calculator>
					<InputField />
					<Button color="fill-gray-300">AC</Button>
					<Button color="fill-gray-300">+/-</Button>
					<Button color="fill-gray-300">%</Button>
					<Button color="fill-amber-900">÷</Button>
					<Button>7</Button>
					<Button>8</Button>
					<Button>9</Button>
					<Button color="fill-amber-900">X</Button>
					<Button>4</Button>
					<Button>5</Button>
					<Button>6</Button>
					<Button color="fill-amber-900">-</Button>
					<Button>1</Button>
					<Button>2</Button>
					<Button>3</Button>
					<Button color="fill-amber-900">+</Button>
					<Button halfWidth>0</Button>
					<Button>.</Button>
					<Button color="fill-amber-900">=</Button>
				</Calculator>
			{/* </div> */}
		</>
	);
}

export default App;
