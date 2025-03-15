import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrainingPlans from './components/TrainingPlans';
import RunningDrills from './components/RunningDrills';
import Athletes from './components/Athletes';
import Coaches from './components/Coaches';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <TrainingPlans />
      <RunningDrills />
      <Athletes />
      <Coaches />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;

