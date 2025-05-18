
function press(value){
document.getElementById("inputBox").value+=value;
}
function calculate(){
let result= eval(document.getElementById("inputBox").value);
document.getElementById("inputBox").value=result;
}
function clearDisplay() {
    document.getElementById("inputBox").value ="";
}
function deleteLast() {
  let display = document.getElementById("inputBox");
  display.value = display.value.slice(0, -1);
}