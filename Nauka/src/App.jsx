import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import Tabela from '../Tabela/Tabela';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import myIcon from '../public/ikony/plus.png';
import ApplicationForm from '../Opiekunki/DodajOsobe'; // Importowanie formularza

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Container>
          <Routes>
            {/* Główna strona z tabelą */}
            <Route path="/" element={
              <>
                <Row>
                  <Col>
                    <h1 className='text-center'>Opiekunki/Opiekunowe</h1>
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col md={8}>
                    <InputGroup>
                      <Form.Control type="text" placeholder="Imię/ Nazwisko/ email/ telefon" className='border border-2 border-success'/>
                      <Button variant="outline-secondary" className='border border-success border-2'>Szukaj</Button>
                    </InputGroup>
                  </Col>
                  <Col md={4} className="text-end">
                    <Link to="/dodaj-osobe">
                      <Button variant="success">
                        <img src={myIcon} alt="Ikona" style={{ width: '20px', marginRight: '8px' }} />
                        Dodaj osobę
                      </Button>
                    </Link>
                  </Col>
                </Row>
                <Tabela />
              </>
            } />
            
            {/* Podstrona do dodawania osoby */}
            <Route path="/dodaj-osobe" element={<ApplicationForm />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;



