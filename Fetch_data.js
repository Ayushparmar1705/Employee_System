
let url = "https://65e956324bb72f0a9c512ce9.mockapi.io/users";
let displayUsers = ()=>{
    let button = document.getElementById("display");




button.onclick = function(){


    let data = fetch(url);
    let str = "";
    let table = document.querySelector("#table");



    let finaldata = data.then((data)=>{


        return data.json();


    }).catch((data)=>{


        console.log(data);


    })


    finaldata.then((data)=>{
        let user = data;


        user.map((data)=>{
            str+=`   <tr>
                    <td style='padding:1em;'>${data.name}</td>
                    <td>${data.email}</td>
                    <td>${data.phone_number}</td>
                    <td>${data.department}</td>
                    <td><button onclick = "Edituser(${data.id})" id='delete'>Edit</button></td>
                    <td><button onclick = "deleteUser(${data.id})" id='delete'>Delete</button></td>
                    </tr>
            
            
            `
        });
        table.innerHTML = str;
      
    });
    
    
    
   
   
}


}


displayUsers();














let createUser = ()=>{
    let add = document.getElementById("add");
    add.onclick = function(e){
        e.preventDefault();
        let nameValue = document.querySelector("#name").value;
        let emailValue = document.querySelector("#email").value;
        let phnoValue = document.querySelector("#phno").value;
        let deptValue = document.querySelector("#dept").value;
        



        let newUser = {
            name : nameValue,
            email : emailValue,
            phone_number : phnoValue,
            department : deptValue,


        };
        console.log(newUser);   

        let fetchoptions = {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(newUser)

        }
        let data1 = fetch(url,fetchoptions);

        let fdata1 = data1.then((data)=>{
            return data.json();
        })


        fdata1.then((finaldata)=>{
            console.log(finaldata);
            alert("user Created succesfully...")
        })
    }
}

createUser();




function deleteUser(id){
    console.log(id);
    let fetchoptions = {
        method : "DELETE",
    };
    fetch(url + "/" + id , fetchoptions)
    .then((data)=>{
        return data.json();

    }).then((finaldata)=>{
        alert("user Deleted succesfully...");
    })
}


function Edituser(id){
    let nameValue = document.querySelector("#name").value;
    let emailValue = document.querySelector("#email").value;
    let phnoValue = document.querySelector("#phno").value;
    let deptValue = document.querySelector("#dept").value;
    



    let newUser = {
        name : nameValue,
        email : emailValue,
        phone_number : phnoValue,
        department : deptValue,


    };
    console.log(newUser);   

    let fetchoptions = {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(newUser)

    }
    let data1 =  fetch(url + "/" + id , fetchoptions);

    let fdata1 = data1.then((data)=>{
        return data.json();
    })


    fdata1.then((finaldata)=>{
        console.log(finaldata);
        alert("user Updated succesfully...")
    })
}