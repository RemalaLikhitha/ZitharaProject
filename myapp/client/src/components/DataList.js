import React from 'react';

function DataList({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Customer Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
  {data.map((item, index) => (
    <tr key={index}>
      <td>{item.sno}</td>
      <td>{item.customerName}</td>
      <td>{item.age}</td>
      <td>{item.phone}</td>
      <td>{item.location}</td>
      <td>{item.created_at.toLocaleDateString()}</td>
      <td>{item.created_at.toLocaleTimeString()}</td>
    </tr>
  ))}
</tbody>
    </table>
  );
}

export default DataList;