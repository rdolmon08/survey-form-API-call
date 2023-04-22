fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=HD59jIohcYkATAZzZZ9pfgmFlp67wpcTaVyb8Swu')
  .then(response => response.json())
  .then(data => populateBoxes(data));

function populateBoxes(data) {
  if (!data.photos) {
    return null;
  }
  
  // console.log(data);
  // step 0. grab first item from photos array
  var firstPhoto = data.photos[0];
  
  // step 1. populate properties
  var id = firstPhoto.id;
  var camera = firstPhoto.camera.name;
  var roverId = firstPhoto.camera.rover_id;  
  var fullName = firstPhoto.camera.full_name;
  
  // step 2. populate form fields with property values
  document.getElementById("id").value = id;
  document.getElementById("camera").value = camera;
  document.getElementById("rover").value = roverId;
  document.getElementById("full-name").value = fullName;
  
} 
  
  
