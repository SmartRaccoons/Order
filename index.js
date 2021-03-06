// Generated by CoffeeScript 1.8.0
(function() {
  var Order;

  Order = (function() {
    function Order() {
      this._buffer = [];
      this._last = 0;
    }

    Order.prototype._execute = function() {
      var diff;
      if (this._buffer.length === 0) {
        return;
      }
      diff = this._last + this._buffer[0].delay - (new Date()).getTime();
      if (diff > 0) {
        return setTimeout((function(_this) {
          return function() {
            return _this._execute();
          };
        })(this), diff);
      }
      this._buffer.shift().fn();
      this._last = (new Date()).getTime();
      return this._execute();
    };

    Order.prototype.next = function(fn, delay) {
      if (delay == null) {
        delay = 0;
      }
      this._buffer.push({
        'fn': fn,
        'delay': delay
      });
      return this._execute();
    };

    return Order;

  })();

  if (typeof define === 'function' && define.amd) {
    define(['exports'], function(exports) {
      return exports = Order;
    });
  } else if (typeof module !== 'undefined') {
    module.exports = Order;
  } else {
    window._Order = Order;
  }

}).call(this);

//# sourceMappingURL=index.js.map
