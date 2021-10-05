import { h, render } from 'preact';
import { App } from './App';

render(<App />, document.body);

if (module.hot) {
	module.hot.accept();
}
