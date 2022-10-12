# آمادگی برای مصاحبه

## پوشش مباحث

### سرفصل ها

---
---
### 1. [Subject: Data types](#1-data-types)
### 2. [Subject: Functions](#2-functions)
### 3. [Subject: Scope in JavaScript](#3-scope-in-javascript)
### 4. [Subject: Closure](#4-closure)
### 5. [Subject: Event loop](#5-event-loop)
### 6. [Subject: Creating and triggering events](#6-creating-and-triggering-events)
### 7. [Subject: Prototype and prototype chain](#7-prototype-and-prototype-chain)
### 8. [Subject: Inheritance and the prototype chain](#8-inheritance-and-the-prototype-chain)
---
---

### 𝗕𝗮𝘀𝗶𝗰 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗖𝗼𝗻𝗰𝗲𝗽𝘁𝘀:

### 1. Data types

جاوااسکریپت یک زبان داینامیک تایپ هست و مستقیم به یک نوع از داده تخصیص داده نمی شه. و همینطور از نوع weakly typed می باشد به همین منظور ممکن است شما به اشتباه یک نوع استرینگ را با number در یک متغیر جمع کنید که خب این خودش یک ضعف می باشد
```js
const foo = 42;
const result = foo + "1"; 
console.log(result); // 421
```
ما در جاوااسکریپت موارد زیر را دارا می باشیم برای تایپ ها 
```
Primitive values
Boolean type
Null type
Undefined type
Number type
BigInt type
String type
Symbol type
```
اخیرا Symbol اضافه شده است که امیوتبل می باشد و همینطور یونیک می باشد. لازه به ذکر است یونیک بودن آن ها ریفرنس در حافظه می باشد پس از نظر ولیو نیست به صورت مثال:
```js
const sym2 = Symbol('foo');
const sym3 = Symbol('foo');
Symbol('foo') === Symbol('foo')  // false
```
اطلاعات بیشتر:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

---

### 2. Functions

توابع یکی از بلوک های اصلی جاوااسکریپت هستند در حقیقت هر تابع شبی به یک رویه می باشد و مربوط به یک کار خاص و محاسبه آن ایجاد می گردد. هر رویه ای که دارای یک ورودی و خروجی می باشد و در جهای محدود فراخوانی می شود می تواند واجد شرایط یک تابع بودن باشد. توابع می توانند در یک متغییر قرار بگیرند و همینطور می توانند بدون نام یا ناشناس باشند. متغییر های تعریف شده در داخل اسکوپ تابع نمی تواند در جاهای دیگه برنامه فراخوانی شود.
توابع می توانند به صورت تودر تو یا به صورت کلوژر نیز باشند که این یک مثال از آن است

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
const result = fnInside(5); // returns 8
const result1 = outside(3)(5); // returns 8
```

---

### 3. Scope in JavaScript

محدوده یا اسکوپ در حقیقت کانتکسی هست در مورد اگزکیوت کدام ولیو یا شرط قرار است نمایش داده شود تا به آن ها ارجاع داده شود. اگر ولیو یا شرط یا هر موردی که قرار است ارجاع داده شود در محدوده یا اسکوپ نباشد نمی توان از آن استفاده کرد. لازم به ذکر است محدوده می تواند به صورت تو در تو باشد. فرزند ها می توانند به والد دسترسی داشته باشد ولی برعکس آن خیر.
به زبان ساده شما هر قطعه کدی که می زنی مثلا یک if یا یک فانکشن در فانکشن دیگه یک محدوده یا دامنه ای درست می کنی در حقیقت داری برنامه خودتون لایه بندی می کنی در یک محدوده بیای یک متغییر مشخص کنی نیم تونی در جای دیگه ای که در اون محدوده نیست از اون استفاده کنید

جوااسکریپت چندین مدل اسکوپ داره ۱. `Global scope` و ۲. `Module scope:` و ۳. `Function scope`

علاوه بر این، متغیرهای اعلام شده با let یا const می توانند به یک محدوده اضافی تعلق داشته باشند.

- Global scope
- Module scope
- Function scope
- Block scope

---


### 4. Closure

در حقیقت Closure این امکان را به شما می دهد به صورت محدود بتوانید تابع داخلی را دسترسی پیدا کنید از خارج تابع. این کار تلفیقی از تابع محصور شده و اجراع دادن به وضعیت اطراف آن می باشد `the lexical environment` در جاوااسکرپیت کلوژر هر زمانی که تابع درست می شود نیز اون هم درست می گردد.

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

می توان گفت Closures ها مفید هستند بخاطر اینکه شما می توانید به واسطه آن ها داده ها را با lexical environment یا تابعی مرتبط کنید که روی آن تابع عمل می کند. این شباهت آشکار با شی گرایی می باشد که به شما این امکان را می دهد ویژگی های یک شی را با یک یا چند متد مرتبط کنید

یک مثال خیلی رایج که باعث فهم بیشتر می شود. فرض کنید شما می خواهید یک دکمه ای را بسازید و به آن اندازه بدهید خوب این کار ممکن است در چندین روش یا اندازه های مختلف انجام گردد در اینجا کلوژر می تواند بسیار مفید باشد
```js
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
```
حال می توانید به این صورت آن ها را صدا بزنید 
```js
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
```

در زبان های دیگر این امکان به شما داده می شود تا یک تابع یا متغییر خصوصی بسازید ولی در جاوااسکریپت حتی با شی گرایی که به ظاهر امکان پذیر می باشد ولی از راه native این امکان وجود ندارد. روش های خصوصی فقط برای محدود کردن دسترسی به کد مفید نیستند. آنها همچنین یک راه قدرتمند برای مدیریت فضای golobal name  شما ارائه می دهند.
در این بخش هم کلوژر می تواند ابزار قوی برای شما باشد به کد زیر توجه کنید. این کد به شما این امکان را می دهد متغیر خصوصی و تابع خصوصی بسازید و به آن ها دسترسی پیدا کنید

```js
const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();
```
حال برای دسترسی به آن می توانید به این صورت عمل کنید
```js
console.log(counter.value()); // 0.
counter.increment();
counter.increment();
console.log(counter.value()); // 2.
counter.decrement();
console.log(counter.value()); // 1.
```
در کلوژر بالا هر کدامشان دارای یک lexical environment می باشند

به زبان ساده تر هر دفعه که موتور جاوااسکریپت یک execution context ایجاد میکند تا کدهای global scope یا کدهای یک تابع را اجرا کند ، یک lexical environment جدید هم ایجاد میکند تا متغیرهای تعریف شده در تابع را ضمن اجرای تابع ذخیره کند.
از نظر سرعت و کارایی نیز هرجا نیاز نیست نباید درست شود چون هر کدام برای خود یک اسکوپ می سازند و در زمان اجرای هر فانکشن دوباره ساخته می شوند هم از نظر سرعت هم از نظر استفاده از منابع نتیجه منفی دارد
به عنوان مثال، هنگام ایجاد یک شی/کلاس جدید، روش‌ها معمولاً باید به نمونه اولیه شی مرتبط شوند تا اینکه در سازنده شی تعریف شوند. دلیل آن این است که هر زمان سازنده فراخوانی شود، متدها مجدداً تخصیص می یابند (یعنی برای هر ایجاد شی).


---

### 5. Event loop

حلقه رویداد
جاوا اسکریپت دارای یک مدل زمان اجرا بر اساس یک حلقه رویداد است که وظیفه اجرای کد، جمع آوری و پردازش رویدادها و اجرای وظایف فرعی در صف را بر عهده دارد. این مدل با مدل های زبان های دیگر مانند C و Java کاملاً متفاوت است.

مفاهیم زمان اجرا

بخش های زیر یک مدل نظری را توضیح می دهند. موتورهای جاوا اسکریپت مدرن معنایی توصیف شده را پیاده سازی و به شدت بهینه می کنند.

به کد زیر توجه کنید
:

```js
function foo(b) {
  const a = 10;
  return a + b + 11;
}

function bar(x) {
  const y = 3;
  return foo(x * y);
}
const baz = bar(7); // 42
```


۱. هنگام فراخوانی ‍`bar`، اولین فریم حاوی ارجاع به آرگومان های `bar` و متغیرهای محلی ایجاد می شود

۲. وقتی `bar`  تابع `foo`  را فراخوانی می‌کند، یک فریم دوم ایجاد می‌شود و در بالای فریم اول قرار می‌گیرد که حاوی ارجاعاتی به آرگومان‌های foo و متغیرهای محلی
است

۳. وقتی foo برمی گردد، عنصر فریم بالایی از پشته بیرون می آید (فقط فریم تماس `bar` باقی می ماند)

۴. وقتی `bar` برمی گردد، پشته خالی است

---
### 6. Creating and triggering events

یک سری event هست که از قبل در جاوااسکریپت تعریف شده مثل click ولی اگر نیاز به ساخت یک event اختصاصی داریم جاوااسکریپت دوتا وب API داره که این کارو انجام می ده و همینطور براش راه قدیمی نیز وجود داره که وب API به عنوان کلاس اینترفیس اون رو راحتر کرده

اولین راه کلاس Event هست که نمونه کد اون به شرح زیر می باشد:
```js
const event = new Event('build');

// Listen for the event.
elem.addEventListener('build', (e) => { /* … */ }, false);

// Dispatch the event.
elem.dispatchEvent(event);
```


راه دوم هم CustomEvent می باشد که می تونید به واسطه اون ورودی های سفارشی هم بدهید ولی در Event این مورد انجام نمی شد نمونه کد:
```js
const event = new CustomEvent('build', { detail: elem.dataset.time });
function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}
```

و راهی که در گذشته استفاده می شد استفاده از document.createEvent بود که به شرح زیر می باشد
```js
// Create the event.
const event = document.createEvent('Event');

// Define that the event name is 'build'.
event.initEvent('build', true, true);

// Listen for the event.
elem.addEventListener('build', (e) => {
  // e.target matches elem
}, false);

// target can be any Element or other EventTarget.
elem.dispatchEvent(event);
```

اطلاعات بیشتر:
https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events

---

### 7. Prototype and prototype chain

هر شی در جاوا اسکریپت دارای یک ویژگی داخلی است که به آن نمونه اولیه یا prototype می گویند.
 نمونه اولیه به خودی خود یک شی است، بنابراین prototype نیز در خورد prototype خودش را دارد و چیزی را که یک زنجیره اولیه نامیده می شود، می سازد.
 این زنجیره زمانی به پایان می رسد که به یک prototype برسیم که برای prototype خودش null دارد.
 
 برای مثال اگر چنین چیزی در js درست شود
 ```js
 const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet();
```

موارد زیر را در آبجکتی که ساختیم خواهیم داشت
```
__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
city
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf
```

برای دسترسی به پورتوتایپ یک آبجکت می توانیم از اسم غیر استاندارد `__proto__` استفاده کنیم که در اکثر مروگر ها می باشد ولی می توانیم از دستور زیر نیز استفاده کنیم `Object.getPrototypeOf()`

هنگامی که سعی می کنید به property یک شی دسترسی پیدا کنید: اگر ویژگی در خود شی پیدا نشود، property برای ویژگی جستجو می شود. اگر هنوز property پیدا نشد، property یه property جستجو می‌شود و به همین ترتیب تا زمانی که property پیدا شود یا به انتهای زنجیره برسد، در این صورت undefined برگردانده می‌شود.


![myobject-prototype-chain](https://user-images.githubusercontent.com/8413604/195201475-63ce78cf-6039-4bfd-a529-b8cb832d6115.svg)


به این تصور نگاه کنید
![mydate-prototype-chain](https://user-images.githubusercontent.com/8413604/195201669-8b48115c-878a-4095-a0e0-3fee32a1c427.svg)

به صورت کلی وقتی یک آجکت آشنایی مثل myDate2.getMonth() را صدا می زنید در حقیقت شما Date.prototype را صدا زده اید

به این کد و خروجی آن توجه کنید
```js
const myDate = new Date(1995, 11, 17);
console.log(myDate.getYear()); // 95
myDate.getYear = function () {
  console.log('something else!');
};
myDate.getYear(); // 'something else!'
```

---

### 8. Inheritance and the prototype chain

اگر بکگراند شما از زبان هایی مثل جاوا و c++ می باشد ممکن است بخش وراثت در شروع برای شما کمی گیج کننده باشد. دلیلش این هست که جاوااسکریپت پویا است و انواع ایستا ندارد.
وقتی صحبت از وراثت به میان می آید، جاوا اسکریپت فقط یک ساختار دارد: اشیاء. هر شی دارای یک ویژگی خصوصی است که پیوندی به شی دیگری به نام prototype خود دارد. آن شی prototype، باز prototype خود را دارد، و به همین ترتیب تا زمانی که یک شی با null به عنوان prototype آن به دست آید. طبق تعریف، null هیچ prototype ای ندارد و به عنوان حلقه نهایی در این زنجیره اولیه عمل می کند. امکان جهش هر عضوی از زنجیره prototype یا حتی تعویض prototype در زمان اجرا وجود دارد، بنابراین مفاهیمی مانند ارسال استاتیک در جاوا اسکریپت وجود ندارد.
در حالی که این سردرگمی اغلب به عنوان یکی از نقاط ضعف جاوا اسکریپت در نظر گرفته می شود، خود prototype وراثت در واقع قدرتمندتر از مدل کلاسیک است. برای مثال، ساختن یک مدل کلاسیک بر روی یک مدل prototype، نسبتاً پیش پا افتاده است - به این ترتیب کلاس ها پیاده سازی می شوند.

اگرچه کلاس ها در حال حاضر به طور گسترده ای پذیرفته شده اند و به یک پارادایم جدید در جاوا اسکریپت تبدیل شده اند، کلاس ها الگوی وراثت جدیدی را به ارمغان نمی آورند. در حالی که کلاس‌ها بیشتر مکانیسم‌های اولیه را انتزاعی می‌کنند

```js
// Properties all boxes created from the Box() constructor
// will have
Box.prototype.getValue = function () {
  return this.value;
};
```

که در کلاس ها به شکل بهتری نمایش داده می شود و خوانایی و منطقی بیشتر نمایش داده می شود ولی جاوااسکریپت به خود خود مفهوم کلاس را ندارد مخصوصا در مرورگر های قدیمی با استفاده از کتابخانه های مبدل مثل بابل.
```js
class Box {
  constructor(value) {
    this.value = value;
  }

  // Methods are created on Box.prototype
  getValue() {
    return this.value;
  }
}
```
به موارد زیر توجه کنید:
```js
const object = { a: 1 };
Object.getPrototypeOf(object) === Object.prototype; // true

// Array literals automatically have `Array.prototype` as their `[[Prototype]]`
const array = [1, 2, 3];
Object.getPrototypeOf(array) === Array.prototype; // true

// RegExp literals automatically have `RegExp.prototype` as their `[[Prototype]]`
const regexp = /abc/;
Object.getPrototypeOf(regexp) === RegExp.prototype; // true
```

> نکته: مهم نیست یک تابع چطور معرفی می کنید همیشه یک تایع یک شی prototype دارد بجز یک استثنا آن هم ارو فانکشن ها هستند arrow function


---
9. Class and inheritance
10. DOM
11. bind/call/apply
12. Promise
13. WebAPI
14. Task queue
15. Call stack
16. Async/await
17. Generators

### 𝗕𝗮𝘀𝗶𝗰 𝗪𝗲𝗯 𝗖𝗼𝗻𝗰𝗲𝗽𝘁𝘀:
1. Page rendering cycle
2. http/https/https2
3. CORS
4. Local storage/Session storage
5. Cookie
6. JWT
7. XHR
8. Micro Frontend
9. REST/GraphQL/Socket connection
10. Browser Concepts
11. Debugging Application
12. Chrome Dev Tool Features 

### 𝗔𝗱𝘃𝗮𝗻𝗰𝗲𝗱 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗖𝗼𝗻𝗰𝗲𝗽𝘁𝘀:
1. OOPs concept 
2. Design Patterns
a. Singleton 
b. Provider
c. Prototype
d. Observer 
e. Module
f. HOC

3. Understanding V8 in depth 
a. JIT
b. Interpreter
c. Execution
d. Compiler
4. Currying 

### 𝗕𝗮𝘀𝗶𝗰 𝗥𝗲𝗮𝗰𝘁𝗝𝗦 𝗖𝗼𝗻𝗰𝗲𝗽𝘁𝘀 (bonus): - 
1. Introduction JSX
2. React Component
3. Component State and Props
4. Adding Style (CSS)
5. Functional and Class components
6. React Lifecycle Methods
7. Virtual DOM
8. React Hooks
9. Custom Hooks
10. Context API
11. Synthetic Events
12. Routing
13. Data Flow (Redux/Flux)
14. Server-Side Rendering
15. Unit Testing
16. Jest & React Testing library 
17. Mocking Data
18. Understanding Webpack (Bundler)
19. Babel, env, prettier, linter 


---


## وب‌سایت‌ها

- [ ] https://www.frontendinterviewhandbook.com/introduction/

## جاوااسکریپت

- [ ] https://ditty.ir/posts/70-javascript-interview-questions-part-1/nMQzn

## ری‌اکت

- [ ] https://github.com/sudheerj/reactjs-interview-questions

## تایپ‌اسکریپت

- [ ] https://www.interviewbit.com/typescript-interview-questions/

## کوییز لینکدین

- [ ] https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/react/reactjs-quiz.md
- [ ] https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/javascript/javascript-quiz.md
