import React from 'react';
import s from './Task.module.scss'





const Task = () => {
	return (
		<div className={s.task}>
			<div className={s.taskContainer}>
				<img src="" alt="icon-arrow" />
				<h2 className={s.taskTitle}>
					Задача 1
				</h2>
				<input className={s.taskCheckbox} type="checkbox" />
			</div>
		</div>
	)
}




export default Task