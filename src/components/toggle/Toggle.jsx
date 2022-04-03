import React, {useContext} from 'react'
import './toggle.css'
import Sun from '../../imgs/sun.png'
import Moon from '../../imgs/moon.png'
import { ThemeContext } from '../../context'

function Toggle() {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className='t' onClick={handleClick}>
            <img src={Sun} alt="sun" className="t-icon" />
            <img src={Moon} alt="sun" className="t-icon" />
            <div className="t-button" style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    )
}

export default Toggle
