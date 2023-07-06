import React from "react";
import s from "./checkbox.module.scss"



const Checkbox = () => {
	return (
		<div className={s.checkbox}>
			<input className={s.checkboxItem} type="checkbox" />
		</div>
	)
}





export default Checkbox