// let bikash = ["Bikash", "2000", "bikash@gmail.com", "abc"];

let abc = {};

const bikash = {
  name: "Bikash",
  email: "bikash@gmail.com",
  mobile: "91172347",
  city: "abc",
  pincode: 854301,
  marks: [1, 2, 3, 4],
  1: 1234,
};

// console.log(`Name : ${bikash["name"]}`);
// console.log(`Email : ${bikash.email}`);
// console.log(`Number : ${bikash[1]}`);

bikash.city = "Purnea";
delete bikash.city;

const sohan = bikash;
sohan.name = "Sohan";

// console.log("Bikash", bikash);
// console.log("Sohan", sohan);

//
// let a = 10;
// let b = a;
// console.log(`A : ${a}`);
// console.log(`B : ${b}`);

// a = 20;
// console.log(`A : ${a}`);
// console.log(`B : ${b}`);

const aman = {
  name: "Aman",
  email: "aman@gmail.com",
  mobile: "91172347",
  city: "abc",
  pincode: 854301,
  getInfo: function () {
    return `Hi, this is ${this.name}, My mobile is ${this.mobile}`;
  },
};

// console.log(aman.getInfo());

// object destructuring
// let name = aman.name;
// let email = aman.email;
// let pincode = aman.pincode;

// let { name, email, pincode } = aman;
// let { mobile: myMobile, city: myCity = "Purnia", address = "Purnea" } = aman;

// console.log(name, email, pincode);
// console.log(myCity);

let { name, ...amansData } = aman;

// console.log(name);
// console.log(amansData);
