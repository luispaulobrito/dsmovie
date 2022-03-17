import { ReactComponent as GithumIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header className="dsmovie-nav-content">
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/luispaulobrito/" target="_blank" rel="noreferrer" > </a>
                    <div className="dsmovie-contact-container">
                        <GithumIcon />
                        <p className="dsmovie-contact-link">/luispaulobrito</p>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;