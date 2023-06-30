import Button from "./components/common/Button";
import { StyledInputField } from "./components/common/InputField/InputField.styles";
import Typography from "./components/common/Typography";

function App() {
	return (
		<>
			<div style={{ background: "black" }}>
				{/* <Typography variant="body2" as="p">
					버튼 컴포넌트 만들기
				</Typography> */}
				<StyledInputField></StyledInputField>
				<Button>1</Button>
				<Button>2</Button>
				<Button>3</Button>
				<Button>4</Button>
				<Button>5</Button>
				<Button>6</Button>
				<Button>7</Button>
				<Button>8</Button>
				<Button>9</Button>
			</div>
		</>
	);
}

export default App;
