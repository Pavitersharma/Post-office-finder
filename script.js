async function Getpincode() {
  const inputfield = document.getElementById("inputtext");
  const pincode = inputfield.value;

  const result = document.getElementById("result");

  const response = await fetch(
    `https://api.postalpincode.in/pincode/${pincode}`,
  );

  const data = await response.json();

  console.log(data);


  const postOffices = data[0].PostOffice;

result.innerHTML = "";

 postOffices.forEach((office) => {
    result.innerHTML += `
      <div class="border p-4 rounded-lg mb-4 bg-white ">
        <h2 class="text-xl font-bold">${office.Name}</h2>

        <p><strong>Branch Type:</strong> ${office.BranchType}</p>

        <p><strong>District:</strong> ${office.District}</p>

        <p><strong>State:</strong> ${office.State}</p>

        <p><strong>Delivery Status:</strong> ${office.DeliveryStatus}</p>
      </div>
    `;
  });


}








