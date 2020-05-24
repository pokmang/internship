// const data = [
//   {
//     company: "ชื่อบริษัท 1",
//     year: "2017",
//     id: 57,
//   },
//   {
//     company: "ชื่อบริษัท 2",
//     year: "2018",
//     id: 57,
//   },
//   {
//     company: "ชื่อบริษัท 3",
//     year: "2018",
//     id: 58,
//   },
//   {
//     company: "ชื่อบริษัท 4",
//     year: "2017",
//     id: 61,
//   },
//   {
//     company: "ชื่อบริษัท 5",
//     year: "2019",
//     id: 58,
//   },
//   {
//     company: "ชื่อบริษัท 6",
//     year: "2019",
//     id: 58,
//   },
// ];
const data = [
    {
        company: 'ชื่อบริษัท 3',
        year: '2018',
        id: 58,
    },
    {
        company: 'ชื่อบริษัท 4',
        year: '2017',
        id: 61,
    },
    {
        company: 'ชื่อบริษัท 5',
        year: '2019',
        id: 58,
    },
    {
        company: 'ชื่อบริษัท 6',
        year: '2019',
        id: 58,
    },
    {
        company: 'ชื่อบริษัท 1',
        year: '2017',
        id: 57,
    },
    {
        company: 'ชื่อบริษัท 2',
        year: '2017',
        id: 57,
    },
]
let index = [];
const find_index = (year, id) => {
  let real_index = index.findIndex((v) => {
    return v.year == year && v.id == id;
  });
  if (real_index == -1) {
    index.push({ year, id });
    return index.length - 1;
  } else {
    return real_index;
  }
};
// เรียงตามปี
const compare_year = (a, b) =>{
    if((a[0].year < b[0].year)  ){
            return -1;
    }else if((a[0].year > b[0].year)){
            return 1;
    }else{
            return 0;
    }
}
//เรียงตามไอดี
const compare_id = (a, b) =>{
    if((a[0].id < b[0].id)  ){
            return -1;
    }else if((a[0].id > b[0].id)){
            return 1;
    }else{
            return 0;
    }
}
const group = (temp) => {
    let newData =  temp.reduce(function (r, a) {
        // console.log(r);
        
        r[find_index(a.year, a.id)] = r[find_index(a.year, a.id)] || [];
        r[find_index(a.year, a.id)].push(a);
        return r;
      }, []);
      
      

      //newData = newData.sort(compare_year);
    newData = newData.sort(compare_id);
return newData
}
 

console.log(group(data));
