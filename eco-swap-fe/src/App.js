import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold">Welcome to EcoFinds</h1>
      </main>

      <Footer />
    </div>
  );
}

export default App;
