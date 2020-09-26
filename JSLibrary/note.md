
[TOC]

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
