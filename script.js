let userName = prompt("Username:","");
if (userName==="jack") {
  
  let pass = prompt("Password:","");
  if (pass === "offahorse") {
    alert("WELCOME JACK!");
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
