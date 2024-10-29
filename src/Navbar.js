import Contact from './Contact';
import Logo from './Logo';

export default function Navbar({ menuActive, handleClick }) {

    return (
        <div className="navbar">
            <Logo />
            <div className={`nav-items ${menuActive && 'active'}`}>
                <div className='nav-item grow-on-hover clickable'>HOME</div>
                <div className='nav-item grow-on-hover clickable'>PRICING</div>
                <div className='nav-item grow-on-hover clickable'>TIPS</div>
                <div className='nav-item grow-on-hover clickable'>BLOG</div>
                <div className='nav-item grow-on-hover clickable'>DESTINATIONS</div>
            </div>
            <Contact />
            <div className={`hamburger clickable ${menuActive && 'active'}`} onClick={handleClick}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}