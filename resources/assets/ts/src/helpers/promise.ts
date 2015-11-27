module ytm.helpers {
    'use strict';

    export interface IPromiseHandler {
        onResolved : IOnResolvedCallback;
        onRejected : IOnRejectedCallback;
        resolve : any;
        reject : any;
    }

    export interface IOnRejectedCallback {
        (value : any) : void;
    }
    export interface IOnResolvedCallback {
        (value : any) : void;
    }
    export interface IPromise {
        state : string;
        value : any;
        deferred : any;
        resolve(newValue :any) : void;
        then(resolve : IOnResolvedCallback, reject? : IOnRejectedCallback) : IPromise;
    }

    export class Promise implements IPromise {

        state : string;
        value : any;
        deferred : any;

        constructor(fn) {
            this.state = 'pending';
            this.value = null;
            this.deferred = null;

            // fn(resolve)
            fn(this.resolve.bind(this), this.reject.bind(this));

        }

        resolve ( newValue ) {

            try {

                if(newValue && typeof newValue.then === 'function') {
                    newValue.then(this.resolve, this.reject);
                    return;
                }

                this.value = newValue;
                this.state = 'resolved';

                if(this.deferred) {
                    this.handle(this.deferred);
                }
            } catch ( e ) {

                this.reject( e );

            }

        }

        reject(reason) {

            this.state = 'rejected';
            this.value = reason;

            if(this.deferred) {
                this.handle(this.deferred);
            }
        }

        handle(handler : IPromiseHandler) {

            if(this.state == 'pending') {
                this.deferred = handler;
                return;
            }

            var handlerCallback;

            if(this.state == 'resolved') {
                handlerCallback = handler.onResolved;
            } else {
                handlerCallback = handler.onRejected;
            }

            if( ! handlerCallback) {

                if(this.state == 'resolved') {
                    handler.resolve(this.value);
                } else {
                    handler.reject(this.value);
                }

                return;
            }


            if( ! handler.onResolved ) {
                handler.resolve(this.value);
                return;
            }

            var ret = handlerCallback(this.value);
            handler.resolve(ret);

        }

        then(onResolved:ytm.helpers.IOnResolvedCallback, onRejected : ytm.helpers.IOnRejectedCallback ) : ytm.helpers.IPromise {
            return new Promise((resolve, reject) => {

                onRejected = (typeof onRejected == "undefined" ) ? null : onRejected;

                this.handle({
                    onResolved : onResolved,
                    onRejected : onRejected,
                    resolve : resolve,
                    reject : reject
                });
            });
        }
    }
}