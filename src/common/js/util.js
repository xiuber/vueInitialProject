/**
 * Created by liuxiaoya on 2017/11/15 0015.
 */
//格式化日期
export function formatDate(d) {
  var now = new Date(d * 1000);
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var hour = addZero(now.getHours());
  var minute = addZero(now.getMinutes());
  var second = addZero(now.getSeconds());
  return year + "-" + month + "-" + date + "   " + hour + ":" + minute + ":" + second;
}

//日期个位数加0
export function addZero(d) {
  return d > 9 ? d : "0" + d;
}

//本地存储
export const local = {
  save(key, val){
    localStorage.setItem(key, JSON.stringify(val));
  },
  remove(key){
    localStorage.removeItem(key)
  },
  clear(){
    localStorage.clear();
  },
  get(key){
    return JSON.parse(localStorage.getItem(key)) || '';
  }
};
//返回uuid
export function getUid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};
export function removeHTMLTag(str) {
  str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
  str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
  str = str.replace(/\n[\s| | ]*\r/g, '\n'); //去除多余空行
  str = str.replace(/ /ig, '');//去掉
  str = str.replace(/[ ]|[&nbsp;]/g, '');
  ;//去掉&nbsp;
  return str;
}
export function replaceHTMLTag(str) {
  let s = str.replace(/&lt;/g, '<'); //去除HTML tag
  s = s.replace(/&gt;/g, '>');
  s = s.replace(/<p>/g, '');
  s = s.replace(/<\/p>/g, '');
  s = s.replace(/<br>/g, '');
  s = s.replace(/style/g, 'style="width:100%;height:auto"');
  return s;
}
export const regPhone = {
  phone(str){//手机号位数简单验证
    var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    if (!myreg.test(str)) {
      return false;
    } else {
      return true;
    }
  },
  replaceTrim(str) {//去空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
  }
};
export const regEmail = {
  email(str){
    var reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
    if(!reg.test(str)){
      return false;
    }else{
      return true;
    }
  }
};

export function goTop() {//回到顶部
  var scrollToptimer = setInterval(function () {
    var top = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    var speed = top / 4;
    if (document.body.scrollTop != 0) {
      document.body.scrollTop -= speed;
    } else {
      document.documentElement.scrollTop -= speed;
    }
    if (top == 0) {
      clearInterval(scrollToptimer);
    }
  }, 30);
};

export function downApp(){//下载app
  var browser = {
    versions: function() {
      var u = navigator.userAgent, app = navigator.appVersion;
      return {//移动终端浏览器版本信息
        mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
      };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  };
  if (browser.versions.ios || browser.versions.iPhone) {
    if(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)=="micromessenger") {
      return "http://a.app.qq.com/o/simple.jsp?pkgname=com.qudu.youde";
    }else{
      return "https://itunes.apple.com/cn/app/you-de-yi-yao/id1129707773?mt=8";
    }
  }
  else if (browser.versions.android) {
    return "http://a.app.qq.com/o/simple.jsp?pkgname=com.qudu.youde";
  }

};

export function isCardNo(card){// 身份证号码验证
// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if(reg.test(card) === false){
    return false;
  }else {
    return true;
  }
}

export function testSixNum(txt){//正则表达式验证6位数字密码
  var reg=/^\d{6}$/;
  if(reg.test(txt)){
    return true;
  }else{
    return false;
  }
}
