import { Fragment } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { products } from '../../../data/products';
import './MenuPage.css';

// TODO: FORMAT THE PRICE, GET THE PRODUCT IMAGES AND INSERT IT INTO PRODUCTS.JS AND IN THE PRODUCTS GRID

export function MenuPage () {
    return (
        <> 
          <Header />    
          <main className="menu-page">

            <section className="menu-hero">
                <div className="menu-container">

                <div className="menu-breadcrumb">
                    <a href="index.html">Početna</a>
                    <span>/</span>
                    <span>Meni</span>
                </div>

                <div className="menu-hero-content">
                    <div className="eyebrow">Iz naše kuhinje</div>

                    <h1>
                    Ukusi koji<br />
                    <em>spajaju ljude.</em>
                    </h1>

                    <p>
                    Od omiljenih klasika do zalogaja za posebne trenutke.
                    Pronađite nešto po svom ukusu i uživajte u svakom zalogaju.
                    </p>
                </div>

                <div className="menu-hero-bottom">
                    <span>Pažljivo pripremljeno. Sa uživanjem posluženo.</span>
                    <span className="menu-hero-decoration">N. / MENU</span>
                </div>

                </div>
            </section>



            <section className="menu-products-section">
                <div className="menu-container">


                <div className="products-heading">
                    <div>
                    <div className="eyebrow">Otkrijte našu ponudu</div>
                    <h2>Naš meni</h2>
                    <p>Dobro poznati ukusi, spremni za vaš sto.</p>
                    </div>

                    <div className="products-count">
                    <span className="count-dot"></span>
                    <span>Naša ponuda</span>
                    </div>
                </div>


                <div className="menu-categories" aria-label="Kategorije hrane">
                    <button className="category-button active" type="button">
                    Sve
                    </button>

                    <button className="category-button" type="button">
                    Roštilj
                    </button>

                    <button className="category-button" type="button">
                    Glavna jela
                    </button>

                    <button className="category-button" type="button">
                    Prilozi
                    </button>

                    <button className="category-button" type="button">
                    Salate
                    </button>
                </div>


                <div className="products-grid">
                    {products.map((product) => {
                     return (
                       <Fragment key={product.id}>
                        <article className="product-card">

                                <div className="product-image-wrapper">
                                <img
                                className="product-image"
                                src="https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=85"
                                alt="Ćevapi servirani uz somun i prilog"
                                loading="lazy"
                                />   

                                <span className="product-badge">Omiljeno</span>

                            </div>

                            <div className="product-content">

                                <div className="product-category">
                                ROŠTILJ
                                </div>

                                <div className="product-title-row">
                                <h3>{product.name}</h3>
                                <span className="product-price">{product.priceCents}</span>
                                </div>

                                <p className="product-description">
                                {product.description}
                                </p>

                                
                                <div className="product-actions">
                                    <div className="quantity-selector">
                                        <label htmlFor="quantity-1">Količina</label>
                                        <select id="quantity-1" name="quantity">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        </select>
                                    </div>

                                    <button className="add-to-cart-button" type="button">
                                        <span>Dodaj u korpu</span>
                                        <span className="cart-button-icon">+</span>
                                    </button>

                                </div>

                                <div className="product-card-bottom">

                                <div className="product-rating">
                                    <span className="rating-stars" aria-label="Ocena 4,8 od 5">
                                    ★★★★★
                                    </span>

                                    <span className="rating-value">{product.rating.stars}</span>
                                    <span className="rating-count">({product.rating.count})</span>
                                </div>

                                <span className="product-serving">Porcija</span>

                                </div>

                                </div>
                       </article> 
                       </Fragment>
                     );
                    })}


                </div>


                <div className="menu-disclaimer">
                    <span className="disclaimer-icon">✳</span>
                    <p>
                    Cene i opisi su primeri za dizajn. Zamenite ih
                    stvarnom ponudom restorana pre objavljivanja.
                    </p>
                </div>

                </div>
                </section>
        </main>
        <Footer />
        </>
    );
}