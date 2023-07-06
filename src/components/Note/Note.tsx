import React, { FC, useState } from 'react';
import s from './Note.module.scss'
import { TaskI } from "../DataTasks/DataTasks"
import Checkbox from "./checkbox"

interface Props {
	task: TaskI

}

const Note: FC<Props> = ({ task }) => {
	const [open, setOpen] = useState(false)


	return (
		<div id={'id: ' + task.id + ', layer: ' + task.layerIndex} className={s.note}>
			<div className={s.noteTitle}><div className={s.noteName} style={{ fontWeight: task.layerIndex === '1' ? '700' : '400' }}>{task.name}</div><Checkbox /></div>
			{task.childs.length !== 0 && <div className={open ? s.noteOpen : s.noteCLosed} onClick={() => setOpen(!open)} >x</div>}
			{task.childs.length !== 0 && open && <div className={s.noteChilds}>
				{task.childs.map(el => <Note task={el} />)}
			</div>}
		</div>
	)
}


// const Task = () => {
// 	return (
// 		<div className={s.task}>
// 			<div className={s.taskContainer}>
// 				<img src="" alt="icon-arrow" />
// 				<h2 className={s.taskTitle}>
// 					Задача 1
// 				</h2>
// 				<input className={s.taskCheckbox} type="checkbox" />
// 			</div>
// 		</div>
// 	)
// }




export default Note