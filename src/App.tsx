import { h } from 'preact';
import { ButtonCounter } from './components/ButtonCounter';
import './style.scss';

export const App = () => {
	return (
		<div class="p-2">
			<h1>preact tsx mui material starter</h1>
			<ButtonCounter name="Some Title" />
		</div>
	);
}
