//1
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

let first = true;

function clickme(){
    const textElement = document.getElementById("wel");
    const textElement2 = document.getElementById("btn");
    const textElement3 = document.getElementById("p1");
    if(first){
        textElement.textContent = "Goodboy!";
        textElement2.textContent = "Click me again!";
        textElement3.textContent = "You are such a GOODBOY!";
    } else{
        textElement.textContent = "Welcome!";
        textElement2.textContent = "Click me!";
        textElement3.textContent = "this website is for my project";
    }
    first = !first;
}

