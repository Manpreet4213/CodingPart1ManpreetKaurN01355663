let employee_list = [];

function onload() {
    
    getMyEmployees()
    .then(output => {
        console.log(output);
        //for(let a in output){
           // let photo = data[a].employeeshasphoto ==="1" ? '<img style="width: 95%; //border-radius=50%; padding-top = 2px;"
        //}
    });
}

async function getMyEmployees() {
    let response = await fetch("http://sandbox.bittsdevelopment.com/code1/fetchemployees.php", {
       method : "GET", 
    });
    let output = await response.json();
    return output;
}

window.addEventListener('load', onload);