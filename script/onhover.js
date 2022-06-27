const as = document.querySelectorAll('a[id=nav]')

as.forEach(a => {

   a.addEventListener('mouseover', event => {
        a.innerHTML = a.innerHTML.replace("&nbsp;","[").replace("&nbsp;","]")
   });
   a.addEventListener('mouseout', event => {
    a.innerHTML = a.innerHTML.replace("[","&nbsp;").replace("]","&nbsp;")
});

});