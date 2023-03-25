window.onload=function(){
let btn=document.getElementById("btn");
  let search=document.getElementById("bar");
  var countries = JSON.parse(data);
 
  btn.onclick=function(){
    let content=search.value;
        function existing(con){
    switch(content){
        case(countries[0].name):
        return("France");
        con=true;
        break;
        case(countries[1].name):
        return("Germany");
        con=true;
        break;
      default:
        return("Nothing");
    }
    }
    let condition = false;
   let exist= existing(condition);
      if(condition=true){
      continue;
    }else{
      document.write("Nothing!");
    }
  
  }
  
}