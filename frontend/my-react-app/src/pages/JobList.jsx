// import React, { useState, useEffect } from 'react';

// const JobList = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     // Fetch data from your Flask API here
//     fetch('/jobss') // Adjust the endpoint as needed
//       .then((response) => response.json())
//       .then((data) => {
//         setJobs(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Jobs List</h1>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>
//             <strong>Email:</strong> {job.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default JobList;




import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You can also use 'fetch' if preferred

function DisplayListFromBackend() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/diff')
  .then((response) => {
    // Update the component's state with the data received
    setData(response);
    console.log(response.data)
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

    // // Make an HTTP GET request to your Flask backend endpoint
    // axios.get('/diff')
    //   .then((response) => {
    //     // Update the component's state with the data received
    //     setData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //   });
  }, []); // Empty dependency array to ensure the effect runs once

  return (
    <div>
      <h1>List from Flask Backend</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayListFromBackend;

