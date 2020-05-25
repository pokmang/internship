  
// เขียนฟังก์ชันรับพารามิเตอร์ตัวเดียว เพื่อตัดค่า name ที่ซ้ำกันออก


const input = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'A' },
    { id: 4, name: 'C' },
    { id: 5, name: 'C' },
  ]


let newData = []
input.map(v=>{
   
    let data = input.find(item=>{
         return (v.name == item.name)&&(v.id!=item.id)
    })
    if(data === undefined){
        newData.push(v)
    }else{
        let have =newData.find(item=>{
            return (v.name == item.name)
        })
        
        if(have === undefined) newData.push(v)
    }
  })
  console.log(newData);
  




  

  