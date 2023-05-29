// fetch random recipes 
const fetchRandomRecipes = (recipe) => {

    // create form data 
    let formData = new FormData()
    formData.append()
    formData.append("query", "milk");

    // Request url 
    const requestUrl = "https://recipe-scrap.vercel.app/Ii8LhnECbHEMXZWFReHh";

    //request options 
    var requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    };


    //get data with fetch  -->
    fetch(requestUrl, requestOptions)
    .then(response => response.text())
    .then(result => console.log(JSON.parse(result)))
    .catch(error => console.log('error', error))
    .finally(()=>{
      console.log("completed")
    });

  }