var ytm;
(function (ytm) {
    var helpers;
    (function (helpers) {
        'use strict';
        var Promise = (function () {
            function Promise(fn) {
                this.state = 'pending';
                this.value = null;
                this.deferred = null;
                // fn(resolve)
                fn(this.resolve.bind(this), this.reject.bind(this));
            }
            Promise.prototype.resolve = function (newValue) {
                try {
                    if (newValue && typeof newValue.then === 'function') {
                        newValue.then(this.resolve, this.reject);
                        return;
                    }
                    this.value = newValue;
                    this.state = 'resolved';
                    if (this.deferred) {
                        this.handle(this.deferred);
                    }
                }
                catch (e) {
                    this.reject(e);
                }
            };
            Promise.prototype.reject = function (reason) {
                this.state = 'rejected';
                this.value = reason;
                if (this.deferred) {
                    this.handle(this.deferred);
                }
            };
            Promise.prototype.handle = function (handler) {
                if (this.state == 'pending') {
                    this.deferred = handler;
                    return;
                }
                var handlerCallback;
                if (this.state == 'resolved') {
                    handlerCallback = handler.onResolved;
                }
                else {
                    handlerCallback = handler.onRejected;
                }
                if (!handlerCallback) {
                    if (this.state == 'resolved') {
                        handler.resolve(this.value);
                    }
                    else {
                        handler.reject(this.value);
                    }
                    return;
                }
                if (!handler.onResolved) {
                    handler.resolve(this.value);
                    return;
                }
                var ret = handlerCallback(this.value);
                handler.resolve(ret);
            };
            Promise.prototype.then = function (onResolved, onRejected) {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    onRejected = (typeof onRejected == "undefined") ? null : onRejected;
                    _this.handle({
                        onResolved: onResolved,
                        onRejected: onRejected,
                        resolve: resolve,
                        reject: reject
                    });
                });
            };
            return Promise;
        })();
        helpers.Promise = Promise;
    })(helpers = ytm.helpers || (ytm.helpers = {}));
})(ytm || (ytm = {}));
//# sourceMappingURL=promise.js.map