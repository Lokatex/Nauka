import { useState } from 'react';
import '../Opiekunki/DodajOsobe.css';

function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    citizenship: '',
    languages: [],
    smoking: '',
    drivingLicense: '',
    gender: '',
    height: '',
    weight: '',
    birthDate: '',
    birthCity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Logika dodawania osoby, np. zapisywanie do serwera
  };

  return (
    <form className="application-form" onSubmit={handleSubmit}>
      <div className="form-row">
        {/* Sekcja: INFO */}
        <div className="form-section">
          <h3>INFO</h3>
          <div className="form-group">
            <label htmlFor="firstName">Imię:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Wpisz imię"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Nazwisko:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Wpisz nazwisko"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Płeć:</label>
            <div className="gender-options">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  required
                /> Mężczyzna
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  required
                /> Kobieta
              </label>
            </div>
          </div>
        </div>

        {/* Sekcja: Kontakt */}
        <div className="form-section">
          <h3>Kontakt</h3>
          <div className="form-group">
            <label htmlFor="phone">Telefon:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Wpisz telefon"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Wpisz email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Sekcja: Obywatelstwo, Język */}
        <div className="form-section">
          <h3>Obywatelstwo i Język</h3>
          <div className="form-group">
            <label htmlFor="citizenship">Obywatelstwo:</label>
            <select
              id="citizenship"
              name="citizenship"
              value={formData.citizenship}
              onChange={handleChange}
              required
            >
              <option value="">Wybierz...</option>
              <option value="polish">Polskie</option>
              <option value="germany">Niemieckie</option>
              <option value="ukraine">Ukraińskie</option>
              <option value="bialorus">Białoruskie</option>
              <option value="gruzia">Gruzińskie</option>
              <option value="other">Inne</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="languages">Język:</label>
            <select
              id="languages"
              name="languages"
              multiple
              value={formData.languages}
              onChange={handleChange}
              required
            >
              <option value="polish">Polski</option>
              <option value="english">Angielski</option>
              <option value="german">Niemiecki</option>
            </select>
          </div>
        </div>

        {/* Sekcja: Palenie i Prawo jazdy */}
        <div className="form-section">
          <h3>Palenie i Prawo jazdy</h3>
          <div className="form-group">
            <label htmlFor="smoking">Palenie:</label>
            <select
              id="smoking"
              name="smoking"
              value={formData.smoking}
              onChange={handleChange}
              required
            >
              <option value="">Wybierz...</option>
              <option value="yes">Tak</option>
              <option value="no">Nie</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="drivingLicense">Prawo jazdy:</label>
            <select
              id="drivingLicense"
              name="drivingLicense"
              value={formData.drivingLicense}
              onChange={handleChange}
              required
            >
              <option value="">Wybierz...</option>
              <option value="yes">Tak</option>
              <option value="no">Nie</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sekcja: Data i Miasto urodzenia, Wzrost, Waga */}
      <div className="form-row">
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="birthDate">Data urodzenia:</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthCity">Miasto urodzenia:</label>
            <input
              type="text"
              id="birthCity"
              name="birthCity"
              placeholder="Wpisz miasto urodzenia"
              value={formData.birthCity}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="height">Wzrost (cm):</label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="Wpisz wzrost"
              value={formData.height}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Waga (kg):</label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="Wpisz wagę"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <button type="submit" className="submit-button">Zatwierdź</button>
    </form>
  );
}

export default ApplicationForm;


