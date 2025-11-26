import React from "react";

interface Props {
    onClick: () => void;
}

const Button: React.FC<Props> = ({ onClick }) => {
    console.log("Button Rendered!!")
    return <button onClick={onClick}>Increase Count</button>
}

export default Button;