import { NavLink } from 'react-router-dom'
import Logo from '../../assets/shared/logo.svg'

export default function Navbar(props) {
  return (
    <nav style={{display: props.show ? 'block' : 'none'}} className={props.class}>
      {props.class === 'sidebar' ? <img className='close' onClick={props.func} src={Logo} alt='closed' /> : null}
      {props.class === 'topbar' ? <div className='line'></div> : null}
        <ul>
            <li onClick={props.blur}><NavLink to='/react_project/'><span>00</span> Home</NavLink></li>
            <li onClick={props.blur}><NavLink to='destination'><span>01</span> Destination</NavLink></li>
            <li onClick={props.blur}><NavLink to='crew'><span>02</span> Crew</NavLink></li>
            <li onClick={props.blur}><NavLink to='technology'><span>03</span> Technology</NavLink></li>
        </ul>
    </nav>
  )
}
