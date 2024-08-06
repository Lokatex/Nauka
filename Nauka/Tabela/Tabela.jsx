import { useEffect, useState } from 'react';
import './Tabela.css';
import Icon1 from '../public/ikony/i.png'; // Przyklad importowania ikony
import Icon2 from '../public/ikony/x.png'; // Przyklad importowania ikony

function StripedRowExample() {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMyIsInVuaXF1ZV9uYW1lIjoiUmFmYWwiLCJuYmYiOjE3MjI5MzczNzMsImV4cCI6MTcyMjk0MDk3MywiaWF0IjoxNzIyOTM3MzczfQ.ymXE_uMuwB5Rn9nqR6OiK41WkGYL4brIy2upnkiMv2M';

    fetch('https://dev.careglo.eu/api/caregivers', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.$values) {
          setStatuses(data.$values);
        } else {
          console.error('Unexpected data format:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const statusMapping = {
    'Dostępna od zaraz ': { text: 'Dostępna od zaraz', className: 'free' },
    'Dostępna': { text: 'Dostępna', className: 'free' },
    'in duty': { text: 'W trakcie dyżuru', className: 'in-duty' },
  };

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Zdjęcie</th>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>
            Status
            <div className="color-bars">
              <span className="bar green"></span>
              <span className="bar orange"></span>
              <span className="bar red"></span>
            </div>
          </th>
          <th>Numer Telefonu</th>
          <th>Email</th>
          <th>Poziom Języka</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {statuses.map(person => (
          <tr key={person.id}>
            <td>
              <img 
                src={`https://dev.careglo.eu${person.photoUrl}`} 
                alt={`${person.firstName} ${person.lastName}`} 
                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
              />
            </td>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td className={`status ${statusMapping[person.status]?.className}`}>
              {person.status}
            </td>
            <td>{person.phone}</td>
            <td>{person.email}</td>
            <td>{person.languageLevel}</td>
            <td>
              <div className="action-buttons">
                <button className="action-button">
                  <img src={Icon1} alt="Icon 1" />
                </button>
                <button className="action-button">
                  <img src={Icon2} alt="Icon 2" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StripedRowExample;




