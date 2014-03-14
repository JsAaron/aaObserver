
/****************************************************************
* 		 �򵥵��Զ����¼����۲���ģʽ
* 		 @by Aaron
*          	 github:https://github.com/JsAaron/aaObserver
*          	 blog:http://www.cnblogs.com/aaronjs/
 *****************************************************************/
;(function(O) {
	if (typeof module === "object" && typeof require === "function") {
		module.exports.aaObserver = O;
	} else {
		this.aaObserver = O;
	}
})(function() {

	var slice = Array.prototype.slice,
		nativeForEach = Array.prototype.forEach;

	function each(obj, callback, context) {
		if (obj == null) return;
		//���֧�ֱ���forEach����,�����Ǻ���
		if (nativeForEach && obj.forEach === nativeForEach) {
			obj.forEach(callback, context);
		} else if (obj.length === +obj.length) {
			//forѭ������
			for (var i = 0, l = obj.length; i < l; i++) {
				callback.call(context, obj[i], i, obj);
			}
		}
	};

	function bind(event, fn) {
		var events = this.events = this.events || {},
			parts = event.split(/\s+/),
			i = 0,
			num = parts.length,
			part;
		if (events[event] && events[event].length) return this;
		each(parts, function(part, index) {
			events[part] = events[part] || [];
			events[part].push(fn);
		})
		return this;
	}

	function one(event, fn) {
		this.bind(event, function fnc() {
			fn.apply(this, slice.call(arguments));
			this.unbind(event, fnc);
		});
		return this;
	}

	function unbind(event, fn) {
		var events = this.events,
			eventName, i, parts, num;
		if (!events) return;
		parts = event.split(/\s+/);
		each(parts, function(eventName, index) {
			if (eventName in events !== false) {
				events[eventName].splice(events[eventName].indexOf(fn), 1);
				if (!events[eventName].length) { //����û���¼�ֱ��ɾ��������
					delete events[eventName];
				}
			}
		})
		return this;
	}

	function trigger(event) {
		var events = this.events,
			i, args, falg;
		if (!events || event in events === false) return;
		args = slice.call(arguments, 1);
		for (i = events[event].length - 1; i >= 0; i--) {
			falg = events[event][i].apply(this, args);
		}
		return falg; //����������
	}

	return function() {
		this.subscribe = bind;
		this.remove    = unbind;
		this.publish   = trigger;
		this.one = one;
		return this;
	};
}());

