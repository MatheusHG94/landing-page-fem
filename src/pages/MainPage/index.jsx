import React, { useEffect, useState } from 'react';
import Footer from 'components/Footer';
import Gallery from 'components/Gallery';
import Header from 'components/Header';
import HighlightSection from 'components/HighlightSection';
import LearnMoreSection from 'components/LearnMoreSection';
import TestimonialsSection from 'components/TestimonialsSection';

export default function MainPage() {
  // https://codingbeautydev.com/blog/react-get-window-width-on-resize/
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  let deviceType = windowWidth >= 1440 ? 'desktop' : 'mobile';

  return (
    <>
      <Header 
        deviceType={deviceType}
      />
      <main>
        <LearnMoreSection
          title='Transform your brand'
          summary='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
          color='hsl(51, 100%, 49%)'
          deviceType={deviceType}
          image='image-transform'
        />
        <LearnMoreSection
          title='Stand out to the right audience'
          summary='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
          color='hsl(7, 99%, 70%)'
          deviceType={deviceType}
          image='image-stand-out'
        />
        <HighlightSection
          title='Graphic Design'
          summary='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
          color='hsl(167, 40%, 24%)'
          deviceType={deviceType}
          image='image-graphic-design'
        />
        <HighlightSection
          title='Photography'
          summary='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
          color='hsl(198, 62%, 26%)'
          deviceType={deviceType}
          image='image-photography'
        />
        <TestimonialsSection />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
