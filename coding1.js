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
        
        
        //loadPhoto('sandbox.bittsdevelopment.com/code1/employeepics/2.jpg')
        //.then(console.log)
        //.catch(console.error);





        // I tried below code from the link https://blog.logrocket.com/improve-async-programming-with-javascript-promises-1652ac8d036d/ but it is printing the image three times i cannot understand why?
        //
       const loadPhoto = photo_url => new Promise((resolve, reject) => {
      // Create a new Image object
      const img = new Image();

      // Set the image source
      img.src = photo_url;

      // If the image is loads,
      // fulfil the promise with the Image object
      img.onload = () => resolve(img);

      // If there was an error,
      // reject the promise with the Error object
      img.onerror = evt => reject(new Error('Image could not be loaded.'));
    });

            
            //below is my work
    loadPhoto('http://sandbox.bittsdevelopment.com/code1/employeepics/3.jpg')
      .then(img => {
        img.alt = 'image of an employee';
        
        console.log(img);
        document.body.appendChild(img);
      })
      .catch(console.error);
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
