import React from 'react'
import './FavouritesCategory.scss'

const FavouritesCategory = () => {
  return (
    <div>
      <div className="favour__category">
        <div className="favour__category__items">
            <div className="favour__title">
              <span className='big'>Shop our top categories</span>
              <span>Shop now</span>
            </div>
            <div className="favour__sect">
              <div className="sect__one">
                <div className="image">
                  <img src="https://i.etsystatic.com/25792760/r/il/5da611/3405911484/il_300x300.3405911484_go20.jpg" alt="" />
                </div>
                <div className="sect__title">
                  <span>Personalized Gifts</span>
                </div>
              </div>
              <div className="sect__one">
                <div className="image">
                  <img src="https://i.etsystatic.com/20442851/c/2000/2000/500/0/il/a99d85/2952846478/il_300x300.2952846478_jtqc.jpg" alt="" />
                </div>
                <div className="sect__title">
                  <span>DIY & crafts</span>
                </div>
              </div>
              <div className="sect__one">
                <div className="image">
                  <img src="https://i.etsystatic.com/14340206/r/il/34b534/5662388029/il_300x300.5662388029_1aa2.jpg" alt="" />
                </div>
                <div className="sect__title">
                  <span>For Kids & Babies</span>
                </div>
              </div>
              <div className="sect__one">
                <div className="image">
                  <img src="https://i.etsystatic.com/17207134/c/769/769/197/59/il/913c7a/3121451996/il_300x300.3121451996_695g.jpg" alt="" />
                </div>
                <div className="sect__title">
                  <span>Jewelry</span>
                </div>
              </div>
              <div className="sect__one">
                <div className="image">
                  <img src="https://i.etsystatic.com/22152147/c/1801/1801/7/108/il/b7f3da/2734648803/il_300x300.2734648803_s88b.jpg" alt="" />
                </div>
                <div className="sect__title">
                  <span>Wedding</span>
                </div>
              </div>
              <div className="sect__one">
                <div className="image">
                  <img src="https://i.etsystatic.com/25792760/r/il/5da611/3405911484/il_300x300.3405911484_go20.jpg" alt="" />
                </div>
                <div className="sect__title">
                  <span>On Sale</span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FavouritesCategory
