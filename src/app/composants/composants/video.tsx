"use client";

export const Video = ({src, titre, tag, description, }: {src: string; titre: string; description: string; tag: boolean}) => {
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
					<div className="flex flex-row mt-4 gap-4">
						<h3 className="text-xl font-bold text_bleu_nuit">
							{titre} 
						</h3>
						{tag && (
							<div className="bg_tag text-white px-4  rounded-full shadow-md transition 
									duration-300 ease-in-out hover:scale-105 hover:shadow-lg w-max">
								<p className="text-lg font-semibold text_bleu_nuit">New</p>
							</div>
						)}
					</div>
					<p className="mt-2 text-gray-800 w-40 sm:w-70 md:w-90 lg:w-100 xl:w-120">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};
