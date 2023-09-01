var money = 0;
var debt = 0;
var earning = 0;
var time = 0;
var times = 0;
let earn = 0;
var timer = 0;
var tim = 0;
var stop = setTimeout( function () {
    document.getElementById("container").style.display = "block";
    document.getElementById("loading").style.display = "none";
},3000)
var random = Math.floor(Math.random() * 5);
console.log(random);
var moneys = document.getElementById("money");
function write(){
    document.getElementById("home").innerHTML = "<p>You Bought A  Home</p>" + time + " times<button id=\"sellone\">sale</button>";
}

function hi() {
    document.getElementById("rule").innerHTML = "<button onclick=\"lottery()\" id=\"lottery\">Lottery</button><button onclick=\"loan()\"id=\"loan\">Loan</button><button onclick=\"buy()\" id=\"buy\">Buy property</button>"
    document.getElementById("btn").style.display = "none";
}
function buy() {
    document.getElementById("buy").onclick = function() {
                document.getElementById("lottery").innerHTML = "Buy a House(1000,000)";
    document.getElementById("loan").innerHTML = "Buy a Share(500,000)";
    document.getElementById("buy").innerHTML = "back";
    document.getElementById("buy").onclick = function() {
      hi();
    };
    document.getElementById("lottery").onclick = function() {
    
        if (money <= 1000000) {
            alert("nomoney")
           
      } 
      else {
      money -= 1000000;
          time++; document.getElementById("money").innerHTML = money;
            document.getElementById("home").innerHTML = "<p>You Bought A  Home</p>" + time + " times<button id=\"sellone\">sale</button>";
            
        } 
        
      document.getElementById("sellone").onclick = function()
           {
           
           money += 1000000;
timer++;
      if (timer > time) {
 timer--;
     alert("not working");
    
 }
 document.getElementById("money").innerHTML = money;    document.getElementById("homesell").innerHTML = "<p>You Sold A  Home</p>" + timer + " times";

      }
    
    }
    document.getElementById("loan").onclick = function() {
        if (money >= 500000) {
            money -= 500000;
            
           times++;
          document.getElementById("money").innerHTML = money;
            document.getElementById("share").innerHTML = "<p>You Bought A  Share(.1%+)</p>" + times + " times<button id=\"selltwo\">sale</button>";
            
            var earning = setInterval(function (){
               document.getElementById("earning").innerHTML = earn+= 500;
               document.getElementById("money").innerHTML = money+= 500;
            },10000);
        }
       else {
            alert("no money bro");
        } document.getElementById("selltwo").onclick = function() {
        earning += 100;
                tim++;
                if (tim > times) {
                tim--;
                    alert("you must sell what you bought");
                }
                document.getElementById("sharesell").innerHTML = "<p>You Sold A  Share</p>" + tim + " times";
                
            }
            
        
    }
}
}

function lottery() {
function buy() {
    hi();   
    }
    if (money == 0) {
        alert("you have no money so tap loan to lend money");
        
    }
    else {
        document.getElementById("lottery").innerHTML = "100 birr (1,000,000 birr)";
        document.getElementById("loan").innerHTML = "1000 birr (10,000,000 birr)";
        document.getElementById("buy").innerHTML = "Back";
     document.getElementById("lottery").onclick = function() {
            if (random >= 0 && random < 2) {
                money -= 100;                
                alert("you didn't win");
                document.getElementById("money").innerHTML = money;
                debt == money;
                document.getElementById("debt").innerHTML = debt;
         document.getElementById("buy").onclick = function () {
                document.getElementById("rule").innerHTML = "<button onclick=\"lottery()\" id=\"lottery\">Lottery</button><button onclick=\"loan()\"id=\"loan\">Loan</button><button onclick=\"buy()\" id=\"buy\">Buy property</button>"   
               }       
            }
             if (random >= 2 && random <= 4){
                money += 1000000 - 100 - debt;            
                debt = 0;  
                document.getElementById("debt").innerHTML = debt;
                alert("you win congratulations");
                document.getElementById("money").innerHTML = money;
                document.getElementById("buy").onclick = function () {
                document.getElementById("rule").innerHTML = "<button onclick=\"lottery()\" id=\"lottery\">Lottery</button><button onclick=\"loan()\"id=\"loan\">Loan</button><button onclick=\"buy()\" id=\"buy\">Buy property</button>"   
               }
            }
           else {
               alert("hi");
           }

        }
        document.getElementById("loan").onclick = function() {
            if (random >= 0 && random < 2) {
                money -= 1000;                
                alert("you didn't win");
                document.getElementById("money").innerHTML = money;
                document.getElementById("buy").onclick = function () {
                document.getElementById("rule").innerHTML = "<button onclick=\"lottery()\" id=\"lottery\">Lottery</button><button onclick=\"loan()\"id=\"loan\">Loan</button><button onclick=\"buy()\" id=\"buy\">Buy property</button>"   
               }
            }
             if (random >= 2 && random <= 4){
                money += 10000000 - 100 - debt;                
                alert("you win congratulations");
                debt = 0;  
                document.getElementById("debt").innerHTML = debt;
                document.getElementById("money").innerHTML = money;
               document.getElementById("buy").onclick = function () {
                document.getElementById("rule").innerHTML = "<button onclick=\"lottery()\" id=\"lottery\">Lottery</button><button onclick=\"loan()\"id=\"loan\">Loan</button><button onclick=\"buy()\" id=\"buy\">Buy property</button>"   
               }
            }
        }
    }
}
function loan() {
  document.getElementById("loan").innerHTML = "1000birr";
    document.getElementById("buy").innerHTML = "500birr";
   function buy() {
    hi();   
    } document.getElementById("lottery").innerHTML = "Back";
    document.getElementById("lottery").onclick = function() {
       if (money == 0) {
           alert("no money");
       }
       else {
           
            document.getElementById("rule").innerHTML = "<button onclick=\"lottery()\" id=\"lottery\">Lottery</button><button onclick=\"loan()\"id=\"loan\">Loan</button><button onclick=\"buy()\" id=\"buy\">Buy property</button>"
             
                
             
           
           
           
       }
    }
    document.getElementById("loan").onclick = function() {
       money += 1000; document.getElementById("money").innerHTML = money;
       debt += 1000;
        document.getElementById("debt").innerHTML = debt;
    }
    document.getElementById("buy").onclick = function() {
        document.getElementById("money").innerHTML = money + 500;
       debt += 1000;
        document.getElementById("debt").innerHTML = debt; 
    }
}
