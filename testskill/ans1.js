const inputA = [
    { id: 1, name: 'customer1', sur_name: 'sur1' },
    { id: 2, name: 'customer2', sur_name: 'sur2' },
    { id: 3, name: 'customer3', sur_name: 'sur3' },
]
const inputB = [
    { id: 1, province: 'SR' },
    { id: 2, province: 'SP' },
    { id: 3, province: 'SA' },
]

  
  const matchid = (arr1, arr2) => {
    let newData = [];
    arr1.forEach((v) => {
      arr2.forEach((item) => {
        if (v.id === item.id) {
          newData.push({ ...v, province: item.province });
        }
      });
    });
    return newData;
  };
  console.log(matchid(inputA, inputB));
  