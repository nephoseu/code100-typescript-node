const axios = require('axios');

const email = 'EMAIL-OR-USERNAME-HERE' // Replace with email or username given to you
const password = 'PASSWORD-HERE' // Replace with password given to you

// Step 1: Login
axios.post('https://challenger.code100.dev/login', {
  email: email,
  password: password
})
  .then(response => {
    const token = response.data.token;

    // Step 2: Call Authenticated Endpoint
    axios.get('http://challenger.code100.dev/testauthroute', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(authResponse => {
        console.log(authResponse.data);

        // Step 3: Call the API to GET the puzzle
        axios.get('https://challenger.code100.dev/getpuzzle', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(puzzleResponse => {
            console.log(puzzleResponse.data);

            // Step 4: Solve the puzzle

            //////////////////////////////
            ////// YOUR CODE HERE ////////
            //////////////////////////////

            answer = "some solution in requested format";

            // Step 5: Call the API to POST the solution
            axios.post('https://challenger.code100.dev/postanswer', {
              answer: answer
            }, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
              .then(solutionResponse => {
                console.log(solutionResponse.data);
              })
              .catch(error => {
                console.error(error);
              });
          })
          .catch(error => {
            console.error(error);
          });

      })
      .catch(error => {
        console.error(error);
      });
  })
  .catch(error => {
    console.error(error);
  });