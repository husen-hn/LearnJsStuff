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
### 8. [Subject: Inheritance and the prototype chain](#8-class-inheritance-and-the-prototype-chain)
### 9. [Subject: DOM](#9-dom)
### 10. [Subject: bind/call/apply](#10-bindcallapply)
### 11. [Subject: Promise](#11-promise)
### 12. [Subject: WebAPI](#12-webapi)
### 13. [Subject: Task queue](#13-task-queue)
### 14. [Subject: Web Workers API](#14-web-workers-api)
### 15. [Subject: Call stack](#15-call-stack)
### 16. [Subject: Async/await](#16-asyncawait)
### 17. [Subject: Generators](#17-generators)
### 18. [Subject: Page rendering cycle](#1-page-rendering-cycle)
### 19. [Subject: http/https/https2](#2-httphttpshttps2)
### 20. [Subject: Micro Frontend](#3-micro-frontend)
### 21. [Subject: CORS](#4-cors)
### 22. [Subject: Local storage/Session storage](#5-local-storagesession-storage)
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

در زبان های دیگر این امکان به شما داده می شود تا یک تابع یا متغییر خصوصی بسازید ولی در جاوااسکریپت حتی با شی گرایی که به ظاهر امکان پذیر می باشد ولی از راه native این امکان وجود ندارد. روش های خصوصی فقط برای محدود کردن دسترسی به کد مفید نیستند. آنها همچنین یک راه قدرتمند برای مدیریت فضای global name  شما ارائه می دهند.
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

یک سری event هست که از قبل در جاوااسکریپت تعریف شده مثل click ولی اگر نیاز به ساخت یک event اختصاصی داریم جاوااسکریپت دوتا وب API داره که این کارو انجام می ده و همینطور براش راه قدیمی نیز وجود داره که وب API به عنوان کلاس اینترفیس اون رو راحت تر کرده

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

### 8. Class Inheritance and the prototype chain

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

### 9. DOM

این گزینه مخفف `The Document Object Model` می باشد. نمایش داده‌های object هایی است که ساختار و محتوای یک سند را در وب تشکیل می‌دهند. در حقیقت DOM یک اینترفیکس برای اسناد در وب هست. نمایش دهنده این است که برنامه نویس می توانید اطلاعات در یک صفحه وب از جمله کانتنت استایل و ... را تغییر دهید. DOM سند را به صورت nodeها و اشیاء نشان می دهد. به این ترتیب، زبان های برنامه نویسی می توانند با صفحه تعامل داشته باشند. DOM با استفاده از چندین API که با هم کار می کنند ساخته شده است. هسته DOM موجودیت هایی را که هر سند و اشیاء درون آن را توصیف می کنند، تعریف می کند. این در صورت نیاز توسط سایر APIها که ویژگی ها و قابلیت های جدیدی را به DOM اضافه می کنند، گسترش می یابد. به عنوان مثال، HTML DOM API پشتیبانی از نمایش اسناد HTML را به DOM اصلی اضافه می کند، و API SVG پشتیبانی برای ارائه اسناد SVG اضافه می کند. DOM بخشی از زبان جاوا اسکریپت نیست، بلکه یک وب API است که برای ساخت وب سایت ها استفاده می شود. جاوا اسکریپت را می توان در زمینه های دیگر نیز استفاده کرد. به عنوان مثال، Node.js برنامه های جاوا اسکریپت را روی یک کامپیوتر اجرا می کند، اما مجموعه متفاوتی از API ها را ارائه می دهد، و DOM API بخشی اصلی از زمان اجرا Node.js نیست.

باید توجه کرد DOM به صورتی ساخته شده است که با هر زبانی بتوان باهاش کار کرد

#### بخش های مهم مربوط به DOM به شرح زیر می باشد:
- Document


هنگامی که یک عضو یک شی از نوع document را برمی گرداند، این شیء خود شیء سند ریشه است. بخش مرجع سند DOM شی سند را توصیف می کند.
- Node


هر شی که در یک سند قرار دارد نوعی node  است. در یک سند HTML، یک object می تواند یک node عنصر باشد، مثال یک node متن یا node اتربیوت باشد.
- Element


المنت تایپ ها بر اساس node می باشند. اشاره دارد به یک المنت یا یک node از المنت ها که یکی از اعضای DOM API آن را برمی گرداند به عنوان مثال `document.createElement()`  این API یک آبجکت رفرنس شده به از یک node را به عنوان یک المنت بر می گرداند.

المنت ها به وسیله HTML DOM API's معرفی می شوند که هر کدام می گویند امکانات و خاصیت های یک المنت چیست
- NodeList


لیستی از المنت ها می باشد مثل مواردی که با `document.querySelectorAll()` فراخوانی می شوند
- Attr


هنگامی که یک ویژگی توسط یک عضو برگردانده می شود مثال مواردی که با `createAttribute() ` درست می شوند. attribute ها node  در DOM هستند، درست مانند المنت ها، اگرچه ممکن است به ندرت از آنها استفاده کنید.
- NamedNodeMap


یک namedNodeMap مانند یک آرایه است، اما آیتم‌ها با نام یا index قابل دسترسی هستند، اگرچه این مورد صرفاً یک راحتی برای شمارش است، زیرا ترتیب خاصی در لیست ندارند. یک namedNodeMap یک متد item() برای این منظور دارد و همچنین می‌توانید موارد را از یک namedNodeMap اضافه و حذف کنید.

برخی از موارد کاربردی:
* `NamedNodeMap.length`
* `NamedNodeMap.getNamedItem()`
* `NamedNodeMap.setNamedItem()`
* `NamedNodeMap.removeNamedItem()`

و غیره.

> باید توجه داشت یک DOM از HTML می تواند با شرایط مختلف ایجاد گردد ولی در آخر یک Node می باشد و قالب دسترسی. در زیر لیست مختصری از APIهای رایج در برنامه نویسی صفحات وب و XML با استفاده از DOM آمده است:

- `document.querySelector(selector)`
- `document.querySelectorAll(name)`
- `document.createElement(name)`
- `parentNode.appendChild(node)`
- `element.innerHTML`
- `element.style.left`
- `element.setAttribute()`
- `element.getAttribute()`
- `element.addEventListener()`
- `window.content`
- `Window.onload`
- `window.scrollTo()`

---

### 10. bind/call/apply

متد `bind()` هنگام فراخوانی یک تابع جدید درست می کند و value که به اون دادیم رو به this می دهد. به کد زیر نگاه کنید در حقیقت ما داریم از تابع pokemonName یک نسخه جدید می سازیم و متغیر pokemon رو به عنوان value به this می دهیم. این خیلی مهم هست که در حقیقت ما یک کپی از تابع pokemonName داریم. درست است در اولین نسخه روی ویژگی های pokemon نبود ولی بعد از باند شدن حال می تواند بهPika , Chu دست رسی داشته باشد.      
```js
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function() {
    console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!'
```

اطلاعات بیشتر: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind


متد call() یک تابع با مقدار «this» داده شده و آرگومان های ارائه شده به صورت جداگانه فراخوانی می کند. معنی آن این است که ما می‌توانیم هر تابعی را فراخوانی کنیم و به صراحت مشخص کنیم که در تابع فراخوانی به چه چیزی ارجاع شود. ممکن است در نگاه اول شبی به bind باشد ولی فرق آن ها چیست

- پارامترهای اضافی را نیز می پذیرد
- تابعی را که فراخوانی شده بود بلافاصله اجرا می کند.
- متد call() از تابعی که فراخوانی می شود کپی نمی کند.


> متد `call()` و `apply()` دقیقاً به همین منظور عمل می‌کنند. تنها تفاوت بین نحوه کار آنها این است که `call()` انتظار دارد که همه پارامترها به صورت جداگانه ارسال شوند، در حالی که `apply()` انتظار دارد آرایه ای از تمام پارامترهای ما وجود داشته باشد. مثال:



```js
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms
```

---

### 11. Promise

شی Promise نشان دهنده تکمیل (یا شکست) نهایی یک عملیات ناهمزمان و مقدار حاصل از آن است. توضیح کامل تر این است که Promise یک پروکسی برای مقداری است که هنگام ایجاد Promise لزوماً شناخته نشده است. به شما این امکان را می‌دهد تا کنترل‌کننده‌ها را با ارزش موفقیت نهایی یا دلیل شکست یک اقدام ناهمزمان مرتبط کنید. این به روش‌های ناهمزمان اجازه می‌دهد مانند روش‌های همزمان مقادیری را برگردانند: به جای اینکه بلافاصله مقدار نهایی را برگرداند، روش ناهمزمان یک Promise برای ارائه مقدار در نقطه‌ای در آینده برمی‌گرداند.

#### حالت های پرامیس به شرح زیر می باشد:

- در انتظار: حالت اولیه، نه انجام شده و نه رد شده است.
- تکمیل شده: به این معنی که عملیات با موفقیت انجام شد.
- رد شد: یعنی عملیات شکست خورد.
![promises](https://user-images.githubusercontent.com/8413604/195540117-01ecc60c-8100-46cb-a444-545086403e61.png)

به کد زیر توجه کنید:
```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    })
  );
});
```
این promise قبلاً در زمانی که ایجاد می شود حل شده است (زیرا resolveOuter به صورت همزمان فراخوانی می شود)، اما با یک promise دیگر حل می شود و بنابراین تا 1 ثانیه بعد، زمانی که promise درونی محقق شود، محقق نمی شود. در عمل «resolution» اغلب در پشت صحنه انجام می شود و قابل مشاهده نیست و تنها تحقق یا رد آن است.

پرامیس متد های خوبی دارد یکی از مواردی که ممکن است به کار شما بیاید متد `Promise.all(iterable)` می باشد که منتظر می شود تا تمام پرامیس هایی که در یک لیست به آن دادید انجام شوند

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
```

لیست متد های استاتیک را می توانید در زیر ببنید
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#static_methods


---

### 12. WebAPI

وب API در جاوا اسکریپت استفاده می شوند که یک سری اینترفیس و امکانات بر اساس نیاز است. ولی این دلیل نمی شود که فقط در js استفاده می شوند. این موارد در خود browser درست شده است مثلا نمایش لوکیشن کاربر یا نمایش دوربین که می تواند بر اساس خود مروگر و سیستم عامل نیز دستوراتش و دسترسی هایش متفاوت باشد

---

### 13. Task queue

#### استفاده از «microtask» در جاوا اسکریپت با «queueMicrotask()».


توضیح:  microtask  یک short function است که پس از خروج تابع یا برنامه ای که آن را ایجاد کرده است اجرا می شود و تنها در صورتی که  JavaScript execution stack  خالی باشد، اما قبل از بازگرداندن کنترل به حلقه رویداد که توسط  user agent  برای محیط اجرای اسکریپت اجرا می شود.

یا این حلقه رویداد اصلی مرورگر باشد یا حلقه رویداد که یک web worker را هدایت می‌کند. این اجازه می دهد تا تابع داده شده بدون خطر تداخل در اجرای اسکریپت دیگر اجرا شود، اما همچنین تضمین می کند که microtask قبل از اینکه  user agent فرصت واکنش به اقدامات انجام شده توسط microtask را داشته باشد، اجرا شود.

دو مورد MutationObserver و promises هر دو microtask queue برای اجرای کال بک های خودشان هستند.

هر یک  task از کد جاوا اسکریپتی که توسط مکانیسم‌های استاندارد اجرا شود، مانند شروع اولیه اجرای یک برنامه، اجرای یک تماس مجدد رویداد، یا یک interval یا  timeout. همه اینها در task queue قرار می گیرند.


یک برنامه یا زیربرنامه جدید جاوا اسکریپت (مانند از یک کنسول یا با اجرای کد در عنصر `<script>`) مستقیماً اجرا می شود.  
یک رویداد فعال می شود و تابع callback رویداد را به task queue اضافه می کند.

یک بازه زمانی یا بازه زمانی ایجاد شده با setTimeout() یا setInterval() می رسد که باعث می شود پاسخ تماس مربوطه به task queue اضافه شود.


در ظاهر هر دو شبی به هم هستند ولی دوتا تفاوت کلیدی دارند:


در زمان چک کردن جاوااسکریپت چک می کند آیا Task ای وجود دارد یا خیر این مسئولیت با event loop می باشد. اگر وجود نداشته باشد تمامی microtasks را اجرا می کند. میکروتسک های همان then هستند. چندین بار در هر تکرار event loop، از جمله پس از رسیدگی به رویدادها و سایر تماس‌ها، پردازش می‌شود.
  
  
اگر به واسطه `queueMicrotask()` بیاییم میکروتسک های بیشتری به صف اجاد کنیم event loop آن هارا در Task بعدی اجرا می کند. بخاطر اینکه event loop فراخوانی میکرو تسک ها را تا زمانی انجام می دهد تا چیزی در استک باقی نماند حتی اگر تعداد بیشتری اضافه شود
  
 
> دلیل اصلی استفاده از "Microtasks" این است که: برای اطمینان از ترتیب منظم وظایف، حتی زمانی که نتایج یا داده ها به طور همزمان در دسترس هستند، اما همزمان خطر تاخیرهای قابل تشخیص توسط کاربر را در عملیات کاهش می دهند.

  
```js
const tom = () => console.log('Tom');

const jerry = () => console.log('Jerry');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 5000);

  new Promise((resolve, reject) =>
    resolve('should it be right after Tom, before Jerry?')
  ).then(resolve => console.log(resolve))

  jerry();
}

cartoon();
// Cartoon
// Jerry
// should it be right after Tom, before Jerry?
// Tom
```
  
#### اطلاعات بیشتر:

- https://blog.greenroots.info/task-queue-and-job-queue-deep-dive-into-javascript-event-loop-model
- https://developer.mozilla.org/en-US/docs/Web/API/Window
- https://developer.mozilla.org/en-US/docs/Web/API/Worker
- https://developer.mozilla.org/en-US/docs/Glossary/User_agent

---
### 14. Web Workers API

این API کمک می کند تا شما یک اسکریپتی را در بکگراند thread اجرا کنید. این عمل کمک می کند تا شما یک کار پرهزینه یا طولانی را در ترد دیگر در بکگراند انجام بدهید و عملیات نمایش UI را مثلا مسدود نکنید.

اطلاعات بیشتر
https://developer.mozilla.org/en-US/docs/Web/API/Worker

https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API

برخی از متداول ترین توابعی که از این پروسه استفاده می کنند مثل Promis و fetch  هست

---
  
### 15. Call stack

مورد call stack مکانیزمی هست برای مفسر مثل مفسر جاوااسکریپت در مروگر که بداند هر تابع کجاست و کی قرار هست اجرا شود و توابع داخل آن نیز در چه زمانی صدا زده می شوند

- هنگامی که اسکریپتی یک تابع را فراخوانی می کند، مفسر آن را به Call stack اضافه می کند و سپس اجرای تابع را آغاز می کند.

- هر تابعی که توسط آن تابع فراخوانی شود به Call stack بالاتر اضافه می‌شود و در جایی اجرا می‌شود که به تماس‌های آن‌ها می‌رسد.

- هنگامی که تابع فعلی به پایان رسید، مفسر آن را از پشته خارج می کند و اجرا را از همان جایی که در آخرین لیست کد متوقف شده بود، از سر می گیرد.

- اگر پشته فضای بیشتری را نسبت به آنچه اختصاص داده شده اشغال کند، خطای "سرریز پشته" ایجاد می شود.

به کد زیر توجه کنید
```js
function greeting() {
  sayHi();
}
function sayHi() {
  return "Hi!";
}
greeting();
```

- تمام تابع اسکیپ می شود تا به `greeting()` برسد.
- تابع مذکور به call stack  اضافه می شود
- تمام کد های تابع greeting اجرا می شوند
- به فراخوانی تابع sayHi نی رسد
- تابع sayHi به call stack اضافه می کند
- تمام خط های تابع sayHi اجرا می شود مثل بالا تا به انتها برسد
- به نقطه ای sayhi رسیده است برگدانده می شود و ما بقی تابع greeting را انجام می دهد
- تابع sayHi از استک خالی می شود
- وقتی همه چیز داخل تابع greeting() اجرا شد، به خط فراخوانی آن برمی گردد تا بقیه کد JS را اجرا کند.
- تابع greeting() را از استک حذف می کند 
---

### 16. Async/await

تابع async تابعی است که با کلمه کلیدی async اعلام شده است و کلمه کلیدی await در آن مجاز است. کلمات کلیدی async و await این امکان را فراهم می کند که رفتار ناهمزمان و مبتنی بر Promis  به سبک تمیزتر نوشته شود و از نیاز به پیکربندی صریح زنجیره های وعده اجتناب شود.

---
### 17. Generators
این ویژگی از ES6 به جاوااسکریپت اضافه شده است. در حقیقت تابعی هست وقتی اجرا شود می توان آن را در نقطه ای متوقف و در نقطعه دیگر آن را اجرا کنیم بر خلاف توابع عادی که وقتی اجرا شود تا آخرش بدون کنرتل ما باید اجرا شود. نوع نوشتن اون ساده هست با یک ستاره اضافه بعد از حرف تابع می آید و در آن نیز yield استپ بندی می شود این توابع به صورت ذاتی Iterable هست یعنی می توان در foor loop بردتش. توجه کنید ما بعد از تابع next اومدیم value رو صدا زدیم هر کدوم یک آبجکت هستند که در داخلشون value و done دارند که ولیو هرچی شما بدهید هست و done حتما یک بولین می باشد که می گوید تمام شده کار یا نه بعد از این حلقه ای داریم یا خیر

```js
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20

console.log(gen.next().value);
// expected output: undefined
```

حال فرض بر اینکه بیاییم در آن return استفاده کنیم
```js
function* numbers() {
  yield 1;
  
  return 2;
  
  yield 3;
}

const items = numbers();
```

اولین بار که آن را صدا می زنیم خروجی `{ value: 1, done: false }` می آید یعنی استپ اول یک و هنوز حلقه تمام نشده است ولی وقتی بار دوم آن را صدا بزنیم `{ value: 2, done: true }` می آید یعنی حلقه تمام و ولیو نیز 2 ولی وقتی یک بار دیگه next بزنیم `{ value: undefined, done: true }` همانطور که می بنید yield های بعدی اسکیپ می شوند اگر ریترن قبلش بیاید 


خروجی کد زیر رو ببنید
```js
function* numbers() {
  yield 1;
  yield 2;
  yield 3;

  return 4;
}

const items = numbers();

for (num of items) {
  console.log(num)
}
// 1
// 2
// 3
```
 مقدار 4 که توسط return برگردونده شده، توی خروجی دیده نمیشه. چون حلقه for..of آیتمی که مقدار done اون برابر با true باشه رو نادیده می‌گیره.
 > جالبه که بدونیم توابع async پشت پرده از توابع Generator استفاده می‌کنن


---


### 𝗕𝗮𝘀𝗶𝗰 𝗪𝗲𝗯 𝗖𝗼𝗻𝗰𝗲𝗽𝘁𝘀:
### 1. Page rendering cycle

بیشتر مسئولیت این بخش امروزه با مروگر ها و موتور های انها می باشد در بالاتر توضیح دادیم که چطور call stack می آید کد های js را تفسیر می کند و آن ها را انجام می دهد قبل از هرچیزی باید با یک سری موارد اولیه آشنا بشویم

- DOM: Document Object Model
- CSSOM: CSS Object Model 
- Render Tree
درخت رندر مجموعه ای از Objects است که باید توسط مرورگر رندر شوند تا اطلاعات را به روشی آسان ارائه کند. درخت رندر از چندین عنصر کوچکتر تشکیل شده است که باید رندر شوند. موتورهای مرورگرهای مختلف میتوانند به این عناصر به طور متفاوتی اشاره کنند: برای مثال، WebKit آنها را یک رندر یا یک شی رندر مینامد در حالی که Gecko به آنها به عنوان یک Frame اشاره میکند.
ساختار یک درخت رندر با ساختار DOM سازگار است: هر رشته متن با یک عنصر جداگانه نشان داده می شود که شی DOM مربوطه و style محاسبه شده خود را دارد. تنها عناصری که در درخت رندر گنجانده نشدهاند، عناصری هستند که برای نامرئی بودن تنظیم شدهاند، مانند تگها یا عناصر دارایdisplaynone

هر بار که کاربر یک صفحه را لود می کند چه اتفاقی می افتد:

- ابتدا HTML از سرور دریافت می شود و در DOM پردازش می شود.
- استایل ها در CSSOM بارگیری و تجزیه می شوند.
- درخت رندر با استفاده از DOM و CSSOM ایجاد می شود.
- مرورگر یک طرح برای هر عنصر درخت رندر با مختصات مجزای آن با استفاده از روش flow ایجاد می کند
- اطلاعات در پنجره مرورگر به شکل نهایی خود از طریق آخرین مرحله فرآیند که به آن painting نیز میگویند نمایش داده میشود.


اگر این تغییرات کم باشند فقط بخشی تغییر کند و پوزیشن های عناصر کامل جابه جا نشوند به آن Repaint و در صورت تغییر کامل و DOM شدن اون ها به آن Reflow می گویند

---
### 2. http/https/https2
خلاصه توضیح HTTP پروتکلی شبکه‌ای است که کاربرد آن ارسال ریکوئست و دریافت ریسپانس در شبکهٔ جهانی وب است که بیش از دو دهه هست که در حال استفاده می باشد و نسخه https این ارسال داده را امن می کند و همینطور رمزنگاری بر اساس یک سرتیفیکیتی که برای دامنه یا ساب دامین های مورد نظر صاحب وب سایت صادر می شود.  اهداف اصلی پیاده‌سازی HTTP/2 کاهش دادن زمان لود صفحات وب است و دلیل آن نیز این بود که در موقع ساخت اولین نسخه حجم صفحات حدود ۱۰۰ کیلوبایت و ... بودند و جاوااسکریپت انقدر استفاده کننده نداشت

برخی از تغییرات نسخه دوم:

 نسخهٔ HTTP/2 حاوی داده‌های باینری (دودویی) است
 هِدِرهای HTTP/2 فشرده‌ شده هستند
 هِدِرهای HTTP/2 فشرده‌ شده هستند
 نسخهٔ HTTP/2 مولتی‌پلکس است
 نسخهٔ HTTP/2 امکان استفاده از Server Push را فراهم می‌سازد
 
 ---
### 3. Micro Frontend

تعریف micro frontends: ایده micro frontends این است که مفاهیم میکروسرویس‌ها را به دنیای frontend گسترش دهد. ایده اصلی micro frontends این است که frontend خود را به مجموعه‌ای از اپلیکیشن‌های frontend که به طور مستقل و با loosely coupled (حداقل وابستگی) قابل‌اجرا هستند، تقسیم می‌کند (micro frontends  نامیده می‌شوند). سپس این micro frontendها برای ایجاد یک اپلیکیشن frontend واحد، با هم ادغام شده و باندل می‌شوند (شکل 2 را ببینید). این مجموعه micro frontends در پاراگراف Integration Approaches Micro Front Ends موردبحث قرار می‌گیرد. شما می‌توانید یک micro frontend در هر پیج نشان دهید و آن را با هایپر لینک‌ها کانکت کنید. 


---

### 4. CORS

اجازه نداریم به یک Origin (مثلا http://google.com یا http://localhost:3000) غیر از مال خودمون ریکوئست بفرستیم. مگر اینکه سرور به ما اجازه داده باشه. در واقع میتونیم ریکوئست بفرستیم ولی به response دسترسی نداریم. cors مخفف Cross-Origin Resource Sharing هست

---

### 5. Local storage/Session storage

هر دو مورد بالا وب API هستند برای ذخیره سازی داده های موفقت. راحتی کار نسبت به کوکی و ... دارند ولی یک سری تفاوت ها نیز دارند از جمله اینکه Local استورج منقضی نمی شود ولی در Session داده ها یک تایم به خصوصی دارند. سشن استورج در موارد زیر پاک می شود

- تب مرورگر بسته بشه.
- صفحه مرورگر بسته بشه.
- باز کردن یک tab جدید باعث ایجاد یک جلسه sessionStorage دیگر می شود حتی اگر tab از همان منشا باشد.

> بنابراین به راحتی می توان گفت که localStorage بین برگه هایی با همان منبع به اشتراک گذاشته می شود در حالی که sessionStorage به اشتراک گذاشته نمی شود. محدودیت ذخیره سازی بزرگتر از یک کوکی (حداکثر 5 مگابایت) هستش.

#### تفاوت های localStorage و sessionStorage

* در localStorage بین tab های مرورگر به اشتراک گذاشته میشه ولی sessionStorage نه!
* توی باز و بسته کردن مرورگر اطلاعات در localStorage می ماند ولی در sessionStorage نه!
* داده های توی localStorage هرگز منقضی نمی شن در صورتی که sessionStorage با پایان یافتن session صفحه خاتمه پیدا میکنه.

---
5. Cookie
6. JWT
7. XHR

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
