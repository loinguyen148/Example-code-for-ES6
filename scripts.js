/**********************/
/* Default Parameters */
const obj = obj || {}

const sum = ({numA = 0, numB = (() => 10)() }) => {
  return numA + numB;
};

const mergedArr = (a, b, ...arr) => {
  return [...arr, a, b];
};
mergedArr(4, 5, 1, 2, 3);

const profiles = {
    name: 'Studen A',
    gender: 'male'
};

const student = {
  name = 'ID XXX',
  gender = 'gay'
} = profiles;

/**********************/
/* Template Literals */
const string1 = `This ${first} example for template String`;
const string2 = `This is ${ string1 ? 'another' : 'first' } sample for template String`;
const string3 = `1 + 2 = ${ 1 + 2 }`;
const multiLineString = `This is line 1 
                        This is line 2`;

const rawStr = String.raw`This is string ${1+2}!`; 

const taggedTemplate1 = (strings, param1, param2) => {
  const string = strings[0];
  return `${string} has parameters: ${param1} , ${param2}`;
};
const {a, b} = {a: 'a', b: 'b'};
taggedTemplate1`This function ${a}, ${b}` // Result: "This function has parameters: a , b"

const taggedTemplate2 = (strings, param1) => strings.raw[0];
const taggedTemplate2 = (strings, param1) => strings[0];
taggedTemplate2`This is \n string`; // Result: 'This is \n string'
taggedTemplate3`This is \n string`; // Result: 'This is 
                                    //          string'

/******************************/
/* Destructuring Assignment  */
const employee = {
  age: 10,
  gender: 'male',
  address: 'TBD',
  phone: '52-6-82'
};
const {
  age,
  gender = 'female',
  address,
  phone
} = employee;

const [a, b] = [10, 20];
const [a, ...b] = [10, 20, 30, 40];
const [a, , c] = [1, 2, 3];
const profiles = {
  title: 'Senior fresher',
  job: {
    team: 'AMS',
  }
};

const {
  title,
  job: {
    team,
    project = 'TBD'
  } = {}
} = profiles;


/*************/
/* Callback */
$('#btn').on('click', () => {
  alert('clicked');
});

const notify = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000)
}

$.ajax({
  url: '',
  success: successCallback,
  complete: completeCallback,
});

/* Promise */
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('OK');

    } else {
      reject('Failed');
    }
  }, 1000);
});
myPromise1.then((resp) => { 
  return 10;

}).then((resp) => {
  console.warn(resp);

}).catch((err) => {
  console.error(err);

}).finally(() => {
  console.warn('DONE');
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => { 
    reject('Fail');
  }, 1000);
});
myPromise2.catch((value) => { 
  console.warn(value);
});

myPromise2.then((value) => { 
    console.warn(value);
}, (err) => {
    console.warn(err);
});


// All
const promise1 = Promise.resolve('OK 1');
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK 2');
  }, 500);
});
Promise.all([promise1, promise2]).then(function(values) {
  console.log(values);
});

// Race
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK 1');
  }, 100);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK 2');
  }, 200);
});
Promise.race([promise3, promise4]).then(function(value) {
  console.log(value);
});