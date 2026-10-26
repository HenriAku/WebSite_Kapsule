export const Card = ({ titre, description, imageSrc }: { titre: string; description: string; imageSrc: string }) => {
	return (
		<div className="bg_card rounded-4xl p-5 flex flex-col h-70 w-70
				shadow-[12px_12px_25px_rgba(59,55,172,0.50)]
				transition-all duration-300
				hover:scale-102 hover:-translate-y-1
				hover:shadow-[12px_12px_25px_rgba(59,55,172,0.75)]"
		>
			
			<div
				className={`lg:w-7 lg:h-7 md:w-6 md:h-6 w-5 h-5 bg-white rounded-full mb-3`}
				style={{
					maskImage: `url('${imageSrc}')`,
					maskSize: "contain",
					maskRepeat: "no-repeat",
					maskPosition: "center",
					WebkitMaskImage: `url('${imageSrc}')`,
					WebkitMaskSize: "contain",
					WebkitMaskRepeat: "no-repeat",
					WebkitMaskPosition: "center",
				}}
			/>
			<h3 className="text-xl font font-bold mb-2 text-white">{titre}</h3>
			<hr className="w-full border-t border-white p-3" />
			<p className="text-white w-9/10">{description}</p>
		</div>
	);
};
