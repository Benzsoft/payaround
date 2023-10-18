import { Route, Routes } from 'react-router-dom';
import HomeApp from './Components/App';
import Layout from './Components/Layout';
import QR from './Components/QRcode';
import Dasbord from './Components/Dasbord';
import TermService from './Components/Term&Service';
import Home from './Components/Home';
import Crypto from './Components/Crypto';
import Remittance from './Components/Remittance';

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<HomeApp />} />
          <Route path="/QR" element={<QR />} />
          <Route path="/dashboard" element={<Dasbord />} />
          <Route path="/navbar" element={<TermService />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/remittance" element={<Remittance />} />
        </Routes>
      </Layout>
    </>
  );
}
