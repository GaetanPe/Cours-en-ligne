var mesBoutons = document.querySelectorAll('#bouton1, #bouton2, #bouton3, #bouton4, #bouton5')
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
