let apiUrl = ("https://61f531ae62f1e300173c4040.mockapi.io/api/user")

async function postData(){
    let allData = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        country : document.getElementById("country").value,
        state : document.getElementById("state").value,
        city : document.getElementById("city").value
    
    }
   try {
    await fetch(apiUrl,{
        method: "POST",
        body : JSON.stringify(allData),
        headers: {
            "Content-type" : "application/json"
        }
       
    });
    getData()
    alert("Data stored")
   } catch (error) {
       alert("Something went wrong")
   }
}

async function getData(){
    try {
     let userdata = await fetch(apiUrl);
     let users = await userdata.json();
     let tbody = document.getElementById("tbody");
     tbody.innerText = "";
    users.forEach(user => {

        let tr = document.createElement("tr")
        let idTd = document.createElement("td")
        idTd.innerText=user.id
        let nameTd = document.createElement("td")
        nameTd.innerText=user.name
        let emailTd = document.createElement("td")
        emailTd.innerText=user.email
        let countryTd = document.createElement("td")
        countryTd.innerText=user.country
        let stateTd = document.createElement("td")
        stateTd.innerText= user.state
        let cityTd = document.createElement("td")
        cityTd.innerText=user.city
        let actionTd = document.createElement("td");
        actionTd.innerHTML = `<button onclick = "putData(${user.id})">edit</button>`
        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(emailTd)
        tr.appendChild(countryTd)
        tr.appendChild(stateTd)
        tr.appendChild(cityTd)
        tr.appendChild(actionTd)
        tbody.appendChild(tr)

    })
    }
     catch (error) {
     alert("Error")   
    }
}

async function putData(){
   
   try {
    await fetch(`https://61f531ae62f1e300173c4040.mockapi.io/api/user${user.id}`,{
        method: "PUT",
        body : JSON.stringify(),
        headers: {
            "Content-type" : "application/json"
        }
       
    });
    getData()
    alert("Data stored")
   } catch (error) {
       alert("Something went wrong")
   }
}