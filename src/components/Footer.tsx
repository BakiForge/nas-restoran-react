import './Footer.css';

export function Footer () {
    return (
        <> 
         <footer className="site-footer">
            <div className="container footer-inner">

            <a className="footer-brand" href="#home">
                <span className="brand-mark">N.</span>
                <strong>Naš restoran · Concept Bar</strong>
            </a>

            <p>© 2026 Naš restoran. Sva prava zadržana.</p>

            <nav className="footer-links" aria-label="Navigacija u podnožju">
                <a href="#menu">Meni</a>
                <a href="#about">O nama</a>
                <a href="#contact">Kontakt</a>
            </nav>

                </div>
       </footer>
     </>
    );
}