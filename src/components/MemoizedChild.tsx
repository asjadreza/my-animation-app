import React from "react";


const Button: React.FC<{ onClick: () => void }> = React.memo(({ onClick }) => {
    console.log("Button Rendered!");

    return <button style={{ margin: "5px"}} onClick={onClick}>Increase Count</button>
})

export default Button;