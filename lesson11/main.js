let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let s = 0
        let i = 0
 let min = 0
let max = 10
    while(i<10) {

        arr[i]=Math.ceil(Math.random()*10000)
        s += arr[i]
        i++
            if(min>arr[i]){
                max = arr[i]
            }
    }
    console.log(arr)
        console.log("s="+s)
         console.log("max="+max)
    console.log("min="+min)