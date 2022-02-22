function myFunction() 
{
  var filter, cards , title;

  filter= document.getElementById("myFilter").value.toUpperCase();

  cards=document.getElementById("myCards").getElementsByClassName("card");

  for(var i=0 ; i<cards.length ; i++)
  {
      title = cards[i].querySelector(".card-title");
      
      if(title.innerText.toUpperCase().indexOf(filter)> -1)
      {
        cards[i].style.display = "";
      }
      else
      {
        cards[i].style.display = "none";
      }
  }
  
}