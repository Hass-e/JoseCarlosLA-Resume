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

//CODE FOR THE POP UP MENU
const header = document.getElementById('header');
var sideMenu = document.getElementById('sideMenu');
const floatingMenuBtn = document.getElementById('floatingMenuBtn');
const closeMenuBtn = document.getElementById('closeBtn');

window.addEventListener('scroll', () => {
  const headerBottom = header.getBoundingClientRect().bottom;
  if (headerBottom < 1) {
        if(isMenuOpen()) {
            floatingMenuBtn.style.display = 'none';
        } else {
            floatingMenuBtn.style.display = 'block';
            closeMenuBtn.style.display = "block";
        }
    } else {
        floatingMenuBtn.style.display = 'none';
        sideMenu.classList.remove("menu-open");
        closeMenuBtn.style.display = "none";
  }
});

floatingMenuBtn.addEventListener('click', () => {
    openMenu();
})

function isMenuOpen() {
    return sideMenu.classList.contains("menu-open");
};

// CODE TO VISUALIZE RIGHT MENU
function openMenu(){
    floatingMenuBtn.style.display = "none";
    sideMenu.classList.add("menu-open");
}

function closeMenu(){
    floatingMenuBtn.style.display = "block";
    sideMenu.classList.remove("menu-open");
}

// CODE TO SUMIT TO GOOGLE SHEETS
const scriptURL = 'https://script.google.com/macros/s/AKfycbwYcZ78o_xfEsYJPtierzWxJivSakTf3Vx9rIK3DwLhagkRKEP0zc8iwYqk815NpgGjnA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)}).then(response => {
        msg.innerHTML = "Message sent successfully!";
        setTimeout(function(){
            msg.innerHTML = "";
        },3000);
        form.reset();
    }).catch(error => console.error('Error!', error.message));
})