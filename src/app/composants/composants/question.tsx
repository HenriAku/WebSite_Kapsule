"use client";

import React from "react";

export const Question = ({ question, reponse }: { question: string; reponse: string }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className="flex flex-col items-center justify-center mb-5 bg-white">
			<div className="border p-4 rounded-4xl shadow-md cursor-pointer w-full flex flex-row bg-white" onClick={() => setIsOpen(!isOpen)}>
				<h3 className="text-lg font text-black">{question}</h3>
				{isOpen ? 
					<p className="ml-auto text-black text-2xl">-</p> 
					:
					<p className="ml-auto text-black text-2xl">+</p>
				}
			</div>
			<div className={`w-11/12 flex flex-col items-center justify-center ${isOpen ? "block" : "hidden"}`}>
				<div className="p-4 bg-white rounded-b-4xl border">
					<p className="text-lg font text-black">{reponse}</p>
				</div>
			</div>
		</div>
	);
};