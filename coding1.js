let employee_list = [];

function onload() {
    
    getMyEmployees()
    .then(output => {
        console.log(output);
        for(let a in output){
        //let photo = output[a].employeeshasphoto ==="1" ? `<img style="width: 50%; border-radius=50%;" src="sandbox.bittsdevelopment.com/code1/employeepics/${output[a].employeeid}.jpg" alt="picture of an employer" />` : ``;
        //I am unable to get the employeer picture displayed on the page.
        //But, in console i can see the object created for me with all different employees.
        
        
        //let featured = output[a].employeeisfeatured === "1" ? `<div class="crown"> 👑</div>` : ``;
        // i have copied this crown image from the link https://hotemoji.com/crown-emoji.html
        // the crown thing is also not appearing for me.
        }
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