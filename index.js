const htmldetails = document.querySelector("#details");
const form = document.querySelector("#form");


form.addEventListener("submit", event => {

    event.preventDefault();

    let formdata = new FormData(event.target);

    let username = formdata.get("firstName");
    let useremailAddress = formdata.get("emailAddress");

    htmldetails.innerHTML = `
    <h1>Congratulations,</h1>
   <h3>${username}</h3>
   <p>
      You are on your way to becoming one of the best BBQ masters in town!
   </p>

   <span>We'll never share your information without your permission: ${useremailAddress}</span>


   `


})