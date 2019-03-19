function validate() {
  let fullName = document.getElementById("fname");
  let address = document.getElementById("adr");
  let email = document.getElementById("email");
  let city = document.getElementById("city");
  let state = document.getElementById("state");
  let zip = document.getElementById("zip");

  if (fullName.value.trim() == "") {
    alert("Name must be filled out");
    fname.style.border = "solid 1px red"
    return false;
  } else if (address.value.trim() == "") {
    alert("address must be filled out")
    adr.style.border = "solid 1px red"
    return false;
  } else if (email.value.trim() == "") {
    alert("email must be filled out")
    adr.style.border = "solid 1px red"
    return false;
  } else if (city.value.trim() == "") {
    alert("city must be filled out")
    adr.style.border = "solid 1px red"
    return false;
  } else if (state.value.trim() == "") {
    alert("state must be filled out")
    adr.style.border = "solid 1px red"
    return false;
  } else if (zip.value.trim() == "") {
    alert("zip must be filled out")
    adr.style.border = "solid 1px red"
    return false;
  } else {
    return true;
  }
  console.log(fullName.value);
}
