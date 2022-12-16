const readMoreButton = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreButton.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
    if(readMoreButton.innerText === 'Read More'){
        readMoreButton.innerText = 'Read Less';
    }else{
        readMoreButton.innerText = 'Read More';
    }
})