import React from "react";
import "./AboutPage.scss";
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <div className="about">
        <div className="about__items">
          <div className="about__title">
            <span>ABOUT</span>
          </div>
          <div className="about__sections">
            <div className="about__section__one">
              <div className="about__section__one__left">
                <img
                  src="https://www.mushaaf.com/wp-content/uploads/2015/04/About-Us.jpeg"
                  alt=""
                />
              </div>
              <div className="about__section__one__right">
                <div className="about__sect__title">
                  <span>Keep Commerce Human</span>
                </div>
                <div className="about__sect__desc">
                  <span>
                    Etsy is the global marketplace for unique and creative
                    goods. It’s home to a universe of special, extraordinary
                    items, from unique handcrafted pieces to vintage treasures.
                    In a time of increasing automation, it’s our mission to keep
                    human connection at the heart of commerce. That’s why we
                    built a place where creativity lives and thrives because
                    it’s powered by people. We help our community of sellers
                    turn their ideas into successful businesses. Our platform
                    connects them with millions of buyers looking for an
                    alternative—something special with a human touch, for those
                    moments in life that deserve imagination. As a company, we
                    strive to lead with our guiding principles and to help
                    spread ideas of sustainability and responsibility whose
                    impact can reach far beyond our own business.
                  </span>
                </div>
              </div>
            </div>
              <div className="about__sect__two">
                <div className="about__sect__two__left">
                  <div className="about__two__title">Buy extraordinary</div>
                  <div className="about__two__desc">
                    <span>From the specific to the unexpected (or custom-made), our
                    search tools help buyers explore all the special
                    one-of-a-kind items offered by Etsy sellers. Our Journal and
                    Editors Picks curate exciting trends and ideas discovered in
                    the marketplace by our own team.</span>
                  </div>
                  <div className="about__two__button">
                    <Link to = '/'><button>Start shopping</button></Link>
                  </div>
                </div>
                <div className="about__sect__two__right">
                  <div className="image__two">
                    <img
                      src="https://a.storyblok.com/f/165154/1500x700/bff8c0dbec/promote-your-etsy-shop-to-attract-buyers.jpg/m/"
                      alt=""
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
