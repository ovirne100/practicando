let abrir = document.querySelector('#abrir')
let cerrar = document.querySelector('#cerrar')
let modal = document.querySelector('#modal')

abrir.addEventListener('click',()=>{
    modal.showModal();
    alert();
});

cerrar.addEventListener('click', ()=>{
modal.close();
})

