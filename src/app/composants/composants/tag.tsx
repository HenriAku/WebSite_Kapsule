export const Tag = ({ texte }: { texte: string }) => {
    return (
        <div className="bg_tag text-white px-4 py-2 rounded-full shadow-md transition 
            duration-300 ease-in-out hover:scale-105 hover:shadow-lg mb-3 w-max">
            <p className="text-lg font-semibold text_bleu_nuit">{texte}</p>
        </div>
    );
};