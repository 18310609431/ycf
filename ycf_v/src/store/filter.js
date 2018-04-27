import Vue from 'vue';
import enums from '../enum.js'
//将时间戳转换成多少时间前（分、小时、天、月）
Vue.filter("toTimes",function(dateTimeStamp){
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - dateTimeStamp;
	if(diffValue < 0){return;}
	var monthC =diffValue/month;
	var weekC =diffValue/(7*day);
	var dayC =diffValue/day;
	var hourC =diffValue/hour;
	var minC =diffValue/minute;
	var result="";
	if(monthC>=1){
		result="" + parseInt(monthC) + "月前";
	}
	else if(weekC>=1){
		result="" + parseInt(weekC) + "周前";
	}
	else if(dayC>=1){
		result=""+ parseInt(dayC) +"天前";
	}
	else if(hourC>=1){
		result=""+ parseInt(hourC) +"小时前";
	}
	else if(minC>=1){
		result=""+ parseInt(minC) +"分钟前";
	}else
	result="刚刚";
	return result;
	//return dateTimeStamp+2
	}
);

//将时间戳转换成时长（11：20：33）
Vue.filter("toTimeLocl",function(t){
	if(t && t > 0){
		var hour=Math.floor(t/60/60%24);
	    var min=Math.floor(t/60%60);
	    var sec=Math.floor(t%60);
	    if (hour < 10) {
	         hour = "0" + hour;
	    }
	    if (min < 10) {
	         min = "0" + min;
	    }
	    if (sec < 10) {
	         sec = "0" + sec;
	    }
	    return t = hour + ":" + min + ":" + sec;
	}else{
		return t = '00'+":"+'00'+":"+'00';
	}

});

//简介为空时 返回暂无数据
Vue.filter("noData",function(data){
	if(data){
		return data;
	}else{
		return '暂无数据';
	}
})

//将时间戳转换成日期
Vue.filter("toRiqi",function(nS) {
	if(nS){
		var time = new Date(nS);
		var m = time.getMonth()+1;
		var d = time.getDate();
		var h = time.getHours();
		if(h < 10){
			h = "0" + h;
		}
		var mm = time.getMinutes();
		if(mm < 10){
			mm = "0" + mm;
		}
		return m+"月"+d+"日"+" "+h+":"+mm;
	}else{
		return '00'+"月"+'00'+'日'+' '+'00'+':'+'00';
	}
})

//字符串拼接 参数 this 插入位置 拼接字符串
Vue.filter("stringJoint",function() {
	if(arguments&&arguments.length>2)
	{
		var array= Array.prototype.slice.call(arguments);
		array.splice(array[1],0,array[0]);
		var temp="";
		for (var i=2; i<array.length; i++) {
		temp = temp +  array[i];
		}
		return temp;
	}
	return "";
})

//个人档案属性如果为空 显示 添加
Vue.filter("personProperty",function(value,value2) {
	if(value||value2)
	{
		var temp="";
		if(value&&value2)
		{
			temp=value+","+value2;
		}
		else if(value)
		{
			temp=value;
		}
		else
		{
			temp=value2;
		}
		if(temp.length>4)
		{
			return temp.substring(0,4)+"...";
		}
		else
		{
			
			return temp;
		}
	}
	else
	{
		return "添加";
	}
})
//字符串超过长度变成省略号显示
Vue.filter("stringLeng",function(value,leng) {
	if(value)
	{
		if(leng&&value.length>parseInt(leng))
		{
			return value.substring(0,parseInt(leng))+"...";
		}
		else
		{
			
			return value;
		}
	}
	else
	{
		return "";
	}
})
//个人档案属性如果为空 单位 岁 不返回 添加
Vue.filter("personAgeNum",function(value,unit) {
	if(value)
	{
		if(value.length>4)
		{
			return value.substring(0,4)+"...";
		}
		else
		{
			
			if(unit)
			{
				return value+unit;
			}
			else
			{
				return value;
			}
		}
	}
	else
	{
		return "";
	}
})
//个人档案属性如果为空 显示 添加 数字单位
Vue.filter("personPropertyNum",function(value,unit) {
	if(value)
	{
		if(value.length>4)
		{
			return value.substring(0,4)+"...";
		}
		else
		{
			
			if(unit)
			{
				return value+unit;
			}
			else
			{
				return value;
			}
		}
	}
	else
	{
		return "添加";
	}
})

//默认商品图片
Vue.filter("goodsDefault",function(imgUrl) {
	if (imgUrl&&imgUrl.lenght>0) {
		return imgUrl;
	}
	else
	{
		return "/static/img/img_medicine_default@2x.png";
	}	
})
//设置名字隐藏
Vue.filter("hideName",function(str){
	if(str.length>=3){
		return str.substr(0,1)+"**"+str.substr(-1)
	}else if(str.length<3){
		return str.substr(0,1)+"*"
	}
    
})

Vue.filter("yinCang",function(str,mun){
	if(str.length>=mun){
		return str.substr(0,mun)+"..."
	}else{
		return str
	}
    
})

Vue.filter("toDate",function(t){
	var hour=Math.floor(t/60/60%24);
    var min=Math.floor(t/60%60);
    var sec=t%60;
    if (hour < 10) {
         hour = "0" + hour;
    }
    if (min < 10) {
         min = "0" + min;
    }
    if (sec < 10) {
         sec = "0" + sec;
    }
    var timeStr = hour + ":" + min + ":" + sec;
    return timeStr;
})
//将时间转换为 时分秒
Vue.filter("toRiqiT",function(nS) {
	if(nS){
		// console.log(222);
		var time = new Date(nS);
		// console.log(time);
		var y = time.getFullYear();
		var m = time.getMonth()+1;
		var d = time.getDate();
		var h = time.getHours();
		return y
	}else{
		return '--';
	}
})
Vue.filter("mont",function(nS) {
	if(nS){
		// console.log(222);
		var time = new Date(nS);
		// console.log(time);
		var y = time.getFullYear();
		var m = time.getMonth()+1;
		var d = time.getDate();
		var h = time.getHours();
		
		return  m + "-" + d
	}else{
		return '--';
	}
})
//类别
Vue.filter("category",function(value){
	if(value == enums.newsType.COMPANY){
		return "公司新闻";
	}
	if(value == enums.newsType.INDUSTRY){
		return "行业动态";
	}
})
//entype
Vue.filter("categoryT",function(value){
	if(value == enums.newsType.COMPANY){
		return "Company";
	}
	if(value == enums.newsType.INDUSTRY){
		return "Industry";
	}
})
//date
Vue.filter("toRiqiS",function(nS) {
	if(nS){
		// console.log(222);
		var time = new Date(nS);
		// console.log(time);
		var y = time.getFullYear();
		var m = time.getMonth()+1;
		var d = time.getDate();
		var h = time.getHours();
		if(h < 10){
			h = "0" + h;
		}
		var mm = time.getMinutes();
		if(mm < 10){
			mm = "0" + mm;
		}
		var ss = time.getSeconds()
		if(ss < 10){
			ss = "0" + ss;
		}
		if(ss == 60){
			ss = "00"
		}
		return y + "-" + m + "-" + d 
	}else{
		return '--';
	}
})



