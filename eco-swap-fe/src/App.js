import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow p-4">
        {/* Routes go here */}
      </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
