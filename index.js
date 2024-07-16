function solution(myObj) {
  let newObj = {};
  let options = ["", "-", "N/A"];
  for (let i in myObj) {
    let key = i;
    let val = myObj[i];

    if (Array.isArray(val)) {
      newObj[key] = val.filter((item) => !options.includes(item));
    } else if (typeof myObj[key] === "object") {
      
      const arr = Object.entries(val);
      newObj[key] = Object.fromEntries(arr.filter((item) => !options.includes(item[1])));

    } else if (!options.includes(val)) {
      newObj[key] = val;
    }
  }
  console.log(newObj);
}

let myObj = {
  name: {
    firstName: "Robert",
    middle: "",
    lastName: "Smith",
  },
  age: 25,
  DOB: "-",
  hobbies: ["Running", "Coding", "-"],
  education: {
    highSchool: "N/A",
    college: "Yale",
  },
};

const result = solution(myObj);

console.log(result);
