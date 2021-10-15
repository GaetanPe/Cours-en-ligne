document.getElementById('adduiux').addEventListener('click',function(){
    localStorage.setItem("nameUIUX","UI/UX")
    localStorage.setItem("prixUIUX","9.99")
    location.reload();
})
document.getElementById('addphp').addEventListener('click',function(){
    localStorage.setItem("namePHP","PHP")
    localStorage.setItem("prixPHP","9.99")
    location.reload();
})
document.getElementById('addreactjs').addEventListener('click',function(){
    localStorage.setItem("nameReact","REACT")
    localStorage.setItem("prixReact","9.99")
    location.reload();
})
document.getElementById('addnodejs').addEventListener('click',function(){
    localStorage.setItem("nameNode","NODE")
    localStorage.setItem("prixNode","9.99")
    location.reload();
})
document.getElementById('addmysql').addEventListener('click',function(){
    localStorage.setItem("nameMySql","MySQL")
    localStorage.setItem("prixMySql","9.99")
    location.reload();
})

let nameUIUX = localStorage.getItem("nameUIUX")
let prixUIUX =localStorage.getItem("prixUIUX")
let QPUIUX = localStorage.getItem("QPUIUX")
document.getElementsByClassName("row-space-between")[0].children[0].innerHTML = nameUIUX;
let A = document.getElementsByClassName("row-space-between")[0].children[1].innerHTML = prixUIUX;
document.getElementsByClassName("row-space-between")[0].children[2].innerHTML = "Q : "+QPUIUX;
if(A == "9.99"){
    document.getElementsByClassName("row-space-between")[0].children[2].style.display = "block"
    document.getElementsByClassName("row-space-between")[0].children[3].children[0].style.display = "block"
}
document.getElementsByClassName("row-space-between")[0].children[3].children[0].addEventListener('click',function(){
    localStorage.removeItem("nameUIUX")
    localStorage.removeItem("prixUIUX")
    localStorage.setItem("iuiux", uiux.nbDispo);
    localStorage.setItem("QPUIUX",0)
    location.reload();
    textnotif.innerHTML = 'Le cours UI/UX à été supprimer du panier'
    document.getElementById('notification').style.visibility = 'visible'
    setTimeout(function(){
        document.getElementById('notification').style.visibility = 'hidden'
    }, 3000)
})


let namePHP = localStorage.getItem("namePHP")
let prixPHP =localStorage.getItem("prixPHP")
let QPPHP = localStorage.getItem("QPPHP")
document.getElementsByClassName("row-space-between")[1].children[0].innerHTML = namePHP;
let B = document.getElementsByClassName("row-space-between")[1].children[1].innerHTML = prixPHP;
document.getElementsByClassName("row-space-between")[1].children[2].innerHTML = "Q : "+ QPPHP;
if(B == "9.99"){
    document.getElementsByClassName("row-space-between")[1].children[2].style.display = "block"
    document.getElementsByClassName("row-space-between")[1].children[3].children[0].style.display = "block"
}
document.getElementsByClassName("row-space-between")[1].children[3].children[0].addEventListener('click',function(){
    localStorage.removeItem("namePHP")
    localStorage.removeItem("prixPHP")
    localStorage.setItem("iphp", php.nbDispo);
    localStorage.setItem("QPPHP",0)
    location.reload();
    textnotif.innerHTML = 'Le cours PHP à été supprimer du panier'
    document.getElementById('notification').style.visibility = 'visible'
    setTimeout(function(){
        document.getElementById('notification').style.visibility = 'hidden'
    }, 3000)
})

let nameReact = localStorage.getItem("nameReact")
let prixReact =localStorage.getItem("prixReact")
let QPREACT = localStorage.getItem("QPREACT")
console.log(QPREACT)
document.getElementsByClassName("row-space-between")[2].children[0].innerHTML = nameReact;
let C = document.getElementsByClassName("row-space-between")[2].children[1].innerHTML = prixReact;
document.getElementsByClassName("row-space-between")[2].children[2].innerHTML = "Q : "+ QPREACT;
if(C == "9.99"){
    document.getElementsByClassName("row-space-between")[2].children[2].style.display = "block"
    document.getElementsByClassName("row-space-between")[2].children[3].children[0].style.display = "block"
}
document.getElementsByClassName("row-space-between")[2].children[3].children[0].addEventListener('click',function(){
    localStorage.removeItem("nameReact")
    localStorage.removeItem("prixReact")
    localStorage.setItem("ireactjs", reactjs.nbDispo);
    localStorage.setItem("QPREACT",0)
    location.reload();
    textnotif.innerHTML = 'Le cours React JS à été supprimer du panier'
    document.getElementById('notification').style.visibility = 'visible'
    setTimeout(function(){
        document.getElementById('notification').style.visibility = 'hidden'
    }, 3000)
})


let nameNode = localStorage.getItem("nameNode")
let prixNode =localStorage.getItem("prixNode")
let QPNODE = localStorage.getItem("QPNODE")
document.getElementsByClassName("row-space-between")[3].children[0].innerHTML = nameNode;
let D = document.getElementsByClassName("row-space-between")[3].children[1].innerHTML = prixNode;
document.getElementsByClassName("row-space-between")[3].children[2].innerHTML = "Q : "+ QPNODE;
if(D == "9.99"){
    document.getElementsByClassName("row-space-between")[3].children[2].style.display = "block"
    document.getElementsByClassName("row-space-between")[3].children[3].children[0].style.display = "block"
}
document.getElementsByClassName("row-space-between")[3].children[3].children[0].addEventListener('click',function(){
    localStorage.removeItem("nameNode")
    localStorage.removeItem("prixNode")
    localStorage.setItem("inode", node.nbDispo);
    localStorage.setItem("QPNODE",0)
    location.reload();
    textnotif.innerHTML = 'Le cours Node js à été supprimer du panier'
    document.getElementById('notification').style.visibility = 'visible'
    setTimeout(function(){
        document.getElementById('notification').style.visibility = 'hidden'
    }, 3000)
})

let nameMySql = localStorage.getItem("nameMySql")
let prixMySql =localStorage.getItem("prixMySql")
let QPMYSQL = localStorage.getItem("QPMYSQL")
document.getElementsByClassName("row-space-between")[4].children[0].innerHTML = nameMySql;
let E = document.getElementsByClassName("row-space-between")[4].children[1].innerHTML = prixMySql;
document.getElementsByClassName("row-space-between")[4].children[2].innerHTML = "Q : "+ QPMYSQL;
if(E == "9.99"){
    document.getElementsByClassName("row-space-between")[4].children[2].style.display = "block"
    document.getElementsByClassName("row-space-between")[4].children[3].children[0].style.display = "block"
}
document.getElementsByClassName("row-space-between")[4].children[3].children[0].addEventListener('click',function(){
    localStorage.removeItem("nameMySql")
    localStorage.removeItem("prixMySql")
    localStorage.setItem("imysql", mysql.nbDispo);
    localStorage.setItem("QPMYSQL",0)
    location.reload();
    textnotif.innerHTML = 'Le cours MySQL à été supprimer du panier'
    document.getElementById('notification').style.visibility = 'visible'
    setTimeout(function(){
        document.getElementById('notification').style.visibility = 'hidden'
    }, 3000)
})




/* CLEAR LE LOCAL */
document.getElementById('SUPPRIMER').addEventListener('click', function(){
    localStorage.clear();
    location.reload();
    textnotif.innerHTML = 'Le contenue du panier à été supprimer'
    document.getElementById('notification').style.visibility = 'visible'
    setTimeout(function(){
        document.getElementById('notification').style.visibility = 'hidden'
    }, 3000)
})


/* Apparaitre / disparaitre le panier */
document.getElementById('panier').addEventListener('mouseout', function(){
    document.getElementById('article-panier').style.display='none'
})
document.getElementById('panier').addEventListener('mouseover', function(){
    document.getElementById('article-panier').style.display='block';
    document.getElementById('article-panier').style.position='absolute';
})





/* MON truc CHELOU ATTENTION C COMPLIQUEEEE*/ 
    var UIUX = ` 
        {
            "img":"asset/images/UIUX.png",
            "name": "UI/UX",
            "etoiles":"3",
            "prixBase":200,
            "prix":9.99,
            "nbDispo":2,
            "isActive":true,
            "index":0
        }
    `;
    var uiux = JSON.parse(UIUX);




    var PHP = `
        {
            "img":"asset/images/php.png",
            "name": "PHP 8",
            "etoiles":2,
            "prixBase":200,
            "prix":9.99,
            "nbDispo":3,
            "isActive":true,
            "index":1
        }
    `;
    var php = JSON.parse(PHP);

    var REACTJS = `
        {
            "img":"asset/images/react.png",
            "name": "REACT JS",
            "etoiles":3,
            "prixBase":200,
            "prix":9.99,
            "nbDispo":"2",
            "isActive":true,
            "index":2
        }
    `;
    var reactjs = JSON.parse(REACTJS);

    var NODE = `
        {
            "img":"asset/images/node.png",
            "name": "NODE JS",
            "etoiles":5,
            "prixBase":200,
            "prix":9.99,
            "nbDispo":4,
            "isActive":true,
            "index":3
        }
    `;
    var node = JSON.parse(NODE);

    var MYSQL = `
        {
            "img":"asset/images/mysql.png",
            "name": "MySQL",
            "etoiles":5,
            "prixBase":200,
            "prix":"9.99",
            "nbDispo":5,
            "isActive":true,
            "index":4
        }
    `;
    var mysql = JSON.parse(MYSQL);

    var aLength = localStorage.length;

    var omysql = localStorage.getItem("imysql");
    var onode = localStorage.getItem("inode");
    var oreact = localStorage.getItem("ireactjs");
    var ophp = localStorage.getItem("iphp");
    var ouiux = localStorage.getItem("iuiux");

    if(omysql == 0 && onode == 0 && oreact== 0 && ophp == 0 && ouiux == 0 ){
        PopulateStorage();
    }
    if(aLength == 0){
        PopulateStorage();
    }



function PopulateStorage(){
    localStorage.setItem("imysql", mysql.nbDispo);
    localStorage.setItem("QPMYSQL",0)
    localStorage.setItem("inode", node.nbDispo);
    localStorage.setItem("QPNODE",0)
    localStorage.setItem("ireactjs", reactjs.nbDispo);
    localStorage.setItem("QPREACT",0)
    localStorage.setItem("iphp", php.nbDispo);
    localStorage.setItem("QPPHP",0)
    localStorage.setItem("iuiux", uiux.nbDispo);
    localStorage.setItem("QPUIUX",0)
}

    
        for(i=0;i<5;i++){
            if(i==0){
                var ele = localStorage.getItem("iuiux");
                var carte = "uiux";
                var element = uiux;
            }
            else if(i==1){
                var ele = localStorage.getItem("iphp");
                var carte = "php";
                var element = php;
            }
            else if(i==2){
                var ele = localStorage.getItem("ireactjs");
                var carte = "react";
                var element = reactjs;
            }
            else if(i==3){
                var ele = localStorage.getItem("inode");
                var carte = "node";
                var element = node;
            }
            else if(i==4){
                var ele = localStorage.getItem("imysql");
                var carte = "my-sql";
                var element = mysql;
            }

        if(document.getElementById(carte).id){
            let index = element.index
            let qui = element
            
            this.document.getElementsByClassName("img")[index].setAttribute("src",qui.img)
            this.document.getElementsByClassName("nomcours")[index].innerHTML=qui.name
            this.document.getElementsByClassName("nb_etoiles")[index].innerHTML="étoiles : "+qui.etoiles
            this.document.getElementsByClassName("prixbase")[index].innerHTML=qui.prixBase+" €"
            this.document.getElementsByClassName("prixreduction")[index].innerHTML=qui.prix+" €"
            this.document.getElementsByClassName("disponibilite")[index].innerHTML="Disponibilité : "+ele
            
        }
    }
    
    /* ATTENTION C LA FIN DU TRUC COMPLIQUEEEEEEEE*/    
    
    
  
    var boutonUiux = document.getElementById('adduiux');

    var boutonPhp = document.getElementById('addphp');
    
    var boutonReactjs = document.getElementById('addreactjs');
    
    var boutonNodejs = document.getElementById('addnodejs');
    
    var boutonMysql = document.getElementById('addmysql');
    
    var textnotif = document.querySelector('#notification')

    boutonUiux.addEventListener('click',function(){
        var uuiux = localStorage.getItem("iuiux");
        let quantité_aug = parseInt(localStorage.getItem("QPUIUX"))
        if (uuiux > 0){
            quantité_aug = quantité_aug + 1;
            localStorage.setItem("QPUIUX", quantité_aug)
            uuiux = uuiux - 1;
            localStorage.setItem("iuiux", uuiux)
            textnotif.innerHTML = 'Le cours UI/UX à été ajouté au panier'
            document.getElementById('notification').style.visibility = 'visible'
            setTimeout(function(){
                document.getElementById('notification').style.visibility = 'hidden'
            }, 3000)
            rafraichir()
        }
        else{
            textnotif.innerHTML = 'Plus de cours'
            document.getElementById('notification').style.visibility = 'visible'
            setTimeout(function(){
                document.getElementById('notification').style.visibility = 'hidden'
            }, 3000)
        }
    })
    
    boutonPhp.addEventListener('click',function(){
        var uphp = localStorage.getItem("iphp");
        let quantité_aug = parseInt(localStorage.getItem("QPPHP"))
        if (uphp > 0){
            quantité_aug = quantité_aug + 1;
            localStorage.setItem("QPPHP", quantité_aug)
            uphp = uphp - 1;
            localStorage.setItem("iphp", uphp)
            textnotif.innerHTML = 'Le cours PHP à été ajouté au panier'
            document.getElementById('notification').style.visibility = 'visible'
            setTimeout(function(){
                document.getElementById('notification').style.visibility = 'hidden'
            }, 3000)
            rafraichir()
        }
        else{
            textnotif.innerHTML = 'Plus de cours'
            document.getElementById('notification').style.visibility = 'visible'
            setTimeout(function(){
                document.getElementById('notification').style.visibility = 'hidden'
            }, 3000)
        }
    })
    boutonReactjs.addEventListener('click',function(){
        var ureact = localStorage.getItem("ireactjs");
        let quantité_aug = parseInt(localStorage.getItem("QPREACT"))
        if (ureact > 0){
            quantité_aug = quantité_aug + 1;
            localStorage.setItem("QPREACT", quantité_aug)
            ureact = ureact - 1;
            localStorage.setItem("ireactjs", ureact)
            textnotif.innerHTML = 'Le cours React JS à été ajouté au panier'
            document.getElementById('notification').style.visibility = 'visible'
            setTimeout(function(){
                document.getElementById('notification').style.visibility = 'hidden'
            }, 3000)
            rafraichir()
        }
        else{
            textnotif.innerHTML = 'Plus de cours'
            document.getElementById('notification').style.visibility = 'visible'
            setTimeout(function(){
                document.getElementById('notification').style.visibility = 'hidden'
            }, 3000)
        }
    })
    
    boutonNodejs.addEventListener('click',function(){
        var unode = localStorage.getItem("inode");
        let quantité_aug = parseInt(localStorage.getItem("QPNODE"))
        if (unode > 0){
            quantité_aug = quantité_aug + 1;
            localStorage.setItem("QPNODE", quantité_aug)
            unode = unode - 1;
            localStorage.setItem("inode", unode)
            textnotif.innerHTML = 'Le cours Node JS à été ajouté au panier'
            document.getElementById('notification').style.visibility = 'visible'
            setTimeout(function(){
                document.getElementById('notification').style.visibility = 'hidden'
            }, 3000)
            rafraichir()
        }
        else{
            textnotif.innerHTML = 'Plus de cours'
            document.getElementById('notification').style.visibility = 'visible'
            setTimeout(function(){
                document.getElementById('notification').style.visibility = 'hidden'
            }, 3000)
        }
    })
    
    boutonMysql.addEventListener('click',function(){
        var umysql = localStorage.getItem("imysql");
        let quantité_aug = parseInt(localStorage.getItem("QPMYSQL"))
        if (umysql > 0){
            quantité_aug = quantité_aug + 1;
            localStorage.setItem("QPMYSQL", quantité_aug)
            umysql = umysql - 1;
            localStorage.setItem("imysql", umysql);
            textnotif.innerHTML = 'Le cours MySQL à été ajouté au panier'
            document.getElementById('notification').style.visibility = 'visible'
            setTimeout(function(){
                document.getElementById('notification').style.visibility = 'hidden'
            }, 3000)
            rafraichir()
        }
        else{
            textnotif.innerHTML = 'Plus de cours'
            document.getElementById('notification').style.visibility = 'visible'
            setTimeout(function(){
                document.getElementById('notification').style.visibility = 'hidden'
            }, 3000)
        }
    })
