import logo from './logo.svg';
import './App.css';

import Header from './components/header/header';
import MainSection from './components/main-section/main-section';
import SecondarySection from './components/secondary-section/secondary-section';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <SecondarySection />
    </div>
  );
}

export default App;
