import React from 'react';
import style from './Button.module.scss'

interface IProps {
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void,
    children: React.ReactNode
}

export default function Button({ type, onClick, children }: IProps) {
    return (
        <button className={style.button} type={type} onClick={onClick} >
            {children}
        </button>
    )
}

//Class component are becoming deprecated
// class Button1 extends React.Component<{
//     type?: 'button' | 'submit' | 'reset' | undefined,
//     onClick?: () => void
// }> {
//     render() {
//         const { type = 'button', onClick } = this.props;
//         return (
//             <button className={style.button} type={type} onClick={onClick} >
//                 {this.props.children}
//             </button>
//         )
//     }
// }