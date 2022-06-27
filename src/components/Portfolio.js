import React from 'react'
import Cards from './Cards';
import './Cards.scss';
//import x1 from './images/myportfolio-4.png';

function Portfolio() {

// Below openNewTab() function open a window to the page 
function openNewTab1() { 
  window.open("https://zippy-speculoos-d21dc7.netlify.app", "_blank");
}

function openNewTab2() { 
  window.open("https://jade-zuccutto-92fc20.netlify.app", "_blank");
}

function openNewTab3() { 
  window.open("https://dulcet-dolphin-c01190.netlify.app", "_blank");
}

function openNewTab4() { 
  window.open("https://sample-exercise-samuelko.netlify.app", "_blank");
}
/*

<button className='card_btn' onClick={openNewTab1}>Explore</button>

*/

    const portfolioOne = new URL(`./images/web-1.png`, import.meta.url);
    const portfolioTwo = new URL(`./images/web-2.png`, import.meta.url);
    const portfolioThree = new URL(`./images/web-3.png`, import.meta.url);
    const portfolioFour = new URL(`./images/web-4.png`, import.meta.url);

    const titleOne = "One Page Bible";
    const titleTwo = "Movie Blockbuster";
    const titleThree = "About Coronavirus";
    const titleFour = "Clone Netflix";

    const descriptionOne = "This website displays a compact page about the Bible.  It integrates of the parallax scrolling, react hook, routing and navigation menu bar design. The result is fully responsive.";
    const descriptionTwo = "The application applies the use of the API to fetch the search movie results to users.  The effects of the card components are developed by using the CSS property.";
    const descriptionThree = "This application integrate certain features such as react-routing, react hoot to update state and effect control, youtube video embedded and truely responsive support mobile usage.";
    const descriptionFour = "This cloned version of netflix has configured to use of APIs to acquire the movie data.  On the other hands, Google Firebase is used as the backend database for user authenition purpose.";
    // Three demo web
    // 'https://zippy-speculoos-d21dc7.netlify.app';
    // 'https://jade-zuccutto-92fc20.netlify.app';
    // 'https://dulcet-dolphin-c01190.netlify.app';
    // 'https://sample-exercise-samuelko.netlify.app/';

  return (
    <>
       <div className='portfolio' id='portfolio'>
          <br></br>
          <br></br>
          <br></br>
       </div>
       <div className="wrapper" >
            <h1 > My Portfolio </h1>
       </div>

       <div className="wrapper" >
          <Cards img={portfolioOne} title={titleOne} description={descriptionOne} inlink={openNewTab1} />
          <Cards img={portfolioTwo} title={titleTwo} description={descriptionTwo} inlink={openNewTab2} />
          <Cards img={portfolioThree} title={titleThree} description={descriptionThree} inlink={openNewTab3} />
          <Cards img={portfolioFour} title={titleFour} description={descriptionFour} inlink={openNewTab4} />
       </div>
    </>
  );
}

export default Portfolio;