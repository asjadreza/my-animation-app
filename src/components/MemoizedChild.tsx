import React from "react";


const Button: React.FC<{ onClick: () => void }> = React.memo(({ onClick }) => {
    console.log("Button Rendered!");

    return <button onClick={onClick}>Increase</button>
})

export default Button;