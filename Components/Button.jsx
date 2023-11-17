import React from 'react'

function Button({ innerText = "Click me" }) {
    return (
        <input type="button" value={innerText} />
    )
}

export default Button