export const Button = ({ texte, lien }: { texte: string; lien: string }) => {
	return (
		<button className="btn_violet text-white px-6 py-3 rounded-lg mt-6
				transition-all duration-300
				hover:scale-102 hover:-translate-y-1
				hover:shadow-[12px_12px_25px_rgba(59,55,172,0.75)]">
			<a href="/vscode-survival-kit.zip" download="vscode-survival-kit.zip">
				Télécharger
			</a>
		</button>
	);
};