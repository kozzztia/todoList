

const randomNumber =(min,max)=>{
    return  Math.floor(Math.random()* (max-min) + min)
}

export const randomColor = () =>{
    const color = `rgb(
    ${randomNumber(0,255)},
    ${randomNumber(0,255)},
    ${randomNumber(0,255)})`
    return color
}
let id = 1;
export const idGenerator = () => {
    return id++
}
