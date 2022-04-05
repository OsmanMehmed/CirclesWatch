
var c = document.getElementById("canvas");
var cxt = c.getContext("2d");
var DOMSun = document.getElementById('imageSun');
var DOMEarth = document.getElementById('imageEarth');
var DOMMoon = document.getElementById('imageMoon');
let hours12 = 0;

function actualizarContexto(){
    console.log("Se actualiza contexto");
    cxt.clearRect(0, 0, canvas.width, canvas.height);
}

function actualizarHora() {
    
    let time = new Date();
    
    cxt.beginPath();

    if (time.getHours() > 12){
        hours12 = parseFloat(time.getHours()-12 + "." + ((time.getMinutes()*99)/60));
    } else {
        hours12 = parseFloat(time.getHours() + "." + ((time.getMinutes()*99)/60));
    }

/*     console.group("SUN");
    console.info(hours12); 
    console.info( Math.cos(((30 * (hours12-3)) * Math.PI) / 180));
    console.info( Math.sin(((30 * (hours12-3)) * Math.PI) / 180));
    console.groupEnd();
 */

    let xSun = 50 + 100  * Math.cos(((30 * (hours12-3)) * (Math.PI)) / (180));
    let ySun = 50 + 100  * Math.sin(((30 * (hours12-3)) * (Math.PI)) / (180));
    cxt.drawImage(DOMSun,xSun,ySun,400,400);
    cxt.closePath;
    cxt.fill();
    

    let minutes = parseFloat(time.getMinutes() + "." + ((time.getSeconds()*99/60)));

    cxt.beginPath();
    let xEarth = 100 + xSun + 60 * Math.cos(((6* (minutes-15) * Math.PI) / 180));
    let yEarth = 100 + ySun + 56 * Math.sin(((6* (minutes-15) * Math.PI) / 180));

/*     let xEarth = 100 + xSun + 60 * Math.cos(((6* (time.getSeconds()-15) * Math.PI) / 180));
    let yEarth = 100 + ySun + 56 * Math.sin(((6* (time.getSeconds()-15) * Math.PI) / 180)); */
    cxt.drawImage(DOMEarth,xEarth,yEarth,200,200);
    cxt.closePath;
    cxt.fill();

    const seconds = time.getSeconds() + time.getMilliseconds() / 1000;
    console.log(seconds);


 
    cxt.beginPath();
    let xMoon = 65 + xEarth + 60 * Math.cos(((6* (time.getSeconds()-15) * Math.PI) / 180));
    let yMoon = 65 + yEarth + 60 * Math.sin(((6* (time.getSeconds()-15) * Math.PI) / 180));
    cxt.drawImage(DOMMoon,xMoon,yMoon,70,70); 
    cxt.closePath;
    cxt.fill();
}

setInterval(actualizarContexto, 12000);
setInterval(actualizarHora, 1000);



