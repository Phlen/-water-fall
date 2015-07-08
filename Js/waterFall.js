/**
 * Created by Administrator on 14-12-4.
 */


window.onload = function () {

  var data = [
    {
      'src': '1.png',
      'content': "这是简介文字， 文字长度不一样，导致每张卡片搞定不一样附近家分店交罚款多少",
      'foot': "2014.12.03 18:34",
      'comments': '1000',
      'heart': '10'
    },
    {
      'src': '2.png',
      'content': "这是简介文字",
      'foot': "2014.12.03 18:34",
      'comments': '1000',
      'heart': '10'
    }
  ];
  window.onscroll = function () {
    var oparent = document.getElementById('masonry');
    for (i in data) {
      var oPin = document.createElement('div'); //找到每一个pin的创建元素，以便用来插入新元素
      oPin.className = 'pin';  //为新添加进来的pin添加类名；
      oparent.appendChild(oPin); //将新添加进去的元素放到其夫级元素的后面

      var oBox = document.createElement('div');
      oBox.className = 'box';
      oPin.appendChild(oBox);

      var oImg = document.createElement('img');
      oImg.src = './images/' + data[i].src;
      oBox.appendChild(oImg);

      /*var oContent = '<div class="box_content"><p>' + data[i].content +'</p></div> ';*/
      /*oImg.appendChild(oContent);
       var oContent = document.createElement('div');
       oContent.className = "box_content";
       var infoHTML = '<p>' + data[i].content +'</p> ';
       alert(i);alert(data[i].content);
       $('.box_content').html(infoHTML);
       $(oContent).appendTo(oBox);*/
      $('<div class="box_content"><p>' + data[i].content + '</p></div> ').appendTo(oBox);
      $('<div class="box_foot"><span class="fl">' + data[i].foot + '</span><div class="fr"><span><a href="#" class="fa fa-comments-o"></a>' + ' ' + data[i].comments + ' ' + '</span><span><i class="fa fa-heart heart"></i> ' + ' ' + data[i].heart + '</span></div></div> ').appendTo(oBox);
    }
    waterFall('masonry', 'pin');
  }
}

function waterFall(parent, pin) {
  var oParent = document.getElementById(parent);
  var apin = getClassObj(oParent, pin);
  var iPinW = apin[0].offsetWidth;
  var num = Math.floor(document.getElementById(parent).offsetWidth / iPinW);
  oParent.style.cssText.offsetWidth = "width:" + num * iPinW + "px;margin:0 auto;";

  /*var compareArr = [];
   for(var i=0;i<apin;i++){
   compareArr[i] = apin[i].offsetHeight + 75; //顶部以及main的margin-之和为75，高度为每个Pin的高度以及顶部之和
   }
   var minH = Math.min.apply({},compareArr);//Math,min.apply函数获取数组中的最小值，接受两个参数，第一个一般为空对象，第二个为数组
   var minKey = getMinHKey(compareArr,minH);
   apin[num].style.position = "absolute";
   apin[num].style.top = minH + 'px';
   apin[num].style.left = apin[minKey].offsetLeft + 'px';
   compareArr[minKey] += apin[num].offsetHeight;
   //第二幅图

   var minH = Math.min.apply({},compareArr);
   var minKey = getMinHKey(compareArr,minH);
   apin[num+1].style.position = "absolute";
   apin[num+1].style.top = minH + 'px';
   apin[num+1].style.left = apin[minKey].offsetLeft + 'px';

   };*/ //分步添加原理。


  //循环
  var compareArr = [];
  for (var i = 0; i < apin.length; i++) {
    /*alert('i ==>'+ i);
     alert('apin.length ==>' + apin.length);*/
    if (i < num) {
      compareArr[i] = apin[i].offsetHeight; //将每个pin的高度压到compareArr数组里，方便比较
    } else {
      var minH = Math.min.apply({}, compareArr);
      var minKey = getMinHKey(compareArr, minH);
      apin[i].style.position = "absolute";
      apin[i].style.top = minH + 'px';
      apin[i].style.left = apin[minKey].offsetLeft + 'px';
      compareArr[minKey] += apin[i].offsetHeight;
    }
  }
}


/*
 *
 *      获取最小高度的键值，以便后续添加的图片设置left;
 *
 */
function getMinHKey(arr, minH) {
  for (key in arr) {
    if (arr[key] == minH) {
      return key;
    }
  }
}

/*计算滚动条的位置，以及最后一个pin的位置，做比较，滚动到最后一个pin时才加载数据*/

/*function checkSocrollSite(){
 var oParent = document.getElementById('masonry');
 var oPin = getClassObj(oParent,'pin');
 var lastPinH = oPin[oPin.length-1].offsetTop + Math.floor(oPin[oPin.length-1].offsetHeight/2);
 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
 var documentH = document.documentElement.clientTop;
 if(lastPinH < documentH + scrollTop){
 return true;
 }else{
 return false;
 }
 }*/

/*计算滚动条是否到达页面底部，当滚动条到达页面底部时，数据才能加载。*/
/*通过class选择元素，并将其推进栈里*/
function getClassObj(parent, className) {
  var obj = parent.getElementsByTagName("*");
  var result = [];
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].className == className) {
      result.push(obj[i]);
    }
  }
  return result;
}