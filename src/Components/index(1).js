// // JS

// // 1. чим відрізняється декларитивна функція від еров функції

// testFunc();
// let test = "hello people";

// function testFunc() {
//   console.log("hello");
//   console.log(test);
// }

// arrowTestFunc();
// const arrowTestFunc = () => console.log(test);
// ////////

// function argsFunc() {
//   console.log(arguments);
// }

// const arrowArgsFunc = () => console.log(arguments);

// ///////
// const hello = "hello";

// function testDeclarative() {
//   hello;
// }
// console.log(testDeclarative());

// const testArrow = () => hello;
// console.log(testArrow());

// ////

// // 2. що таке this ? як привязати контекст ? яка різниця між методами привязки контексту ?

// const company = {
//   name: "TechWhat",
//   employees: 2000,
//   location: "Lviv",
//   year: 2000,
//   employeeSatisfaction: "high",

//   companyFullInfo() {
//     return `${this.name} was estabished in ${this.year}`;
//   },
//   companyPartInfo: () =>
//     `${this.name} has employee satisfaction on ${this.employeeSatisfaction} level`,

//   detailedInfo() {
//     return () => `${this.name} was located  in ${this.location}`;
//   },
//   superDetailedInfo() {
//     return function () {
//       return `${this.name} has  ${this.employees}`;
//     };
//   },
// };

// const getcompanyFullInfo = company.companyFullInfo;
// getcompanyFullInfo();

// const getcompanyPartInfo = company.companyPartInfo;
// getcompanyPartInfo();

// const getdetailedInfo = company.detailedInfo;
// getdetailedInfo();

// const getsuperDetailedInfo = company.superDetailedInfo;
// getsuperDetailedInfo();

// 3. shallow i deep copy

// const person = {
//   name: "Chris",
//   age: 24,
//   hobbies: {
//     sport: ["tennis", "football"],
//     travelling: {
//       visitedCountries: ["Ireland", "Poland", "USA"],
//     },
//   },
//   contact: {
//     phone: "982284034",
//     email: "hdfh@gmail.com",
//   },
// };
// const anotherPerson = { ...person };
// anotherPerson.name = "Robert";
// anotherPerson.hobbies.sport.push("dancing");

// anotherPerson.contact = {
//   ...anotherPerson.contact,
//   workEmail: "work@gmail.coms",
// };

// console.log({ person, anotherPerson });
// 4. які методи масиву мутабельні а які ні ?

// 5. які типи даних мутабельні які ні ?
// let obj1 = { city: "Lviv", people: 500000 };
// let obj2 = obj1;
// obj2.city = "Yaremche";
// obj1 = { city: "Ivano-Frankivsk" };

// console.log({ obj1, obj2 });

// const testString = "mia";
// testString[0] = "K";
// console.log(testString);

// 6. event loop ( micro / macro task)

console.log(4);

setTimeout(() => console.log(0), 0);

setTimeout(() => {
  Promise.resolve(1).then((val) => {
    console.log(5);
  });
}, 0);

Promise.resolve(1).then((val) => {
  console.log(1);
});

console.log(3);


// 7. promise що то таке ? як повернути інфу з проміси ? які є методи є в промісах ?

// 8. що таке замикання ? як воно працює sum(2)(4)?

// var a = 5;

// function testClose() {
//   console.log("inside func");
//   if (a) {
//     console.log(a);
//     var a = 100;
//   }
// }
// testClose();

// function dance() {
//   const message = "Dance ";
//   if (true) {
//     const amigo = "Dmytro";
//     console.log(message);
//   }
//   console.log(amigo);
// }
// dance();

// 9. Set / Map

// 10. різниця promise and async / await

// React

// 1. як треба обновлювати редюсер ? чому він імутабельний ?

// 2. pure function що то таке ?

// 3. коли компонента перерендер? і для чого нам це ?

// 4. яка різниця між this.setState / useState ?

// 5. як з даними працювати? де робити API call ?

// 6. як працює useEffect і що то таке ? чи можемо використовувати async/await в useEffectі як ?

// 7. чи компонент чайлд буду переренидеритись коли парент перерендириться ? як цього уникнути

// 8. чому бажано не зловживати React.memo();

// 9. що таке children ? і для ?
