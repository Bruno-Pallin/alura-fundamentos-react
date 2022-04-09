import React from 'react';
import style from './Button.module.scss'

//Class component are becoming deprecated
class Button extends React.Component<{
    type?: 'button' | 'submit' | 'reset' | undefined
}> {
    render() {
        const { type = 'button' } = this.props;
        return (
            <button className={style.button} type={type}>
                { this.props.children }  
            </button>
        )
    }
}

export default Button;