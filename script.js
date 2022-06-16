let userName = prompt("Username:","");
if (userName==="tom") {
  
  let pass = prompt("Password:","");
  if (pass === "cruise") {
    alert("hey, tc. how's it goin?");
  }
  else {
    alert ("Wrong Password, GIT! G'ON NOW!");
  }
}  else if (userName === "" || userName === null) {
  alert( "What, you forget your own name?")
}
else {
    alert ("Stranger Danger");
}
