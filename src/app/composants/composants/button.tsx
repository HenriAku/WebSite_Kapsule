
type ButtonProps = {
    texte: string;
    onClick?: () => void;
};

export const Button = ({ texte, onClick }: ButtonProps) => {
    return (
        <a
            href="/api/download"
            onClick={onClick}
            className="btn_violet inline-flex items-center justify-center
                text-white px-6 py-3 rounded-lg
                transition-all duration-300
                hover:scale-102 hover:-translate-y-1
                hover:shadow-[12px_12px_25px_rgba(59,55,172,0.75)]"
        >
            {texte}
        </a>
    );
};
