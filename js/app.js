// indector
window.onscroll = () => {
  let posit = document.documentElement.scrollTop;
  let calHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scroll = (posit * 100) / calHeight;
  document.getElementById("indector").style.width = scroll + "%";
};
// navbar
NavBar();
function NavBar(){
  let lis = document.querySelectorAll('li a');
  lis.forEach((li) => {
   li.addEventListener('click', (e) =>{
     lis.forEach((li)=>{
       li.classList.remove("active")
      })
      e.currentTarget.classList.add("active")
    })
  })
}
