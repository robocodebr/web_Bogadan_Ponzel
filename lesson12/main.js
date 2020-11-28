/* 
let o = 2
console.log(o)

var a = 3
console.log(a)

const s = 4
console.log(s)

    o = a
    a = 14

    let b = true
    let b2 = false

    let f = "text \" ";
    let f3 = 'text2 \' '
    let f2 = `gh \` `;
    if(true){
        let h = 2
        h++ 
    }
    let sALL = "dr" + f +" " + f2 + " " + f3
let u = null;
console.log(u)
for(let i = 0; i<10; i++){
    console.log(i)
}
alert(
    3+3*2
)
let korobka = document.getElementById("conteiner")
korobka.innerHTML = "hello world!"
korobka.innerHTML += f
korobka.innerHTML += f2
korobka.innerHTML += f3
korobka.innerHTML += sALL
*/
let min = 1
let max = -10000
let rand = Math.random()
rand = rand * (min-max) + min

let korobka  = document.getElementById("conteiner")
korobka.innerHTML += rand
korobka.innerHTML += "<br>"
rand = Math.floor(rand)
korobka.innerHTML += rand

let rand2 = Math.ceil(Math.random()*100)
korobka.innerHTML += "<br> rand2" + rand2

let min2 = Math.min(rand, rand2)
korobka.innerHTML +="<br> min:" + min2

let max2 = Math.ceil(Math.random()*100)
korobka.innerHTML +="<br> max2:" + max2

let w = Math.ceil(Math.random()*100)
korobka.innerHTML +="<br> 12^2" + w

w += 123
w++
++w

max2 = max2 - 1
max2 -= 12345
max2 --
--max2
min2 = min2 * 2
min2 *= 2

min = min / 4
min /= 4

let e = min % 2
let e1 = 123%7
korobka.innerHTML += "<br> 123%7=" +e1
let y = "<br>min="+min+"; max="+max
let q = `<br>min=${min}; max =${max}`
korobka.innerHTML += y
korobka.innerHTML += q