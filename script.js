let cardSecond = document.querySelector(".cardSecond")
for(let i=0;i<= 60;i++){
    cardSecond.innerHTML+=
    `<div class="second">
       <div class="numberSecond"> ${i}</div>
        </div>`
    let second = document.querySelectorAll(".second")
   
    second[i].style.transform=`rotateY(-${i * 6}deg)translateZ(3595px)`
}
let cardMinute = document.querySelector(".cardMinute")
for(let i=0;i<= 60;i++){
    cardMinute.innerHTML+=
    `<div class="minute">
       <div class="numberMinute"> ${i}</div>
        </div>`
    let minute = document.querySelectorAll(".minute")
   
    minute[i].style.transform=`rotateY(-${i * 6}deg)translateZ(3595px)`
}


let cardHour = document.querySelector(".cardHour")
for(let i=0;i<= 60;i++){
    cardHour.innerHTML+=
    `<div class="hour">
       <div class="numberHour"> ${i}</div>
        </div>`
    let hour = document.querySelectorAll(".hour")
   
    hour[i].style.transform=`rotateY(-${i * 6}deg)translateZ(3595px)`
}

setInterval(()=>{
    let second = new Date().getSeconds()-30
    cardSecond.style.transform=`rotateY(${second*6}deg)`
    let minute = new Date().getMinutes()-30
    cardMinute.style.transform=`rotateY(${minute*6}deg)`
    let hour = new Date().getHours()-30
    cardHour.style.transform=`rotateY(${hour*6}deg)`
},1000);