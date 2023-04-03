import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, 'end')

});



// GENERICS

const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100); 
  return { ...obj, uid };
}

let docOne = addUID({ name: 'rafi', age: 30 });

// ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

// With Interfaces
interface Resource<T> {
  uid: number,
  resourceName: ResourceType,
  data: T
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.BOOK,
  data: {name: 'shaun'}
}

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: ResourceType.PERSON,
  data: ['bread', 'milk', 'toilet roll']
}


// tuples -- order of types is fixed

let arr = ['ryu', 25, true];

arr[0] = false;
arr[1] = 'yoshi'

arr = [30, false, 'yoshi']

let tup: [string, number, boolean] = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;

let student: [string, number];
student = ['chun-li', 2045234];