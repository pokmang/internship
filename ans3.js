  
// เขียนฟังก์ชันเพื่อรับ array แบบหลายมิติ จากนั้นทำให้ array กลายเป็นมิติเดียว
// //input
// const input = [[0], [0], [[0], [0]], [0]]
// //output
// const output = [0, 0, 0, 0, 0]

const input = [[0], [0], [[0], [0]], [0]] 

const output = (arr) =>{

    return arr.flat(Infinity)
}
console.log(output(input));
