aaObserver
==========

简单的自定义事件，观察者模式


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
