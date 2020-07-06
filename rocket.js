const cloudsBgc = document.getElementById('clouds');
const controls = document.querySelector('.control');
let flyRocket = document.querySelector('.fly');
let myHTML = document.querySelector('.myHTML');


let up = false,
    right = false,
    down = false,
    left = false,
    x = window.innerWidth/2-130/2,
    y = window.innerHeight/2-130/2
document.addEventListener('keydown',press)
function press(e){
  if(e.keyCode == 38)
  if (e.keyCode == 38 /* up */ || e.keyCode == 87 /* w */ || e.keyCode == 90 /* z */){
    up = true
  }
  if (e.keyCode == 39 /* right */ || e.keyCode == 68 /* d */){
    right = true
  }
  if (e.keyCode == 40 /* down */ || e.keyCode == 83 /* s */){
    down = true
  }
  if (e.keyCode == 37 /* left */ || e.keyCode == 65 /* a */ || e.keyCode == 81 /* q */){
    left = true
  }
}
document.addEventListener('keyup',release)
function release(e){
  if (e.keyCode == 38 /* up */ || e.keyCode == 87 /* w */ || e.keyCode == 90 /* z */){
    up = false
  }
  if (e.keyCode == 39 /* right */ || e.keyCode == 68 /* d */){
    right = false
  }
  if (e.keyCode == 40 /* down */ || e.keyCode == 83 /* s */){
    down = false
  }
  if (e.keyCode == 37 /* left */ || e.keyCode == 65 /* a */ || e.keyCode == 81 /* q */){
    left = false
  }
}
function gameLoop(){
 // const div = document.querySelector('.fly')
  if (up){
    y = y - 10
  }
  if (right){
    x = x + 10
  }
  if (down){
    y = y + 10
  }
  if (left){
    x = x - 10
  }
  flyRocket.style.left = x + 'px'
  flyRocket.style.top = y + 'px'
  window.requestAnimationFrame(gameLoop)
  
}
window.requestAnimationFrame(gameLoop)

window.addEventListener('keypress', function(e){
  if(e.keyCode == 32){
  about.style.display = 'none';
  bgcBg.style.display = 'none';
  flyRocket.style.display = 'block';
  cloudsBgc.style.display = 'block';
  controls.style.display = 'block'
  document.body.style.backgroundColor = "#0074D9";
  document.querySelector('.myHTML').style.display = 'block'
  document.querySelector('.myJS').style.display = 'block'

  let kwadrat1 = document.querySelector(".myHTML"), 
            wspolrzedneKwadrat1 = kwadrat1.getBoundingClientRect(),
            wspolrzedneKwadrat2 =  flyRocket.getBoundingClientRect();

      flyRocket.addEventListener('transitionend', function()
      {
          wspolrzedneKwadrat1 = kwadrat1.getBoundingClientRect(),
          wspolrzedneKwadrat2 = flyRocket.getBoundingClientRect();
          
          let rect1 = {x: wspolrzedneKwadrat1.left, y: wspolrzedneKwadrat1.top, width: wspolrzedneKwadrat1.width, height: wspolrzedneKwadrat1.height};

          let rect2 = {x: wspolrzedneKwadrat2.left, y: wspolrzedneKwadrat2.top, width: wspolrzedneKwadrat2.width, height: wspolrzedneKwadrat2.height};
          if (rect1.x < rect2.x + rect2.width &&
              rect1.x + rect1.width > rect2.x &&
              rect1.y < rect2.y + rect2.height &&
              rect1.height + rect1.y > rect2.y) {
              document.querySelector('.MyHtmlSkill').style.display = 'block';
              const exit = document.querySelector(".exit");
              exit.addEventListener('click',function()
          {
            HtmlPage.style.display = 'none';
            document.querySelector('.myHTML').style.display = 'none';
          })




          }
        
      }, false);

      //JS SKILL

      let kwadrat2 = document.querySelector(".myJS"), 
            wspolrzedneKwadratJS = kwadrat2.getBoundingClientRect(),
            wspolrzedneKwadratROcket = flyRocket.getBoundingClientRect();

      flyRocket.addEventListener('transitionend', function()
      {
        wspolrzedneKwadratJS = kwadrat2.getBoundingClientRect(),
        wspolrzedneKwadratROcket = flyRocket.getBoundingClientRect();
          
          let rect1 = {x: wspolrzedneKwadratJS.left, y: wspolrzedneKwadratJS.top, width: wspolrzedneKwadratJS.width, height: wspolrzedneKwadratJS.height};

          let rect2 = {x: wspolrzedneKwadratROcket.left, y: wspolrzedneKwadratROcket.top, width: wspolrzedneKwadratROcket.width, height: wspolrzedneKwadratROcket.height};
          if (rect1.x < rect2.x + rect2.width &&
              rect1.x + rect1.width > rect2.x &&
              rect1.y < rect2.y + rect2.height &&
              rect1.height + rect1.y > rect2.y) {
              document.querySelector('.MyJSSkill').style.display = 'block';
              document.querySelector('.boxy').classList.remove("box_1");
              document.querySelector('.boxy').classList.add("box_2");
              document.querySelector('.overlay-text').textContent = "Speech Recognition";
              const exitjs = document.querySelector(".exit");  
              exitjs.addEventListener('click',function()
{
  document.querySelector('.MyJSSkill').style.display = 'none';
   document.querySelector('.myJS').style.display = 'none';
})


          }
        
      }, false);

    }

})




 
    

