import { useEffect } from "react";

export default function App() {
  function showFullName() {
    const firstName = document.getElementsByName("firstName")[0].value;
    const lastName = document.getElementsByName("lastName")[0].value;
    //alert(firstName + " " + lastName);
    if (firstName === "" || lastName === "") {
      if(document.getElementById("fullName")!=null)
      document.getElementById("fullName").remove();
      return;
    }
    var divEle = document.createElement("div");
    divEle.id = "fullName";
   // document.getElementById("fullName").style.display = "block";
    //document.getElementById("fullName").innerHTML =
    divEle.innerHTML=
      "Full Name: " + firstName + " " + lastName;
      document.getElementById("formId").after(divEle);
  }
  function submit(event) {
    event.preventDefault();
    return false;
  }
  useEffect(() => {
    document.getElementById("formId").addEventListener("submit", submit);
  });
  return (
    <div>
      <h1>Full Name Display</h1>
      <form id="formId">
        <label for="firstName">First Name :</label>
        <input type="text" name="firstName" required />
        <br />
        <label for="lastName">Last Name :</label>
        <input type="text" name="lastName" required />
        <br />
        <button type="submit" onClick={showFullName}>
          Submit
        </button>
        <br />
        <br />
       
      </form>
      <div id="fullName" style={{ display: "none" }}>
          Full Name:
        </div>
    </div>
  );
}

