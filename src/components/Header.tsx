import './Header.css';

export function Header () {
    return (
        <>
         <header className="site-header">
            <div className="container header-inner">

            <a className="brand" href="#home" aria-label="Naš restoran — početna">
                <span className="brand-mark">N.</span>
                <span className="brand-name">
                <strong>Naš restoran</strong>
                <span>Concept Bar</span>
                </span>
            </a>

            <nav className="main-nav" aria-label="Glavna navigacija">
                <a href="/">Početna</a>
                <a href="/menu">Meni</a>
                <a href="/#about">O nama</a>
                <a href="#reviews">Utisci</a>
                <a href="#contact">Kontakt</a>
            </nav>

            
            <a className="cart-link" href="cart.html" aria-label="Korpa, 0 proizvoda">
                <svg
                    className="cart-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>

                <span className="cart-count">0</span>
            </a>

            <a className="button header-cta" href="#contact">
                Pronađi nas <span className="arrow">↗</span>
            </a>

            <details className="mobile-menu">
                <summary aria-label="Otvori navigaciju">
                <span className="menu-lines"></span>
                </summary>
                <nav className="mobile-nav" aria-label="Mobilna navigacija">
                <a href="#home">Početna</a>
                <a href="#menu">Meni</a>
                <a href="#about">O nama</a>
                <a href="#reviews">Utisci</a>
                <a href="#contact">Kontakt</a>
                </nav>
            </details>

                </div>
      </header>
        </>
    );
}