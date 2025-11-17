import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import About from './components/About';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Courses />
      <Programs />
      <Gallery />
      <About />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
