function solution(myObj) {
  let newObj = {};
  let options = ["", "-", "N/A"];
  for (let i in myObj) {
    let key = i;
    let val = myObj[i];

    if (Array.isArray(val)) {
      newObj[key] = val.filter((item) => !options.includes(item));
    } else if (typeof myObj[key] === "object") {
      let nestedObj = {};
      for (let j in val) {
        if (!options.includes(val[j])) {
          nestedObj[j] = val[j];
        }
      }
      newObj[key] = nestedObj;
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
