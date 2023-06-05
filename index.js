let text = document.getElementById('text1')
console.log(text.innerText);

let head = document.getElementsByTagName('h1')
console.log(head);

let boxx = document.getElementsByClassName('box')
console.log(boxx)

let Q4 = document.querySelector('h3');

Q4.addEventListener('click', () => {
   Q4.innerText=' → Hello World'
})



let Q5 = document.getElementsByClassName('Replace')

function callme(){
console.log(Q5[0])
Q5[0].innerText= " → Welcome To Elevation Academy";
}

let header =document.querySelector('#heading')

header.addEventListener('click',() => {
    heading.setAttribute('style', 'color : red')
})


let parent = document.querySelector('.parent')
let change = document.querySelectorAll('button')
let count = 0

change[1].addEventListener('click',()=>{
    if(count %2 === 0){
        parent.setAttribute('style', 'flex-direction: column')
        count++
        console.log(count)
    }
    else{
        parent.setAttribute('style', 'flex-direction: row')
        count++
        console.log(count)
    
    }
})



let clock = document.querySelector('.Time')
let h2 = document.querySelectorAll('h2')

function time(){
    let time = new Date;
    let hours= time.getHours()
    let min = time.getMinutes()
    let secs = time.getSeconds()

    let timezone =`Hours ${hours} : Minutes ${min} : Seconds ${secs}`
    console.log(hours, min, secs)
    h2[0].innerText= timezone
}

setInterval(() => {
    time()
},1000)