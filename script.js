let time = document.getElementById("time");

setInterval(()=>{
    let date = new Date();
    time.innerText = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
}, 100);