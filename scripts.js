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


/* Async Await */
const promise5 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise5');
    }, 1000);
  })
};
const promise6 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise6');
    }, 2000);
  })
};
const promise7 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise7');
    }, 3000);
  })
};

asyncFunc1 = async() => {
  const a = await promise5();
  const b = await promise6();
  const c = await promise7();

  console.warn(a, b, c)
}

asyncFunc2 = async() => {
  const a = promise5();
  const b = promise6();
  const c = promise7();

  console.warn(await a);
  console.warn(await b);
  console.warn(await c);
}

/* Block Scope - Let and Const */
const fn1 = () => {
  var myVar = 1;
  
  console.log(myVar); // 1
  console.log(otherVar); //undefined

  otherVar = 5;

  if (myVar > 0) {
    var myVar = 2;
    var childVar = true;

    console.log(myVar); // 2
  }

  var otherVar; 

  console.log(otherVar); // 5
  console.log(myVar === 1); // false
  console.log(childVar); //true
};

const fn2 = () => {
  const constValue = 10;

  if (true) {
    var varValue = constValue;
    let letValue = constValue;

    console.log(varValue, letValue); // 10, 10
  }

  console.log(varValue); // 10

  try {
    console.log(letValue); // Can not access
    
  } catch (e) {
    console.log(e); // Error for using let vararible
  }
};

const fn3 = () => {
  const value = 10;

  if (value) {
		let letValue = value;
    let letValue = 'foo'; // error
    // Same results when use 'const'
	}
};

const fn4 = () => {
  let myLet = 10;
  const myConst = 30;

  {
    let myLet = 20;
    const myConst = 40;

    console.log(myLet); // 20
    console.log(myConst); // 40
  }

  console.log(myLet); // 10
  console.log(myConst); // 30
};

const myConst; // Err

const constValue = 10;
constValue = 20; // Err

const fn5 = () => {
  const constObj = { name: 'Default', age: 10 };
  constObj.name = 'Kenvin';
  console.log(constObj)
  constObj = 'Sample string'; // Err
}

const fn6 = () => {
  const otherConstObj = Object.freeze({ name: 'Default', age: 10, history: [1,2,3] });
  otherConstObj.name = 'Kenvin';
  otherConstObj.history.push(4);
  console.log(otherConstObj);
  otherConstObj.history = [10, 9, 8];
  console.log(otherConstObj);
}

const fn7 = () => {
  const myFn = function() { // temporal dead zone
		console.log(value);
  }
  
  let value = 'foo';
  myFn();
}

const fn8 = () => {
  for (var i = 0; i < 5; i++) {
		// ..
  }
  
	for (let j = 0; j < 5; j++) {
		// ..
	}

	console.log(i);
	console.log(j);
}

const fn9 = (value) => {
  let value = 10; // err
  {
    console.log(value);
  }
};

/*
  Use var at the top fn
  Use const for variables you want to be immutable (primitive: Number, String, Boolean, etc).
  Use Object.freeze in concert to make the object truly immutable. 
  'Var' can use everywhere in current fn scope
*/

/* Class */
const newClass = new MyClass('Kenvin'); // Error

class MyClass {
  constructor(name) {
    this.name = name;
  }
}

const newClass1 = new MyClass('Kenvin');

// Class Expression
let MySchool = class { // Unnamed
  constructor(name) {
    this.name = name;
  }
};

console.log(MySchool.name);

let myCar = class Car { // Unnamed
  constructor(name) {
    this.name = name;
  }
};

const car1 = new myCar('Car 1');

class ExampleClass {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name
  }

  static getDefaultName() {
    return 'Kenvin';
  }
}

class ParentClass {
  constructor(name) {
    this.name = name;
  }

  action() {
    console.log(this.name);
  }
}

class ChildClass extends ParentClass {
  constructor(name) {
    super(name);
  }

  action() {
    super.action();
  }
}

const childClass = new ChildClass('Baby');
childClass.action();
console.log(childClass instanceof ChildClass)
console.log(childClass instanceof ParentClass)
console.log(ChildClass instanceof ParentClass)

/* Modules */
export const numberOne = 1;
export const sum = ({x = 0, y = 0}) => { return x + y; }

const minus = ({x = 0, y = 0}) => { return x - y; }
const multiple = ({x = 0, y = 0}) => { return x * y; }
const math = () => {  }; // private fn

export { minus, multiple };

import { numberOne, sum, minus, multiple as multip } from 'xx.js';