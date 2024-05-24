import s from "./Button.module.css";

interface ButtonProps {
    text: string;
    color: string;
    text_color: string;
    onClick: () => void;
}

export default function Button({ text, color, onClick, text_color }: ButtonProps) {
    return (
        <button
        style={{
            backgroundColor: color,
            color: text_color,
            fontSize: "1rem",
            padding: "1rem",
            borderRadius: "24px",
            border: "1px solid #0A3871",
            cursor: "pointer",
            margin: "0.5rem",
            width: "200px",
            height: "60px"
        }}
        onClick={onClick}
        className={s.button}
        >
        {text}
        </button>
    );
}