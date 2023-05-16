let swappingCase = "MoHamED"
let mp = swappingCase.split("").map((e,index,arr) => {
    console.log(index)
    console.log(arr)
     return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()
    }
)
// function fn(e) {
//     e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()
// }
console.log(mp.join(""))
let  c = "M"
console.log(typeof("M" - 1))