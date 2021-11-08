import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/spots/');
      const responseData = await response.json();
      setSpots(responseData.spots);
    }
    fetchData();
  }, []);

	

	return (
		<>
			<div>test</div>
			<ul>
				{spots.map((spot) => 
					<li>{spot.name}</li>
				)}		
			</ul>
		</>
	)
}

export default Home;