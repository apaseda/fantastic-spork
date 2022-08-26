import {FC} from 'react';

interface ButtonProps {
    text: string,
    type: "button" | "submit" | "reset" ,
}

const Button: FC<ButtonProps> = ({text, type}) => {
    return (
        <button type={type}>{text}</button>
    )
}


export default Button;