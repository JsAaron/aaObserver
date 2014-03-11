aaObserver
==========

简单的自定义事件，观察者模式



针对中文,演示Markdown的各种语法
  
大标题
===================================
  大标题一般显示工程名,类似html的\<h1\><br />
  你只要在标题下面跟上=====即可

  
中标题
-----------------------------------
  中标题一般显示重点项,类似html的\<h2\><br />
  你只要在标题下面输入------即可
  
### 小标题
  小标题类似html的\<h3\><br />
  小标题的格式如下 ### 小标题<br />
  注意#和标题字符中间要有空格

### 注意!!!下面所有语法的提示我都先用小标题提醒了!!! 

### 单行文本框
    这是一个单行的文本框,只要两个Tab再输入文字即可
        
### 多行文本框  
    这是一个有多行的文本框
    你可以写入代码等,每行文字只要输入两个Tab再输入文字即可
    这里你可以输入一段代码

### 比如我们可以在多行文本框里输入一段代码,来一个Java版本的HelloWorld吧
var object = {}		

//赋予自动事件的能力
Observer.call(object)		

//订阅
object.subscribe('aaaa',function(){		
	console.log('订阅了aaa')
	return '返回值'
})

object.subscribe('bbbb',function(){		
	console.log('订阅了bbbb')
	return '返回值'
})

//执行,并且得到返回值		
//r得到返回值
var r = object.publish('aaaa');
        object.publish('bbbb');

//移除
object.remove('aaaa');
object.remove('bbbb');
 


