import './Button.css'

export const Button=({onClick,children})=>{
    return<button onClick={onClick}className='Button'>{children}</button>

}