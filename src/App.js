import Header from 'components/Header';
import LearnMoreSection from 'components/LearnMoreSection';
import 'styles/global.scss';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <LearnMoreSection 
        title = 'Transform your brand'
        summary = 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
        banner = 'assets/images/mobile/image-transform.jpg'
        color = 'hsl(51, 100%, 49%)'
      />
      <LearnMoreSection 
        title = 'Stand out to the right audience'
        summary = 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
        banner = 'assets/images/mobile/image-stand-out.jpg'
        color = 'hsl(7, 99%, 70%)'
      />
    </div>
  );
}

export default App;
