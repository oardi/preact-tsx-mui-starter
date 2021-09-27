import Button from '@mui/material/Button';
import { h } from 'preact';
import { useState } from 'preact/hooks';

interface IButtonCounterProps {
	name: string;
	onClicked?: (e: number) => void;
}

export const ButtonCounter = ({ name, onClicked }: IButtonCounterProps) => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
		onClicked && onClicked(count);
	}

	return (
		<Button variant="contained" onClick={() => handleClick()}>
			{name} - You clicked me {count} times
		</Button>
	);
}
