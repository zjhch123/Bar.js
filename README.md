# Bar.js
原生JS实现的滚动条，支持各种回调，支持移动端、PC端，支持自定义样式，etc.

## 1. 使用方式

### 1. 在任何地方引入`Bar.js `
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <script src="Bar.js"></script>
</head>
<body>

</body>
</html>
```
### 2. 新建一个`div`，并设置相应的`CSS`样式
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <script src="Bar.js"></script>
  <style>
  #bar {
    height: 20px;
    width: 300px;
  }
  </style>
</head>
<body>
  <div id="bar">
  </div>
</body>
</html>
```
### 3. 使用`Javascript`来创建我们的`Bar`!
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <script src="Bar.js"></script>
  <style>
  #bar {
    height: 20px;
    width: 300px;
  }
  </style>
</head>
<body>
  <div id="bar">
  </div>
</body>
<script>

var config = {
    target: "#bar",
    lineHeight: "20px",
    lineColor: "gray",
    lineRadius: "20px",
    ballHeight: "20px",
    ballWidth: "20px",
    ballRadius: "50%",
    ballColor: "red",
    tailColor: "blue",
    rotate: "false",
    control: "true", 
    point: "show", 
    pointHeight: "6px",
    beforeChange: function(data) {
        console.log("before change");
    },
    changing: function(data) {
        console.log(data)
    },
    afterChange: function(data) {
        console.log("after change");
    }
}
var bar = Bar().init(config, function(ele) {
  console.log(ele.getData());
});
bar.setData(15);

</script>
</html>
```

### 4. 预览
![pic](https://zjhch123.github.io/Bar.js/1488468427582.png)

## 2. 配置项解读
```
target: "#bar", // 表示要加载Bar的dom元素的id或者class。代码会用document.querySelector()来找到对应的dom元素
lineHeight: "20px", // 表示加载出的Bar的横线的高度
lineColor: "gray",  // 表示加载出的Bar的横线的颜色，可填入rgb或者颜色的英文
lineRadius: "20px", // 表示加载出的Bar的横线的border-radius
ballHeight: "20px", // 表示可拖动元素的高度
ballWidth: "20px",  // 表示可拖动元素的宽度
ballRadius: "50%",  // 表示可拖动元素的border-radius
ballColor: "red" ,  // 表示可拖动元素的背景颜色，可填入rgb或者颜色的英文
tailColor: "blue",  // 表示拖动区域的背景颜色，可填入rgb或者颜色的英文
rotate: "false",    // 表示是否需要90度旋转。可填入"true"或"false"，默认为"false"
control: "true",    // 表示用户是否可以自由拖动Bar，可填入"true"或"false"，默认为"true"
point: "show",      // 表示是否显示可拖动元素上的小白点。可填入"show"或"hidden"，默认为"hidden"
pointHeight: "6px", // 表示可拖动元素上的小白点的高度。小白点为圆形，所以不提供设置宽度的配置
beforeChange: function(data) {}, // 用户在拖动Bar之前会调用的函数。参数为当前Bar的百分比数值
changing: function(data) {}, // 用户在拖动Bar时会调用的函数。参数为拖动时的Bar的百分比数值
afterChange: function(data) {} // 用户在拖动Bar之后会调用的函数。参数为拖动结束时Bar的百分比数值
```

## 3. 创建Bar的说明
在`Bar.js`内，有这样一段代码

![](https://image.hduzplus.xyz/image/1488466908098.png)

使用者可以自定义是否要对某些浏览器提供支持。

创建Bar：
```javascript
var bar = Bar().init(config) // config为配置属性, 可参考上面的2

/* 
 * bar是一个对象，具有两个方法
 * bar.setData(number);
 * bar.getData(); //ret data
 * setData(number)可将传入的数字以百分比的形式赋值给Bar，并调整Bar当前的滚动位置，之后会调用afterChange()方法
 * getData() 会将Bar当前的滚动位置的百分比返回给使用者
 */
 bar.setData(70);
 bar.getData(); // ret 70
```

创建Bar时也提供了回调函数
```javascript
var bar = Bar().init(config, function(ele) {
	/*
	 * ele拥有和bar一样的方法。
	 */
	 ele.setData(15);
	 ele.getData(); // ret 15
})
```

查看更多样例，可访问[demo](http://139.129.132.196/Bar/)。
如果想尝试移动端，可以扫描下方二维码进行访问

![QCode](https://image.hduzplus.xyz/image/1488468120011.png)
