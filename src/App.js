import React, {useRef, useEffect} from 'react';
import './App.scss';
import arrow from './images/arrow-right.svg';
import girl from './images/girl.webp';
import boy from './images/ag.jpg';
import { TweenMax, TimelineLite, Power3} from 'gsap'; 

function App() {

  let App = useRef(null);
  let images = useRef(null)
  let tl = new TimelineLite({delay: .8});
  let content = useRef(null);

  useEffect(() => {
      // IMAGES

      const girlImage = images.firstElementChild;
      const boyImage = images.lastElementChild;


      // CONTENT HEADLLINES
      const headlineFirst = content.children[0].children[0]
      const headlineSecond = headlineFirst.nextSibling;
      const headlineThird = headlineSecond.nextSibling;
      const contentP = content.children[1]
      const contentButton = content.children[2]


      // IMAGE ANIMATION
    TweenMax.to(App, 0, {css: {visibility: 'visible'}})
    tl.from(girlImage, 1.2,{y: 1280, ease: Power3.easeOut}, 'Start')
        .to(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
        .from(boyImage, {y: 1280, ease: Power3.easeOut}, .2)
        .to(boyImage.lastElementChild, 2, {scale: 1.6, duration: 3, ease: Power3.easeOut})

        console.log(headlineFirst ,
          headlineSecond,
          headlineThird ,
          contentP ,
          contentButton )

          // CONTENT ANIMATION

          tl.staggerFrom( [headlineFirst.children, headlineSecond.children, headlineThird.children,], .9, {
            y: 44, ease: Power3.easeOut, delay: .8
          }, .20, 'Start')
          .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
          .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

      },[tl]) 
 
  return (
    <div className="hero" ref={el => App = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving the burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">of disease caused</div>  
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
              <div className="btn-row">
                <button className="explore-button">Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="row"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={el => images = el}>
              <div className="hero-image girl">
                <img src={girl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={boy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
