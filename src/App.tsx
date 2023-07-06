import React from 'react';
import './App.scss';
import Note from './components/Note/Note';
import { mock } from './components/DataTasks/DataTasks';

function App() {
	return (
		<div className="app">
			<h1 className="appTitle">My Tasks</h1>
			{mock.length && mock.map(el => <Note task={el} />)}
			<button className="appButtonDelete">Удалить задачу</button>
		</div>
	)
}

export default App;
