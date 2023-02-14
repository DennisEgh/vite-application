const axios = require('axios')

async function main(){


  axios.get('https://avancera.app/cities/')
 
  .then(function (response) {
  
    console.log(response.data.length);
  })
}
  main()
