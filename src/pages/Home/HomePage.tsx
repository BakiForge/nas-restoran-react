import './HomePage.css';

export function HomePage () {
    return (
      <>
       <main>

            <section className="hero" id="home">
            <div className="container hero-grid">

                <div className="hero-content">
                <div className="eyebrow">Dobro došli u naš kutak</div>

                <h1>
                    Dobar ukus.<br />
                    <em>Pravo</em> društvo.
                </h1>

                <p className="hero-description">
                    Mesto za opušten ručak, dobre zalogaje i razgovore
                    koji se ne završavaju na brzinu. Svratite na
                    nešto ukusno i osećajte se kao kod kuće.
                </p>

                <div className="hero-actions">
                    <a className="button" href="#menu">
                    Istraži meni <span className="arrow">↗</span>
                    </a>
                    <a className="button button-outline" href="#about">
                    Naša priča
                    </a>
                </div>

                <div className="hero-note">
                    Veternik, Novi Sad · Naš restoran & Concept Bar
                </div>
                </div>

                <div className="hero-visual">
                <div className="hero-photo">
                    <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
                    alt="Prijatan ambijent restorana sa postavljenim stolovima"
                    />
                </div>

                <div className="hero-inset">
                    <img
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=650&q=85"
                    alt="Sveže pripremljena hrana na stolu"
                    />
                </div>

                <div className="hero-stamp">
                    <span>Uživaj<br />u svakom<br />zalogaju</span>
                </div>

                <div className="hero-caption">Dobra hrana · Dobra atmosfera</div>
                </div>

            </div>
            </section>


            <section className="intro-strip" aria-label="O restoranu">
            <div className="container intro-inner">

                <div className="intro-item">
                <span className="intro-icon">✳</span>
                <div>
                    <strong>Ukusna hrana</strong>
                    <span>Za svaki deo dana</span>
                </div>
                </div>

                <div className="intro-item">
                <span className="intro-icon">⌂</span>
                <div>
                    <strong>Opušten ambijent</strong>
                    <span>Bez žurbe i stresa</span>
                </div>
                </div>

                <div className="intro-item">
                <span className="intro-icon">♡</span>
                <div>
                    <strong>Ljubazna usluga</strong>
                    <span>Dobrodošli ste</span>
                </div>
                </div>

            </div>
            </section>


            <section className="menu-section" id="menu">
            <div className="container">

                <div className="menu-header">
                <div>
                    <div className="eyebrow">Nešto za svačiji ukus</div>
                    <h2 className="section-heading">Mali izbor,<br />veliko uživanje.</h2>
                    <p className="section-copy">
                    Od svakodnevnog ručka do zalogaja uz druženje —
                    pogledajte nekoliko predloga iz naše kuhinje.
                    </p>
                </div>

                <a className="button button-outline" href="#contact">
                    Pogledaj meni <span className="arrow">↗</span>
                </a>
                </div>

                <div className="menu-grid">

                <article className="menu-card">
                    <div className="menu-image">
                    <img
                        src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85"
                        alt="Grilovano meso servirano uz prilog"
                        loading="lazy"
                    />
                    <span className="menu-tag">Sa roštilja</span>
                    </div>
                    <div className="menu-info">
                    <h3>Roštilj</h3>
                    <span>Za ljubitelje mesa</span>
                    </div>
                    <p className="menu-description">
                    Sočni zalogaji sa roštilja, pripremljeni za
                    opušten ručak i dobro društvo.
                    </p>
                </article>

                <article className="menu-card">
                    <div className="menu-image">
                    <img
                        src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85"
                        alt="Hrskavi pomfrit poslužen kao prilog"
                        loading="lazy"
                    />
                    <span className="menu-tag">Omiljeni prilog</span>
                    </div>
                    <div className="menu-info">
                    <h3>Hrskavi zalogaji</h3>
                    <span>Za deljenje</span>
                    </div>
                    <p className="menu-description">
                    Nešto jednostavno i poznato, idealno uz
                    glavno jelo ili druženje za stolom.
                    </p>
                </article>

                <article className="menu-card">
                    <div className="menu-image">
                    <img
                        src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
                        alt="Raznovrsna sveža hrana pripremljena za ručak"
                        loading="lazy"
                    />
                    <span className="menu-tag">Za svaki dan</span>
                    </div>
                    <div className="menu-info">
                    <h3>Dnevni ručak</h3>
                    <span>Za pravu pauzu</span>
                    </div>
                    <p className="menu-description">
                    Pauza od svakodnevnih obaveza uz obrok
                    i malo vremena za sebe.
                    </p>
                </article>

                </div>

                <p className="menu-footnote">
                Fotografije su ilustrativne. Za aktuelnu ponudu i cene,
                kontaktirajte restoran.
                </p>

            </div>
            </section>


            <section className="about-section" id="about">
            <div className="container about-grid">

                <div className="about-visual">
                <div className="about-photo">
                    <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85"
                    alt="Unutrašnjost restorana sa stolovima i stolicama"
                    loading="lazy"
                    />
                </div>

                <div className="about-detail">
                    <span>Naš koncept</span>
                    <strong>Jednostavno.<br />Ukusno. Vaše.</strong>
                </div>
                </div>

                <div className="about-content">
                <div className="eyebrow">O nama</div>
                <h2 className="section-heading">
                    Mesto gde se<br />vraćaš zbog ukusa.
                </h2>

                <p className="section-copy">
                    Verujemo da dobar restoran nije samo ono što je
                    na tanjiru. Važni su i ljudi za stolom, prijatan
                    ambijent i osećaj da uvek imaš gde da svratiš.
                </p>

                <p className="section-copy">
                    Zato smo tu za svakodnevni ručak, spontana
                    okupljanja i one male pauze koje ulepšaju dan.
                </p>

                <a className="button button-outline" href="#contact">
                    Posetite nas <span className="arrow">↗</span>
                </a>
                </div>

            </div>
            </section>


            <section className="reviews-section" id="reviews">
            <div className="container">

                <div className="reviews-header">
                <div>
                    <div className="eyebrow">Reči naših gostiju</div>
                    <h2 className="section-heading">Lepo je čuti<br />da vam se dopada.</h2>
                </div>

                <div className="rating-summary">
                    <div className="rating-number">4,5</div>
                    <div>
                    <div className="rating-stars" aria-label="Ocena 4,5 od 5">
                        ★★★★★
                    </div>
                    <div className="rating-caption">Google ocena · 612 recenzija*</div>
                    </div>
                </div>
                </div>

                <div className="review-grid">

                <article className="review-card">
                    <div className="rating-stars" aria-label="Pet zvezdica">
                    ★★★★★
                    </div>

                    <blockquote className="review-quote">
                    “The lunch was good and abundant, and the
                    service as well. No complaints!”
                    </blockquote>

                    <div className="reviewer">
                    <strong>Review Forever</strong>
                    <span>Google recenzija</span>
                    </div>
                </article>

                <article className="review-card">
                    <div className="rating-stars" aria-label="Pet zvezdica">
                    ★★★★★
                    </div>

                    <blockquote className="review-quote">
                    “Nice and casual place with decent food
                    and a few memorable flavors.”
                    </blockquote>

                    <div className="reviewer">
                    <strong>SladjanaBA</strong>
                    <span>Google recenzija</span>
                    </div>
                </article>

                <article className="review-card">
                    <div className="rating-stars" aria-label="Pet zvezdica">
                    ★★★★★
                    </div>

                    <blockquote className="review-quote">
                    “Solidne ćevape. Konobar veoma ljubazan.”
                    </blockquote>

                    <div className="reviewer">
                    <strong>Pustolov Hoarfrost</strong>
                    <span>Google recenzija</span>
                    </div>
                </article>

                </div>

                <p className="reviews-source">
                *Ocena i broj recenzija prema dostavljenom Google rezultatu.
                <a
                    href="https://www.google.com/maps/search/?api=1&query=Na%C5%A1+restoran+Concept+Bar+Veternik"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Pogledajte na Google Maps
                </a>
                </p>

            </div>
            </section>


            <section className="contact-section" id="contact">
            <div className="container contact-grid">

                <div className="contact-content">
                <div className="eyebrow">Svratite do nas</div>
                <h2 className="section-heading">
                    Vaš sto<br />vas čeka.
                </h2>

                <p className="section-copy">
                    Bilo da ste u prolazu ili planirate ručak,
                    biće nam drago da vas ugostimo.
                    Pronađite nas u Veterniku.
                </p>

                <div className="contact-details">
                    <div>
                    <div className="contact-label">Adresa</div>
                    <div className="contact-value">
                        Novosadski put 106<br />
                        21203 Veternik, Srbija
                    </div>
                    </div>

                    <div>
                    <div className="contact-label">Lokacija</div>
                    <div className="contact-value">
                        Veternik<br />
                        Novi Sad
                    </div>
                    </div>

                    <div>
                    <div className="contact-label">Radno vreme</div>
                    <div className="contact-value">
                        Proverite aktuelno radno vreme<br />
                        pre dolaska.
                    </div>
                    </div>

                    <div>
                    <div className="contact-label">Rezervacije</div>
                    <div className="contact-value">
                        Kontakt informacije<br />
                        uskoro dostupne.
                    </div>
                    </div>
                </div>

                <a
                    className="button"
                    href="https://www.google.com/maps/search/?api=1&query=Novosadski+put+106%2C+Veternik"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Pronađi put <span className="arrow">↗</span>
                </a>
                </div>

                <div className="map-panel" aria-label="Ilustracija mape lokacije restorana">
                <div className="map-road"></div>

                <div className="map-pin" aria-hidden="true">
                    <span>⌂</span>
                </div>

                <div className="map-label">
                    <div>
                    <strong>Naš restoran</strong>
                    <span>Novosadski put 106, Veternik</span>
                    </div>

                    <a
                    href="https://www.google.com/maps/search/?api=1&query=Novosadski+put+106%2C+Veternik"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Uputstva ↗
                    </a>
                </div>
                </div>

            </div>
            </section>

      </main>
     </>
    );
}