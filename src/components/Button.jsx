
/* 
//Stateles Version
import React, { Component } from 'react'

class Button extends Component{ //si se importa Component desde el import, se puede llamar directamente extends Component
} 

const Button = props => {
    const {text} = props
    return (
        <div>
            <button type="button">{props.text}</button>
            <button type="button">{text} destructurado</button>
        </div>
    )
} 
*/

import React from 'react'

class Button extends React.Component {
    state = {
        count: 0
    }

    handleClick = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        const {count} = this.state
        return (
            <div>
                <h1>Manzanas: {count}</h1>
                <button type="button" onClick={this.handleClick}>Click</button>
            </div>
        )
    }   
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