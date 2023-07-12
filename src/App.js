import 'styles/global.scss';
import Footer from 'components/Footer';
import Gallery from 'components/Gallery';
import Header from 'components/Header';
import HighlightSection from 'components/HighlightSection';
import LearnMoreSection from 'components/LearnMoreSection';
import TestimonialsSection from 'components/TestimonialsSection';
import transformImg from 'assets/images/mobile/image-transform.jpg';
import standOutImg from 'assets/images/mobile/image-stand-out.jpg';
import graphicDesignImg from 'assets/images/mobile/image-graphic-design.jpg';
import photographyImg from 'assets/images/mobile/image-photography.jpg';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <LearnMoreSection 
        title='Transform your brand'
        summary='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
        banner={transformImg}
        color='hsl(51, 100%, 49%)'
      />
      <LearnMoreSection 
        title='Stand out to the right audience'
        summary='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
        banner={standOutImg}
        color='hsl(7, 99%, 70%)'
      />
      <HighlightSection 
        title='Graphic Design'
        summary='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
        background={graphicDesignImg}
        color='hsl(167, 40%, 24%)'
      />
      <HighlightSection 
        title='Photography'
        summary='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
        background={photographyImg}
        color='hsl(198, 62%, 26%)'
      />
      <TestimonialsSection />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
