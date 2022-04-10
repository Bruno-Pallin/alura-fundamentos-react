import React from 'react';
import style from './Button.module.scss'

//Class component are becoming deprecated
class Button extends React.Component<{
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void
}> {
    render() {
        const { type = 'button', onClick } = this.props;
        return (
            <button className={style.button} type={type} onClick={onClick} >
                {this.props.children}
            </button>
        )
    }
}

export default Button;