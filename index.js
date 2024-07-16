function solution(myObj) {
  //   let newObj = {};
  let options = ["", "-", "N/A"];
  //   console.log(typeof(myObj.name))
  for (let i in myObj) {
    if (typeof myObj[i] === "object") {
      const nestedObject = myObj[i];

      if (Array.isArray(myObj[i])) {
        let a = nestedObject.filter((item) => !options.includes(item));
        myObj[i] = a;
      } else {
        let arrPair = Object.entries(nestedObject);
        let n = arrPair.filter((item) => !options.includes(item[1]));

        myObj[i] = Object.fromEntries(n);
      }
    } else {
      if (options.includes(myObj[i])) {
        delete myObj[i];
      }
    }
  }
  return myObj;
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
