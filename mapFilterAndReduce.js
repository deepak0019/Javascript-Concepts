const arr = [5, 1, 3, 2, 6];

const double = function (x) {
  return x * 2;
};

const output = arr.map(double);
const output2 = arr.map((x) => x * 3);

console.log(output);
console.log(output2);

//filter odd values

const isOdd = function (x) {
  return x % 2;
};

const isEven = function (x) {
  return x % 2 === 0;
};

const oddNo = arr.filter(isOdd);
console.log(oddNo);

const evenNo = arr.filter(isEven);
console.log(evenNo);

const temp = arr.filter((x) => x > 4);
console.log(temp);

//Normal function to get the sum of an array

function findSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
console.log(findSum);

//using reduce to get the sum

const reduceSum = arr.reduce(function (acc, curr) {
  acc = acc + curr;

  return acc;
}, 10);

//-> 2nd parameter is the value with which acc is initialized

console.log(reduceSum);

const findMax = arr.reduce(function (acc, curr) {
  acc = Math.max(acc, curr);
  return acc;
}, 0);

console.log(findMax);

const users = [
  {
    firstName: "krati",
    Lastname: "saini",
    age: 26,
  },
  {
    firstName: "donald",
    Lastname: "trump",
    age: 75,
  },
  {
    firstName: "elon",
    Lastname: "musk",
    age: 50,
  },
  {
    firstName: "abc",
    Lastname: "def",
    age: 26,
  },
];

const fullName = users.map((e) => e.firstName + " " + e.Lastname);

console.log(fullName);

// acc = {26: 2, 75:1, 50:1};

const usersWithParticularAge = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

console.log(usersWithParticularAge);

const usersWithAgeLess30 = users
  .filter((e) => e.age < 30)
  .map((e) => e.firstName);

console.log(usersWithAgeLess30);

const ans = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(ans);
