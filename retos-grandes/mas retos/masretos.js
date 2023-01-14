document.querySelector('.promo-sillas-five').addEventListener("click", function(event) {
    console.log(event);
    if(event.target.localName=="img"){
   
        document.querySelector('.promo-sila img').src = event.srcElement.src;
    }
})