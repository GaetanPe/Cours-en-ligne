var mesBoutons = document.querySelectorAll('#adduiux, #addphp, #addreactjs, #b#addnodejs, ##addmysql')
var textnotif = document.querySelector('#notification')
for(let i = 0; i < mesBoutons.length; i++){

    mesBoutons[i].addEventListener("click",function(){
        textnotif.innerHTML = 'à été ajouté au panier'
        document.getElementById('notification').style.visibility = 'visible'
        setInterval(function(){
            document.getElementById('notification').style.visibility = 'hidden'
        }, 3000)
    })
    
}
