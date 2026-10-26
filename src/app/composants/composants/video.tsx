"use client";

export const Video = ({src, titre, description}:{src: string; titre: string; description: string}) => {
	return (
		<div className="flex flex-col bg-bleu-fonce rounded-2xl shadow-lg transition duration-300 
				ease-in-out hover:scale-105 hover:shadow-xl border border-gray-300">
			<div className="flex flex-col">
				<video
					src={src}
					muted
					controls
					controlsList="nodownload noplaybackrate noremoteplayback"
					disablePictureInPicture
					className="w-150 rounded-2xl"
				/>
				<div className="p-4">
					<h3 className="text-xl font-bold mt-4 text_bleu_nuit">
						{titre}
					</h3>
					<p className="mt-2 text-gray-800 w-120 lg:w-100 xl:w-120">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};
