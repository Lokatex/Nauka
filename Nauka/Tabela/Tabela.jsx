import React, { useEffect, useState } from 'react';
import './Tabela.css';

function StripedRowExample() {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    // Pobieranie danych z endpointa serwerowego
    fetch('https://dev.careglo.eu/api/caregivers')
      .then(response => response.json())
      .then(data => setStatuses(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Status</th>
          <th>Numer Telefonu</th>
          <th>Email</th>
          <th>Poziom Języka</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {statuses.map(person => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td className={`status ${person.status}`}>
              {person.status === 'free' && 'Wolna'}
              {person.status === 'in duty' && 'W trakcie dyżuru'}
              {person.status === 'busy' && 'Zajęta'}
            </td>
            <td>{person.phone}</td>
            <td>{person.email}</td>
            <td>{person.languageLevel}</td>
            <td>ikony</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StripedRowExample;




