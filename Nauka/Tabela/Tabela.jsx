import Table from 'react-bootstrap/Table';
import './Tabela.css'


function StripedRowExample() {
  return (
    
    <Table className="border rounded-top" striped  hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Imię </th>
          <th>Nazwisko</th>
          <th>Action</th>
          <th>Numer Telefonu</th>
          <th>Email</th>
          <th>Poziom Języka</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>xyz</td>
          <td>000-000-000</td>
          <td>@mdo</td>
          <td>poziom</td>
          <td>ikony</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>xyz</td>
          <td>000-000-000</td>
          <td>@mdo</td>
          <td>poziom</td>
          <td>ikony</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>xyz</td>
          <td>000-000-000</td>
          <td>@mdo</td>
          <td>poziom</td>
          <td>ikony</td>
        </tr>
      </tbody>
    </Table>
    
  );
}

export default StripedRowExample;