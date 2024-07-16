# Task-3

### Write a JavaScript function that removes all keys with values of "N/A", "-", or empty strings "" from a nested object. The function should take the object as input and return the modified object with the unwanted keys removed.

Examples
For example, given a nested object like this:

```var myObj = {
    "name": { "first": "Robert", "middle": "", "last": "Smith" },
    "age": 25,
    "DOB": "-",
    "hobbies": [ "running", "coding", "-" ],
    "education": { "highschool": "N/A", "college": "Yale" }
} ```



### For example if the function is called then it should return the object below	

console.log(solution(myObj))
{
	"name": { "first": "Robert", "last": "Smith" },
	"age": 25,
	"hobbies": [ "running", "coding" ],
	"education": { "college": "Yale" }
}

