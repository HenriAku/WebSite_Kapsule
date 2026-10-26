"use client";

import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from "react";

// Types pour le contexte
interface ContenaireContextType {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	video: string;
	setvideo: Dispatch<SetStateAction<string>>;
}

interface ContenaireProviderProps {
	children: ReactNode;
}

// Création du contexte avec un type précis
const ContenaireContext = createContext<ContenaireContextType | undefined>(undefined);

// Le Provider qui englobe l'application
export const ContenaireProvider = ({ children }: ContenaireProviderProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [video, setvideo] = useState("Dracula");

	return (
		<ContenaireContext.Provider value={{ isOpen, setIsOpen, video, setvideo }}>
			{children}
		</ContenaireContext.Provider>
	);
};

// Hook personnalisé pour consommer le contexte
export const useContainer = () => {
	const context = useContext(ContenaireContext);
	if (!context) {
		throw new Error("useContainer doit être utilisé à l'intérieur d'un ContenaireProvider");
	}
	return context;
};