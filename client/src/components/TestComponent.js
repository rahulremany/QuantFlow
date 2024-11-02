// Test component for database connection
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5001/api/test")
      .then(response => setData(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Test Data from Database</h1>
      {data ? <p>Server Time: {data.now}</p> : <p>Loading...</p>}
    </div>
  );
};

export default TestComponent;