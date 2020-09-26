


## 外連CND有三種來源:
1. [Google Ajax API CDN](https://developers.google.com/speed/libraries#jquery)
```JS
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
```
2. [Microsoft CDN](https://docs.microsoft.com/zh-tw/aspnet/ajax/cdn/overview)
```JS
<script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.0.min.js"></script>
```
3. [jQuery CDN](https://code.jquery.com/)
```JS
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
```




## 等HTML元素載完才執行語法
```JS
// 寫法一
$(document).ready(function(){
    ...
});

// 寫法二
$(function(){
    ...
});
```



## jQuery選擇器
### 基本篩選器
|種類|篩選目標|
|---|--------|
|選擇器:firs|最初的元素|
|選擇器:last|最後的元素|
|選擇器:not(選擇器2)|選擇器2以外的元素|
|選擇器:even|偶數編號的元素(從0算起)|
|選擇器:odd|奇數編號的元素(從0算起)|
|選擇器:eq(數值)|數值編號的元素(從0算起)|
|選擇器:gt(數值)|索引值大於數值的元素(從0算起)|
|選擇器:lt(數值)|索引值小於數值的元素(從0算起)|
|選擇器:header|標題元素|


- 選擇器:animated
- 選擇器:lang(語言碼-國碼)
- 選擇器:root
- 選擇器:targets


