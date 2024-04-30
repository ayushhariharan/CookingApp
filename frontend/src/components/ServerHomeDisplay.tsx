import React, { useState, useEffect } from 'react';

const ServerHomeDisplay: React.FC = () => {
  const [data, setData] = useState<string>('Loading...'); // Use TypeScript generics to specify state type

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/data');
        const jsonData = await response.json();
        setData(jsonData.message);
      } catch (error) {
        setData('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  return <div>{data}</div>;
};

export default ServerHomeDisplay;