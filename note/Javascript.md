[TOC]

### 編輯器選擇
目前比較常見的編輯器有：[Visual Studio Code](https://code.visualstudio.com/)、[Sublime Text](https://www.sublimetext.com/)、[Atom](https://atom.io/)
編輯器建議選擇要件：
    1. 自動補齊功能
    2. 下拉提示

## document的意思？
Javascript裡的開頭，往往是從document開始，意思是『選取網頁上的元素』
. （點）：我要使用javascript的功能、方法
getElementById：選取html裡的元素ID名稱

---
## JS是弱型別語言
變數本身並不帶有資料型別，值才有資料型別。
JS的型別分為基本型別(Primitives) 和物件型別(Object)
基本型別又分有字串(string)、數字(number)、布林(boolean)、空值(null)、未定義(undefined)，ES6又新增了symbol型別。
除了以上幾種，其餘皆為物件型別(例如:function、arrary、Object)。
判斷型別可以使用 typeof 辨別。
```javascript
typeof true;   //boolean
typeof 'test'; //string
typeof [ ];    //Object
typeof { };    //Object
```



---
## 宣告
沒有透過var宣告的變數，會是全域變數。


### 字串 string
- 用單引號或雙引號包住，視為字串
- 如果字串內容含有 單引號或雙引號，可以連接 跳脫字元\，後面不可以接空白。
```javascript
var str = 'let\'s go!';  
```

### 數字 number

### NaN
not a number 

浮點數相加
Javascript 和其他程式語言一樣的問題是：
number 是依照『IEEE 754』二進位浮點數算術標準，
但是十進位的小數很難使用二進位的方法表示，
例如：0.1以二進位的方法表示會是0.00011001100110011...無限循環，
如果要求數字精確，最好將小數點在運算前，轉成整數，計算後再調整回來。
缺點是：數字過大，容易爆掉。
>『0陷阱！0誤解！8天重新認識Javascript』p.17

可以考慮安裝 number-precision 來使用，可以直接使用十進位計算浮點值
https://github.com/nefe/number-precision

布林值 boolean
布林值只有兩種：true、false
通常用來控制程式流程用途

null、undefined
null、undefined 的差異
var a; //尚未給值，undefined
var b = undefined; //明確代表此變數沒有值，null



這兩種值，透過 boolean 轉換，都代表 false 的意思。
透過number轉換 

number(null); //0
number(undefined); //NaN

在非全域作用範圍下，undefined可當變數、參數使用。



物件 object
一個物件是零至多種多種屬性的集合，屬性是鍵(key)與值(value)，值也能是：某個基本型別、物件、函數。

建立新物件
早期創建物件習慣用`new`來新增物件，如下
var person = new Object();
person.name = 'Clare';
person.sayName = function(){
    alert(this.name);
}

後來直接用『大括號』新增物件
這種建立物件，順便塞值的方法叫做：物件實字，同時也是JASON的核心語法。

var person =  {
    name : 'Clare',
    sayName = function(){
        alert(this.name);
    }
}





存取物件
1. 物件屬性存取，用點點。
鍵值為不合法字元時，會出錯，範例如下：
var person =  {
    name : 'Clare',
    sayName = function(){
        alert(this.name);
    },
    001 : "hello"
}
person.name;
person.sayName();
person.001; //出錯


2. 也可以用中括號，但是：當鍵值為不合法識別字，還是可以正常顯示。
var person =  {
    name : 'Clare',
    sayName = function(){
        alert(this.name);
    },
    001 : "hello"
}
person["name"];
person["sayName"]();
person["001"]; //正常顯示


屬性新增
直接用『=』等號指定新值即可。
var obj = {};
obj.name = 'Object';
obj.name; 


刪除物件
刪除用delete
var obj = {};
obj.name = 'Object';
delete  obj.name;


判斷屬性
- 存取物件中不存在的屬性時，會回傳undefined
- 想要判斷屬性是否存在
    1. 最簡單的方式是：檢查該屬性是不是undefined，但是這樣有個例外是，當屬性剛好是undefined，就沒有用了。
    2. 用in運算式 或 hasOwnProperty()方法。
    3. in運算式 與 hasOwnProperty()方法 的不同是：in運算式會順著物件原型鍊上檢查。
```javascript
//檢查undefined
var obj = {};
console.log(obj.name); //undefined
```
```javascript
//第二種方法
var obj = {
    name: 'Object'
};

//透過 in 檢查屬性
console.log('name' in obj); //true
console.log('value' in obj); //false

//透過 hasOwnProperty 方法檢查
obj.hasOwnProperty('name'); //true
obj.hasOwnProperty('name'); //false
```

陣列 Array
同樣是零到多個元素的集合，且並無規定只能放置哪些屬性值進去，可以是資料類型、陣列、物件、函式。
陣列是有順序的集合，所以只能用透過`[]`加上索引來存取。

建立新陣列
一樣可以使用new關鍵字來新增
var a = new Array();
a[0] = 'apple';

但是更常見到是陣列實字(Array literal)
var a = [];
a[0] = "apple";
a[1] = "boy";
a[2] = "cat";

//或是
var a = ["apple","boy","cat"];
a.length; //3，長度


透過length屬性，陣列是會被複寫的 
var a = ["apple","boy","cat"];
a.length; //3
a.length = 1;
console.log(a);// ["apple"]

a.length = 3;
console.log(a);// ["apple", undefined, undefined]


新增陣列值
1. 可以使用索引指定值
2. 使用push()方法
3. pop();
4. shift();
5. unshift();

var array = ["a","b","c"];
array.length; //3

//使用索引指定值
array[7] = "z";

console.log(array);// ["a","b","c", undefined, undefined, undefined, undefined, "z"]

//使用push會將值，添加在尾端
array.push("d");
console.log(array); // ["a","b","c", undefined, undefined, undefined, undefined, "z", "d"]




型別判斷 typeof
typeof 使用方法
typeof回傳的值都是字串
typeof true; // "boolean"
typeof NaN;  // "number"
typeof {};   // "object"
typeof [];   // "object"
typeof window.alert;   // "function"
typeof null;           // "object"

為什麼 typeof null 是 "object"，是BUG，不改回來是因為會影響太多舊程式碼。

判斷陣列 isArrary
從上方例子可以看到，typeof判斷陣列，會產生"object"結果。從ES5就新增了`isArray()`方法來幫助我們判斷。

Arrary.isArrary([]);        //true

Arrary.isArrary();          //false
Arrary.isArrary({});        //false
Arrary.isArrary(null);      //false
Arrary.isArrary(undefined); //false




運算式(expression)與運算子(operator)
運算式
JS語法分為：敘述句(statement)、運算式(expression)
敘述句：簡單來說就是執行某個動作，例如變數宣告、賦值、迴圈、if判斷..等等
運算式：最大的特性是會產生值，例如呼叫function時的參數，或是透過『=』賦值時，在右方的運算式部分。
運算子
算術運算子


函式本身就是個物件

if...else...

## 迴圈
- 迴圈主要有for迴圈和switch迴圈
for迴圈推薦： 次數明顯。
switch迴圈推薦： 次數不確定的時候。

### for迴圈
當需要略過迴圈或是停止迴圈，
可以使用 `continue` 和 `break`。
兩者的差別是：
- `continue` 會略過此次迴圈，繼續下一個迴圈。
- `break` 會直接停止並跳出迴圈。
```javascript
for(var i = 0; i <= 10; i++){
    if( i%3 == 0){
        continue;
    }
    console.log(i);
}
```

```javascript
//lottery game 1~49個號碼，挑六個不重複的數字
var lottery = [];
var n;

//while版本
while(lottery.length < 6){
    n = Math.floor(Math.random()*49) + 1;
    if(lottery.indexOf(n) === -1){
        lottery.push(n);
    }
}
console.log(lottery);

//for版本
for(var i=0; lottery.length < 6; i++){
  n = Math.floor(Math.random()*49) + 1;
  if(lottery.indexOf(n) === -1){
    lottery.push(n);
   }
}
console.log(lottery);
```



### switch迴圈

- 瀏覽器的全域物件是`window`









# 學習資源
Udemy JavaScript 入門篇(https://greenmall.info/2gM1X?uid1=doublecxdes&uid2=blog&uid3=es6&uid4=top)

google play書
https://play.google.com/books/reader?id=0oDRDwAAQBAJ&pg=GBS.SA1-PA30

