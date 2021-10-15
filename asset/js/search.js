function search_cours() {
    var input = document.getElementById('recherche-site').value
    console.log(input);
    var vide = document.getElementById('coursvide');
    searchinput=input.toLowerCase();
    let x = document.getElementsByClassName('cour');
    console.log(x);
    
    
      
    for (i = 0; i < 5; i++) { 
        if (x[i].innerHTML.toLowerCase().includes(searchinput)) {
            console.log(x[i].innerHTML.toLowerCase().includes(searchinput));
            
            x[i].style.display="block"; 

        }
        else  {
            console.log(x[i]);
            x[i].style.display="none";
                         
        }   
    }
    
    var pbp = x[0].style.display;
    var pbp1 = x[1].style.display;
    var pbp2 = x[2].style.display;
    var pbp3 = x[3].style.display;
    var pbp4 = x[4].style.display;
       
    
    if(pbp == "none" && pbp1 == "none" && pbp2 == "none" && pbp3 == "none" && pbp4 == "none"){
            
            vide.style.display = "block"
        
        }else{
           
            vide.style.display = "none" 
        }
    
}