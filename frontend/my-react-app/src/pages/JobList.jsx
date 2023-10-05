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
    const [error, setError] = useState(null);
    const data2 = localStorage.getItem("data")
    console.log(data2)
  
    // const fetchDataFromBackend = async () => {
    //   try {
    //     const response = await axios.post('http://localhost:5000/diff', data);
    //     // Assuming the response contains the desired data
    //     setData(response.data);
    //     setError(null); // Clear any previous errors
    //   } catch (err) {
    //     console.error('Error:', err);
    //     setError('An error occurred while fetching data.'); // Set an error message
    //   }
    // };



//   useEffect(() => {
//     handleRes()
    // // Make an HTTP GET request to your Flask backend endpoint
    // axios.get('/diff')
    //   .then((response) => {
    //     // Update the component's state with the data received
    //     setData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //   });
//   }, []); // Empty dependency array to ensure the effect runs once


  return (
    <div>
      <h1>List from Flask Backend</h1>
        {
            
            <>
            <h1>{data2}</h1>
            </>
        }
    </div>
  );
}

export default DisplayListFromBackend;

