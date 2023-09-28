import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./Todo";

const style = {
	bg: `h-screen w-screen bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0] flex justify-center items-center p-3`,
	container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
	heading: `text-3xl font-bold text-center text-gray-800 p-2`,
	form: `flex justify-between`,
	input: `p-2 w-full text-xl border`,
	button: `border p-4 ml-2 bg-purple-500 text-slate-100 rounded-md`,
	count: `text-center p-2`,
};

function App() {
	const [todos, setTodos] = useState(["learn React", "learn Tailwind"]);

	return (
		<div className={style.bg}>
			<div className={style.container}>
				<h3 className={style.heading}>WHAT TO-DO</h3>
				<form className={style.form}>
					<input
						type="text"
						placeholder="Add TO-DO"
						className={style.input}
					/>
					<button className={style.button}>
						<AiOutlinePlus size={30} />
					</button>
				</form>
				<ul>
					{todos.map((todo, index) => (
						<Todo
							key={index}
							todo={todo}
						/>
					))}
				</ul>
				<p className={style.count}>You have 2 TO-DOs</p>
			</div>
		</div>
	);
}

export default App;
