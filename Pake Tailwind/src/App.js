import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Home } from './pages';

export default function App() {
  return (
    // this is the App.js file -- this is important
    <div className="w-full h-screen overflow-auto bg-white block relative">
      <Navbar />
      <main className="h-auto max-w-[2560px] w-full bg-white overflow-hidden mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
