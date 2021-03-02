import React from 'react'

const Button = props => {
    const {text} = props
    return (
        <div>
            <button type="button">{props.text}</button>
            <button type="button">{text} destructurado</button>
        </div>
    )
}

export default Button


////comando rfc: crea la plantilla de un componente de react
/* import React from 'react'

export default function Button() {
    return (
        <div>
            
        </div>
    )
}
 */

////comando rafc
/* import React from 'react'

export const Button = () => {
    return (
        <div>
            
        </div>
    )
}
 */