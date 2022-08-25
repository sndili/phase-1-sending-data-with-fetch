// Add your code here

function submitData(name,email){
    const data =  {
        name: name,
        email: email
    };
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function(response){
        return response.json()
    }) 
    .then(data => {
        const id = data["id"]
        const body = document.querySelector("body")
        body.innerHTML = id;
    })
    .catch(function(error){
        alert("Unauthorized Access");
        document.body.innerHTML = error.message
    });
}
submitData("sylvia", "nxcmvbmbvxmb")