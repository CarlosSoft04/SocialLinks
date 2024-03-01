const canvas = document.getElementById('rainfall');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const raindrops =[];

function createRaindrop(){
  const x = Math.random() * canvas.width;
  const y = -5;
  const speed = Math.random() * (5 - 2) + 2;
const length = Math.random() * (20 - 10) + 10;

  raindrops.push({x,y,speed,length});
}

function updateRaindrops(){
  for(let i =0 ; i<raindrops.length; i++){
    const raindrop = raindrops[i];

    raindrop.y += raindrop.speed;

    if(raindrop.y > canvas.height){
      raindrops.splice(i,1);
      i--;

    }
  }

}

function drawRaindrops(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.strokeStyle = 'gray';
  ctx.lineWidth =2;

  for(let i =0;i<raindrops.length;i++){
    const raindrop = raindrops[i];

    ctx.beginPath();
    ctx.moveTo(raindrop.x,raindrop.y);
    ctx.lineTo(raindrop.x,raindrop.y + raindrop.length);
    ctx.stroke();

  }

}

function animate(){
  createRaindrop();
  updateRaindrops();
  drawRaindrops();

  requestAnimationFrame(animate);
}
animate();





