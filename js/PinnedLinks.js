// Fix pinned links for navbar
let navbarHeight = document.getElementById('navbar').clientHeight;
let Sections = document.querySelectorAll('.Section');
Sections.forEach((Section,key)=>{
    Section.style.paddingTop =(navbarHeight + navbarHeight/2)+'px';
})
