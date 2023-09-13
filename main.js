// CODE TO HIDE AND UNHIDE ITEMS IN ABOUT
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName){
    for (let tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for (let tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    this.event.currentTarget.classList.add("active-link");

    document.getElementById(tabName).classList.add("active-tab");
}

// CODE TO VISUALIZE RIGHT MENU IN SMALL DEVICES
var sideMenu = document.getElementById("sideMenu");

function openMenu(){
    sideMenu.style.right = "0";
}

function closeMenu(){
    sideMenu.style.right = "-200px";
}

// CODE TO SUMIT TO GOOGLE SHEETS
const scriptURL = 'https://script.google.com/macros/s/AKfycbx2yKKWn7RzKuIb3Rxapmxuj6JAelu_CLpi3HSwlkhe2B50phNmNkm-uaqcWJGra9GvAA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})