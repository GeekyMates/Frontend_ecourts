import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
 const [courts, setCourts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          'https://api.ecourts.gov.in/statewise-court-list.php',
        );
        setCourts(result.data);
        setError(null);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
 }, []);

 if (loading) return <div>Loading...</div>;
 if (error) return <div>Error: {error.message}</div>;

 return (
    <div className="App">
      <h1>eCourts Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {courts.map((court) => (
            <tr key={court.id}>
              <td>{court.id}</td>
              <td>{court.name}</td>
              <td>{court.type}</td>
              <td>{court.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
}

export default App;