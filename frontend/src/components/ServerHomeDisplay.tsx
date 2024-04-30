import React, { useState, useEffect } from 'react';

const ServerHomeDisplay: React.FC = () => {
  const [data, setData] = useState<string>('Loading...'); // Use TypeScript generics to specify state type

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/');
        const text = await response.text();
        setData(text);
      } catch (error) {
        setData('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  return <div>{data}</div>;
};

export default ServerHomeDisplay;