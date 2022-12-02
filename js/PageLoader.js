function addPageLoader(){
    let div = document.createElement('div');
    div.classList.add('pageloader-container');

    let span = document.createElement('span');
    span.classList.add('loader');

    div.appendChild(span);
    document.body.appendChild(div);

    // Desactivo el scroll visual
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
}

function removePageLoader(){
    let pageLoader = document.querySelector('.pageloader-container');
    pageLoader.classList.add('hidde-pageloader');
    setTimeout(()=>{
        document.body.removeChild(pageLoader)
    },1000)
    // Activo el scroll visual
    document.getElementsByTagName('body')[0].style.overflowY = 'auto';

}

addPageLoader();
window.addEventListener('load',removePageLoader)

