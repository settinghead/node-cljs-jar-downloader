// Compiled by ClojureScript 1.7.145 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async3630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3630 = (function (fn_handler,f,meta3631){
this.fn_handler = fn_handler;
this.f = f;
this.meta3631 = meta3631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async3630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3632,meta3631__$1){
var self__ = this;
var _3632__$1 = this;
return (new cljs.core.async.t_cljs$core$async3630(self__.fn_handler,self__.f,meta3631__$1));
});

cljs.core.async.t_cljs$core$async3630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3632){
var self__ = this;
var _3632__$1 = this;
return self__.meta3631;
});

cljs.core.async.t_cljs$core$async3630.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async3630.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3630.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async3630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta3631","meta3631",-697042056,null)], null);
});

cljs.core.async.t_cljs$core$async3630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3630";

cljs.core.async.t_cljs$core$async3630.cljs$lang$ctorPrWriter = (function (this__3052__auto__,writer__3053__auto__,opt__3054__auto__){
return cljs.core._write.call(null,writer__3053__auto__,"cljs.core.async/t_cljs$core$async3630");
});

cljs.core.async.__GT_t_cljs$core$async3630 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async3630(fn_handler__$1,f__$1,meta3631){
return (new cljs.core.async.t_cljs$core$async3630(fn_handler__$1,f__$1,meta3631));
});

}

return (new cljs.core.async.t_cljs$core$async3630(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args3635 = [];
var len__3348__auto___3638 = arguments.length;
var i__3349__auto___3639 = (0);
while(true){
if((i__3349__auto___3639 < len__3348__auto___3638)){
args3635.push((arguments[i__3349__auto___3639]));

var G__3640 = (i__3349__auto___3639 + (1));
i__3349__auto___3639 = G__3640;
continue;
} else {
}
break;
}

var G__3637 = args3635.length;
switch (G__3637) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3635.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args3642 = [];
var len__3348__auto___3645 = arguments.length;
var i__3349__auto___3646 = (0);
while(true){
if((i__3349__auto___3646 < len__3348__auto___3645)){
args3642.push((arguments[i__3349__auto___3646]));

var G__3647 = (i__3349__auto___3646 + (1));
i__3349__auto___3646 = G__3647;
continue;
} else {
}
break;
}

var G__3644 = args3642.length;
switch (G__3644) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3642.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_3649 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_3649);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_3649,ret){
return (function (){
return fn1.call(null,val_3649);
});})(val_3649,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args3650 = [];
var len__3348__auto___3653 = arguments.length;
var i__3349__auto___3654 = (0);
while(true){
if((i__3349__auto___3654 < len__3348__auto___3653)){
args3650.push((arguments[i__3349__auto___3654]));

var G__3655 = (i__3349__auto___3654 + (1));
i__3349__auto___3654 = G__3655;
continue;
} else {
}
break;
}

var G__3652 = args3650.length;
switch (G__3652) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3650.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__3257__auto___3657 = n;
var x_3658 = (0);
while(true){
if((x_3658 < n__3257__auto___3657)){
(a[x_3658] = (0));

var G__3659 = (x_3658 + (1));
x_3658 = G__3659;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__3660 = (i + (1));
i = G__3660;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async3664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3664 = (function (alt_flag,flag,meta3665){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta3665 = meta3665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async3664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_3666,meta3665__$1){
var self__ = this;
var _3666__$1 = this;
return (new cljs.core.async.t_cljs$core$async3664(self__.alt_flag,self__.flag,meta3665__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async3664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_3666){
var self__ = this;
var _3666__$1 = this;
return self__.meta3665;
});})(flag))
;

cljs.core.async.t_cljs$core$async3664.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async3664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async3664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3664.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3665","meta3665",-1754294807,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async3664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3664";

cljs.core.async.t_cljs$core$async3664.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__3052__auto__,writer__3053__auto__,opt__3054__auto__){
return cljs.core._write.call(null,writer__3053__auto__,"cljs.core.async/t_cljs$core$async3664");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async3664 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async3664(alt_flag__$1,flag__$1,meta3665){
return (new cljs.core.async.t_cljs$core$async3664(alt_flag__$1,flag__$1,meta3665));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async3664(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async3670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3670 = (function (alt_handler,flag,cb,meta3671){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta3671 = meta3671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async3670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3672,meta3671__$1){
var self__ = this;
var _3672__$1 = this;
return (new cljs.core.async.t_cljs$core$async3670(self__.alt_handler,self__.flag,self__.cb,meta3671__$1));
});

cljs.core.async.t_cljs$core$async3670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3672){
var self__ = this;
var _3672__$1 = this;
return self__.meta3671;
});

cljs.core.async.t_cljs$core$async3670.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async3670.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async3670.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async3670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3671","meta3671",-255114143,null)], null);
});

cljs.core.async.t_cljs$core$async3670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3670";

cljs.core.async.t_cljs$core$async3670.cljs$lang$ctorPrWriter = (function (this__3052__auto__,writer__3053__auto__,opt__3054__auto__){
return cljs.core._write.call(null,writer__3053__auto__,"cljs.core.async/t_cljs$core$async3670");
});

cljs.core.async.__GT_t_cljs$core$async3670 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async3670(alt_handler__$1,flag__$1,cb__$1,meta3671){
return (new cljs.core.async.t_cljs$core$async3670(alt_handler__$1,flag__$1,cb__$1,meta3671));
});

}

return (new cljs.core.async.t_cljs$core$async3670(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3673_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3673_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3674_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3674_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__2830__auto__ = wport;
if(cljs.core.truth_(or__2830__auto__)){
return or__2830__auto__;
} else {
return port;
}
})()], null));
} else {
var G__3675 = (i + (1));
i = G__3675;
continue;
}
} else {
return null;
}
break;
}
})();
var or__2830__auto__ = ret;
if(cljs.core.truth_(or__2830__auto__)){
return or__2830__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__2822__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__2822__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__2822__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__3351__auto__ = [];
var len__3348__auto___3681 = arguments.length;
var i__3349__auto___3682 = (0);
while(true){
if((i__3349__auto___3682 < len__3348__auto___3681)){
args__3351__auto__.push((arguments[i__3349__auto___3682]));

var G__3683 = (i__3349__auto___3682 + (1));
i__3349__auto___3682 = G__3683;
continue;
} else {
}
break;
}

var argseq__3352__auto__ = ((((1) < args__3351__auto__.length))?(new cljs.core.IndexedSeq(args__3351__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__3352__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__3678){
var map__3679 = p__3678;
var map__3679__$1 = ((((!((map__3679 == null)))?((((map__3679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3679):map__3679);
var opts = map__3679__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq3676){
var G__3677 = cljs.core.first.call(null,seq3676);
var seq3676__$1 = cljs.core.next.call(null,seq3676);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__3677,seq3676__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args3684 = [];
var len__3348__auto___3734 = arguments.length;
var i__3349__auto___3735 = (0);
while(true){
if((i__3349__auto___3735 < len__3348__auto___3734)){
args3684.push((arguments[i__3349__auto___3735]));

var G__3736 = (i__3349__auto___3735 + (1));
i__3349__auto___3735 = G__3736;
continue;
} else {
}
break;
}

var G__3686 = args3684.length;
switch (G__3686) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3684.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__1306__auto___3738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto___3738){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto___3738){
return (function (state_3710){
var state_val_3711 = (state_3710[(1)]);
if((state_val_3711 === (7))){
var inst_3706 = (state_3710[(2)]);
var state_3710__$1 = state_3710;
var statearr_3712_3739 = state_3710__$1;
(statearr_3712_3739[(2)] = inst_3706);

(statearr_3712_3739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3711 === (1))){
var state_3710__$1 = state_3710;
var statearr_3713_3740 = state_3710__$1;
(statearr_3713_3740[(2)] = null);

(statearr_3713_3740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3711 === (4))){
var inst_3689 = (state_3710[(7)]);
var inst_3689__$1 = (state_3710[(2)]);
var inst_3690 = (inst_3689__$1 == null);
var state_3710__$1 = (function (){var statearr_3714 = state_3710;
(statearr_3714[(7)] = inst_3689__$1);

return statearr_3714;
})();
if(cljs.core.truth_(inst_3690)){
var statearr_3715_3741 = state_3710__$1;
(statearr_3715_3741[(1)] = (5));

} else {
var statearr_3716_3742 = state_3710__$1;
(statearr_3716_3742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3711 === (13))){
var state_3710__$1 = state_3710;
var statearr_3717_3743 = state_3710__$1;
(statearr_3717_3743[(2)] = null);

(statearr_3717_3743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3711 === (6))){
var inst_3689 = (state_3710[(7)]);
var state_3710__$1 = state_3710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3710__$1,(11),to,inst_3689);
} else {
if((state_val_3711 === (3))){
var inst_3708 = (state_3710[(2)]);
var state_3710__$1 = state_3710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3710__$1,inst_3708);
} else {
if((state_val_3711 === (12))){
var state_3710__$1 = state_3710;
var statearr_3718_3744 = state_3710__$1;
(statearr_3718_3744[(2)] = null);

(statearr_3718_3744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3711 === (2))){
var state_3710__$1 = state_3710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3710__$1,(4),from);
} else {
if((state_val_3711 === (11))){
var inst_3699 = (state_3710[(2)]);
var state_3710__$1 = state_3710;
if(cljs.core.truth_(inst_3699)){
var statearr_3719_3745 = state_3710__$1;
(statearr_3719_3745[(1)] = (12));

} else {
var statearr_3720_3746 = state_3710__$1;
(statearr_3720_3746[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3711 === (9))){
var state_3710__$1 = state_3710;
var statearr_3721_3747 = state_3710__$1;
(statearr_3721_3747[(2)] = null);

(statearr_3721_3747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3711 === (5))){
var state_3710__$1 = state_3710;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3722_3748 = state_3710__$1;
(statearr_3722_3748[(1)] = (8));

} else {
var statearr_3723_3749 = state_3710__$1;
(statearr_3723_3749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3711 === (14))){
var inst_3704 = (state_3710[(2)]);
var state_3710__$1 = state_3710;
var statearr_3724_3750 = state_3710__$1;
(statearr_3724_3750[(2)] = inst_3704);

(statearr_3724_3750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3711 === (10))){
var inst_3696 = (state_3710[(2)]);
var state_3710__$1 = state_3710;
var statearr_3725_3751 = state_3710__$1;
(statearr_3725_3751[(2)] = inst_3696);

(statearr_3725_3751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3711 === (8))){
var inst_3693 = cljs.core.async.close_BANG_.call(null,to);
var state_3710__$1 = state_3710;
var statearr_3726_3752 = state_3710__$1;
(statearr_3726_3752[(2)] = inst_3693);

(statearr_3726_3752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1306__auto___3738))
;
return ((function (switch__1241__auto__,c__1306__auto___3738){
return (function() {
var cljs$core$async$state_machine__1242__auto__ = null;
var cljs$core$async$state_machine__1242__auto____0 = (function (){
var statearr_3730 = [null,null,null,null,null,null,null,null];
(statearr_3730[(0)] = cljs$core$async$state_machine__1242__auto__);

(statearr_3730[(1)] = (1));

return statearr_3730;
});
var cljs$core$async$state_machine__1242__auto____1 = (function (state_3710){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_3710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e3731){if((e3731 instanceof Object)){
var ex__1245__auto__ = e3731;
var statearr_3732_3753 = state_3710;
(statearr_3732_3753[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3754 = state_3710;
state_3710 = G__3754;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$state_machine__1242__auto__ = function(state_3710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1242__auto____1.call(this,state_3710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1242__auto____0;
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1242__auto____1;
return cljs$core$async$state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto___3738))
})();
var state__1308__auto__ = (function (){var statearr_3733 = f__1307__auto__.call(null);
(statearr_3733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___3738);

return statearr_3733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto___3738))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__3938){
var vec__3939 = p__3938;
var v = cljs.core.nth.call(null,vec__3939,(0),null);
var p = cljs.core.nth.call(null,vec__3939,(1),null);
var job = vec__3939;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__1306__auto___4121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto___4121,res,vec__3939,v,p,job,jobs,results){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto___4121,res,vec__3939,v,p,job,jobs,results){
return (function (state_3944){
var state_val_3945 = (state_3944[(1)]);
if((state_val_3945 === (1))){
var state_3944__$1 = state_3944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3944__$1,(2),res,v);
} else {
if((state_val_3945 === (2))){
var inst_3941 = (state_3944[(2)]);
var inst_3942 = cljs.core.async.close_BANG_.call(null,res);
var state_3944__$1 = (function (){var statearr_3946 = state_3944;
(statearr_3946[(7)] = inst_3941);

return statearr_3946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3944__$1,inst_3942);
} else {
return null;
}
}
});})(c__1306__auto___4121,res,vec__3939,v,p,job,jobs,results))
;
return ((function (switch__1241__auto__,c__1306__auto___4121,res,vec__3939,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____0 = (function (){
var statearr_3950 = [null,null,null,null,null,null,null,null];
(statearr_3950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__);

(statearr_3950[(1)] = (1));

return statearr_3950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____1 = (function (state_3944){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_3944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e3951){if((e3951 instanceof Object)){
var ex__1245__auto__ = e3951;
var statearr_3952_4122 = state_3944;
(statearr_3952_4122[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4123 = state_3944;
state_3944 = G__4123;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__ = function(state_3944){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____1.call(this,state_3944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto___4121,res,vec__3939,v,p,job,jobs,results))
})();
var state__1308__auto__ = (function (){var statearr_3953 = f__1307__auto__.call(null);
(statearr_3953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___4121);

return statearr_3953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto___4121,res,vec__3939,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__3954){
var vec__3955 = p__3954;
var v = cljs.core.nth.call(null,vec__3955,(0),null);
var p = cljs.core.nth.call(null,vec__3955,(1),null);
var job = vec__3955;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__3257__auto___4124 = n;
var __4125 = (0);
while(true){
if((__4125 < n__3257__auto___4124)){
var G__3956_4126 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__3956_4126) {
case "compute":
var c__1306__auto___4128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4125,c__1306__auto___4128,G__3956_4126,n__3257__auto___4124,jobs,results,process,async){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (__4125,c__1306__auto___4128,G__3956_4126,n__3257__auto___4124,jobs,results,process,async){
return (function (state_3969){
var state_val_3970 = (state_3969[(1)]);
if((state_val_3970 === (1))){
var state_3969__$1 = state_3969;
var statearr_3971_4129 = state_3969__$1;
(statearr_3971_4129[(2)] = null);

(statearr_3971_4129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3970 === (2))){
var state_3969__$1 = state_3969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3969__$1,(4),jobs);
} else {
if((state_val_3970 === (3))){
var inst_3967 = (state_3969[(2)]);
var state_3969__$1 = state_3969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3969__$1,inst_3967);
} else {
if((state_val_3970 === (4))){
var inst_3959 = (state_3969[(2)]);
var inst_3960 = process.call(null,inst_3959);
var state_3969__$1 = state_3969;
if(cljs.core.truth_(inst_3960)){
var statearr_3972_4130 = state_3969__$1;
(statearr_3972_4130[(1)] = (5));

} else {
var statearr_3973_4131 = state_3969__$1;
(statearr_3973_4131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3970 === (5))){
var state_3969__$1 = state_3969;
var statearr_3974_4132 = state_3969__$1;
(statearr_3974_4132[(2)] = null);

(statearr_3974_4132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3970 === (6))){
var state_3969__$1 = state_3969;
var statearr_3975_4133 = state_3969__$1;
(statearr_3975_4133[(2)] = null);

(statearr_3975_4133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3970 === (7))){
var inst_3965 = (state_3969[(2)]);
var state_3969__$1 = state_3969;
var statearr_3976_4134 = state_3969__$1;
(statearr_3976_4134[(2)] = inst_3965);

(statearr_3976_4134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__4125,c__1306__auto___4128,G__3956_4126,n__3257__auto___4124,jobs,results,process,async))
;
return ((function (__4125,switch__1241__auto__,c__1306__auto___4128,G__3956_4126,n__3257__auto___4124,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____0 = (function (){
var statearr_3980 = [null,null,null,null,null,null,null];
(statearr_3980[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__);

(statearr_3980[(1)] = (1));

return statearr_3980;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____1 = (function (state_3969){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_3969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e3981){if((e3981 instanceof Object)){
var ex__1245__auto__ = e3981;
var statearr_3982_4135 = state_3969;
(statearr_3982_4135[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4136 = state_3969;
state_3969 = G__4136;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__ = function(state_3969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____1.call(this,state_3969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__;
})()
;})(__4125,switch__1241__auto__,c__1306__auto___4128,G__3956_4126,n__3257__auto___4124,jobs,results,process,async))
})();
var state__1308__auto__ = (function (){var statearr_3983 = f__1307__auto__.call(null);
(statearr_3983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___4128);

return statearr_3983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(__4125,c__1306__auto___4128,G__3956_4126,n__3257__auto___4124,jobs,results,process,async))
);


break;
case "async":
var c__1306__auto___4137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4125,c__1306__auto___4137,G__3956_4126,n__3257__auto___4124,jobs,results,process,async){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (__4125,c__1306__auto___4137,G__3956_4126,n__3257__auto___4124,jobs,results,process,async){
return (function (state_3996){
var state_val_3997 = (state_3996[(1)]);
if((state_val_3997 === (1))){
var state_3996__$1 = state_3996;
var statearr_3998_4138 = state_3996__$1;
(statearr_3998_4138[(2)] = null);

(statearr_3998_4138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (2))){
var state_3996__$1 = state_3996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3996__$1,(4),jobs);
} else {
if((state_val_3997 === (3))){
var inst_3994 = (state_3996[(2)]);
var state_3996__$1 = state_3996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3996__$1,inst_3994);
} else {
if((state_val_3997 === (4))){
var inst_3986 = (state_3996[(2)]);
var inst_3987 = async.call(null,inst_3986);
var state_3996__$1 = state_3996;
if(cljs.core.truth_(inst_3987)){
var statearr_3999_4139 = state_3996__$1;
(statearr_3999_4139[(1)] = (5));

} else {
var statearr_4000_4140 = state_3996__$1;
(statearr_4000_4140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (5))){
var state_3996__$1 = state_3996;
var statearr_4001_4141 = state_3996__$1;
(statearr_4001_4141[(2)] = null);

(statearr_4001_4141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (6))){
var state_3996__$1 = state_3996;
var statearr_4002_4142 = state_3996__$1;
(statearr_4002_4142[(2)] = null);

(statearr_4002_4142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (7))){
var inst_3992 = (state_3996[(2)]);
var state_3996__$1 = state_3996;
var statearr_4003_4143 = state_3996__$1;
(statearr_4003_4143[(2)] = inst_3992);

(statearr_4003_4143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__4125,c__1306__auto___4137,G__3956_4126,n__3257__auto___4124,jobs,results,process,async))
;
return ((function (__4125,switch__1241__auto__,c__1306__auto___4137,G__3956_4126,n__3257__auto___4124,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____0 = (function (){
var statearr_4007 = [null,null,null,null,null,null,null];
(statearr_4007[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__);

(statearr_4007[(1)] = (1));

return statearr_4007;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____1 = (function (state_3996){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_3996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e4008){if((e4008 instanceof Object)){
var ex__1245__auto__ = e4008;
var statearr_4009_4144 = state_3996;
(statearr_4009_4144[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4145 = state_3996;
state_3996 = G__4145;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__ = function(state_3996){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____1.call(this,state_3996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__;
})()
;})(__4125,switch__1241__auto__,c__1306__auto___4137,G__3956_4126,n__3257__auto___4124,jobs,results,process,async))
})();
var state__1308__auto__ = (function (){var statearr_4010 = f__1307__auto__.call(null);
(statearr_4010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___4137);

return statearr_4010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(__4125,c__1306__auto___4137,G__3956_4126,n__3257__auto___4124,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__4146 = (__4125 + (1));
__4125 = G__4146;
continue;
} else {
}
break;
}

var c__1306__auto___4147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto___4147,jobs,results,process,async){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto___4147,jobs,results,process,async){
return (function (state_4032){
var state_val_4033 = (state_4032[(1)]);
if((state_val_4033 === (1))){
var state_4032__$1 = state_4032;
var statearr_4034_4148 = state_4032__$1;
(statearr_4034_4148[(2)] = null);

(statearr_4034_4148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4033 === (2))){
var state_4032__$1 = state_4032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4032__$1,(4),from);
} else {
if((state_val_4033 === (3))){
var inst_4030 = (state_4032[(2)]);
var state_4032__$1 = state_4032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4032__$1,inst_4030);
} else {
if((state_val_4033 === (4))){
var inst_4013 = (state_4032[(7)]);
var inst_4013__$1 = (state_4032[(2)]);
var inst_4014 = (inst_4013__$1 == null);
var state_4032__$1 = (function (){var statearr_4035 = state_4032;
(statearr_4035[(7)] = inst_4013__$1);

return statearr_4035;
})();
if(cljs.core.truth_(inst_4014)){
var statearr_4036_4149 = state_4032__$1;
(statearr_4036_4149[(1)] = (5));

} else {
var statearr_4037_4150 = state_4032__$1;
(statearr_4037_4150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4033 === (5))){
var inst_4016 = cljs.core.async.close_BANG_.call(null,jobs);
var state_4032__$1 = state_4032;
var statearr_4038_4151 = state_4032__$1;
(statearr_4038_4151[(2)] = inst_4016);

(statearr_4038_4151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4033 === (6))){
var inst_4013 = (state_4032[(7)]);
var inst_4018 = (state_4032[(8)]);
var inst_4018__$1 = cljs.core.async.chan.call(null,(1));
var inst_4019 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4020 = [inst_4013,inst_4018__$1];
var inst_4021 = (new cljs.core.PersistentVector(null,2,(5),inst_4019,inst_4020,null));
var state_4032__$1 = (function (){var statearr_4039 = state_4032;
(statearr_4039[(8)] = inst_4018__$1);

return statearr_4039;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4032__$1,(8),jobs,inst_4021);
} else {
if((state_val_4033 === (7))){
var inst_4028 = (state_4032[(2)]);
var state_4032__$1 = state_4032;
var statearr_4040_4152 = state_4032__$1;
(statearr_4040_4152[(2)] = inst_4028);

(statearr_4040_4152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4033 === (8))){
var inst_4018 = (state_4032[(8)]);
var inst_4023 = (state_4032[(2)]);
var state_4032__$1 = (function (){var statearr_4041 = state_4032;
(statearr_4041[(9)] = inst_4023);

return statearr_4041;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4032__$1,(9),results,inst_4018);
} else {
if((state_val_4033 === (9))){
var inst_4025 = (state_4032[(2)]);
var state_4032__$1 = (function (){var statearr_4042 = state_4032;
(statearr_4042[(10)] = inst_4025);

return statearr_4042;
})();
var statearr_4043_4153 = state_4032__$1;
(statearr_4043_4153[(2)] = null);

(statearr_4043_4153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__1306__auto___4147,jobs,results,process,async))
;
return ((function (switch__1241__auto__,c__1306__auto___4147,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____0 = (function (){
var statearr_4047 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4047[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__);

(statearr_4047[(1)] = (1));

return statearr_4047;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____1 = (function (state_4032){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_4032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e4048){if((e4048 instanceof Object)){
var ex__1245__auto__ = e4048;
var statearr_4049_4154 = state_4032;
(statearr_4049_4154[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4155 = state_4032;
state_4032 = G__4155;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__ = function(state_4032){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____1.call(this,state_4032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto___4147,jobs,results,process,async))
})();
var state__1308__auto__ = (function (){var statearr_4050 = f__1307__auto__.call(null);
(statearr_4050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___4147);

return statearr_4050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto___4147,jobs,results,process,async))
);


var c__1306__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto__,jobs,results,process,async){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto__,jobs,results,process,async){
return (function (state_4088){
var state_val_4089 = (state_4088[(1)]);
if((state_val_4089 === (7))){
var inst_4084 = (state_4088[(2)]);
var state_4088__$1 = state_4088;
var statearr_4090_4156 = state_4088__$1;
(statearr_4090_4156[(2)] = inst_4084);

(statearr_4090_4156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4089 === (20))){
var state_4088__$1 = state_4088;
var statearr_4091_4157 = state_4088__$1;
(statearr_4091_4157[(2)] = null);

(statearr_4091_4157[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4089 === (1))){
var state_4088__$1 = state_4088;
var statearr_4092_4158 = state_4088__$1;
(statearr_4092_4158[(2)] = null);

(statearr_4092_4158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4089 === (4))){
var inst_4053 = (state_4088[(7)]);
var inst_4053__$1 = (state_4088[(2)]);
var inst_4054 = (inst_4053__$1 == null);
var state_4088__$1 = (function (){var statearr_4093 = state_4088;
(statearr_4093[(7)] = inst_4053__$1);

return statearr_4093;
})();
if(cljs.core.truth_(inst_4054)){
var statearr_4094_4159 = state_4088__$1;
(statearr_4094_4159[(1)] = (5));

} else {
var statearr_4095_4160 = state_4088__$1;
(statearr_4095_4160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4089 === (15))){
var inst_4066 = (state_4088[(8)]);
var state_4088__$1 = state_4088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4088__$1,(18),to,inst_4066);
} else {
if((state_val_4089 === (21))){
var inst_4079 = (state_4088[(2)]);
var state_4088__$1 = state_4088;
var statearr_4096_4161 = state_4088__$1;
(statearr_4096_4161[(2)] = inst_4079);

(statearr_4096_4161[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4089 === (13))){
var inst_4081 = (state_4088[(2)]);
var state_4088__$1 = (function (){var statearr_4097 = state_4088;
(statearr_4097[(9)] = inst_4081);

return statearr_4097;
})();
var statearr_4098_4162 = state_4088__$1;
(statearr_4098_4162[(2)] = null);

(statearr_4098_4162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4089 === (6))){
var inst_4053 = (state_4088[(7)]);
var state_4088__$1 = state_4088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4088__$1,(11),inst_4053);
} else {
if((state_val_4089 === (17))){
var inst_4074 = (state_4088[(2)]);
var state_4088__$1 = state_4088;
if(cljs.core.truth_(inst_4074)){
var statearr_4099_4163 = state_4088__$1;
(statearr_4099_4163[(1)] = (19));

} else {
var statearr_4100_4164 = state_4088__$1;
(statearr_4100_4164[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4089 === (3))){
var inst_4086 = (state_4088[(2)]);
var state_4088__$1 = state_4088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4088__$1,inst_4086);
} else {
if((state_val_4089 === (12))){
var inst_4063 = (state_4088[(10)]);
var state_4088__$1 = state_4088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4088__$1,(14),inst_4063);
} else {
if((state_val_4089 === (2))){
var state_4088__$1 = state_4088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4088__$1,(4),results);
} else {
if((state_val_4089 === (19))){
var state_4088__$1 = state_4088;
var statearr_4101_4165 = state_4088__$1;
(statearr_4101_4165[(2)] = null);

(statearr_4101_4165[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4089 === (11))){
var inst_4063 = (state_4088[(2)]);
var state_4088__$1 = (function (){var statearr_4102 = state_4088;
(statearr_4102[(10)] = inst_4063);

return statearr_4102;
})();
var statearr_4103_4166 = state_4088__$1;
(statearr_4103_4166[(2)] = null);

(statearr_4103_4166[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4089 === (9))){
var state_4088__$1 = state_4088;
var statearr_4104_4167 = state_4088__$1;
(statearr_4104_4167[(2)] = null);

(statearr_4104_4167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4089 === (5))){
var state_4088__$1 = state_4088;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4105_4168 = state_4088__$1;
(statearr_4105_4168[(1)] = (8));

} else {
var statearr_4106_4169 = state_4088__$1;
(statearr_4106_4169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4089 === (14))){
var inst_4066 = (state_4088[(8)]);
var inst_4068 = (state_4088[(11)]);
var inst_4066__$1 = (state_4088[(2)]);
var inst_4067 = (inst_4066__$1 == null);
var inst_4068__$1 = cljs.core.not.call(null,inst_4067);
var state_4088__$1 = (function (){var statearr_4107 = state_4088;
(statearr_4107[(8)] = inst_4066__$1);

(statearr_4107[(11)] = inst_4068__$1);

return statearr_4107;
})();
if(inst_4068__$1){
var statearr_4108_4170 = state_4088__$1;
(statearr_4108_4170[(1)] = (15));

} else {
var statearr_4109_4171 = state_4088__$1;
(statearr_4109_4171[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4089 === (16))){
var inst_4068 = (state_4088[(11)]);
var state_4088__$1 = state_4088;
var statearr_4110_4172 = state_4088__$1;
(statearr_4110_4172[(2)] = inst_4068);

(statearr_4110_4172[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4089 === (10))){
var inst_4060 = (state_4088[(2)]);
var state_4088__$1 = state_4088;
var statearr_4111_4173 = state_4088__$1;
(statearr_4111_4173[(2)] = inst_4060);

(statearr_4111_4173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4089 === (18))){
var inst_4071 = (state_4088[(2)]);
var state_4088__$1 = state_4088;
var statearr_4112_4174 = state_4088__$1;
(statearr_4112_4174[(2)] = inst_4071);

(statearr_4112_4174[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4089 === (8))){
var inst_4057 = cljs.core.async.close_BANG_.call(null,to);
var state_4088__$1 = state_4088;
var statearr_4113_4175 = state_4088__$1;
(statearr_4113_4175[(2)] = inst_4057);

(statearr_4113_4175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1306__auto__,jobs,results,process,async))
;
return ((function (switch__1241__auto__,c__1306__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____0 = (function (){
var statearr_4117 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4117[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__);

(statearr_4117[(1)] = (1));

return statearr_4117;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____1 = (function (state_4088){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_4088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e4118){if((e4118 instanceof Object)){
var ex__1245__auto__ = e4118;
var statearr_4119_4176 = state_4088;
(statearr_4119_4176[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4177 = state_4088;
state_4088 = G__4177;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__ = function(state_4088){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____1.call(this,state_4088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1242__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto__,jobs,results,process,async))
})();
var state__1308__auto__ = (function (){var statearr_4120 = f__1307__auto__.call(null);
(statearr_4120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto__);

return statearr_4120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto__,jobs,results,process,async))
);

return c__1306__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args4178 = [];
var len__3348__auto___4181 = arguments.length;
var i__3349__auto___4182 = (0);
while(true){
if((i__3349__auto___4182 < len__3348__auto___4181)){
args4178.push((arguments[i__3349__auto___4182]));

var G__4183 = (i__3349__auto___4182 + (1));
i__3349__auto___4182 = G__4183;
continue;
} else {
}
break;
}

var G__4180 = args4178.length;
switch (G__4180) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4178.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args4185 = [];
var len__3348__auto___4188 = arguments.length;
var i__3349__auto___4189 = (0);
while(true){
if((i__3349__auto___4189 < len__3348__auto___4188)){
args4185.push((arguments[i__3349__auto___4189]));

var G__4190 = (i__3349__auto___4189 + (1));
i__3349__auto___4189 = G__4190;
continue;
} else {
}
break;
}

var G__4187 = args4185.length;
switch (G__4187) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4185.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args4192 = [];
var len__3348__auto___4245 = arguments.length;
var i__3349__auto___4246 = (0);
while(true){
if((i__3349__auto___4246 < len__3348__auto___4245)){
args4192.push((arguments[i__3349__auto___4246]));

var G__4247 = (i__3349__auto___4246 + (1));
i__3349__auto___4246 = G__4247;
continue;
} else {
}
break;
}

var G__4194 = args4192.length;
switch (G__4194) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4192.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__1306__auto___4249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto___4249,tc,fc){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto___4249,tc,fc){
return (function (state_4220){
var state_val_4221 = (state_4220[(1)]);
if((state_val_4221 === (7))){
var inst_4216 = (state_4220[(2)]);
var state_4220__$1 = state_4220;
var statearr_4222_4250 = state_4220__$1;
(statearr_4222_4250[(2)] = inst_4216);

(statearr_4222_4250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4221 === (1))){
var state_4220__$1 = state_4220;
var statearr_4223_4251 = state_4220__$1;
(statearr_4223_4251[(2)] = null);

(statearr_4223_4251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4221 === (4))){
var inst_4197 = (state_4220[(7)]);
var inst_4197__$1 = (state_4220[(2)]);
var inst_4198 = (inst_4197__$1 == null);
var state_4220__$1 = (function (){var statearr_4224 = state_4220;
(statearr_4224[(7)] = inst_4197__$1);

return statearr_4224;
})();
if(cljs.core.truth_(inst_4198)){
var statearr_4225_4252 = state_4220__$1;
(statearr_4225_4252[(1)] = (5));

} else {
var statearr_4226_4253 = state_4220__$1;
(statearr_4226_4253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4221 === (13))){
var state_4220__$1 = state_4220;
var statearr_4227_4254 = state_4220__$1;
(statearr_4227_4254[(2)] = null);

(statearr_4227_4254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4221 === (6))){
var inst_4197 = (state_4220[(7)]);
var inst_4203 = p.call(null,inst_4197);
var state_4220__$1 = state_4220;
if(cljs.core.truth_(inst_4203)){
var statearr_4228_4255 = state_4220__$1;
(statearr_4228_4255[(1)] = (9));

} else {
var statearr_4229_4256 = state_4220__$1;
(statearr_4229_4256[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4221 === (3))){
var inst_4218 = (state_4220[(2)]);
var state_4220__$1 = state_4220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4220__$1,inst_4218);
} else {
if((state_val_4221 === (12))){
var state_4220__$1 = state_4220;
var statearr_4230_4257 = state_4220__$1;
(statearr_4230_4257[(2)] = null);

(statearr_4230_4257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4221 === (2))){
var state_4220__$1 = state_4220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4220__$1,(4),ch);
} else {
if((state_val_4221 === (11))){
var inst_4197 = (state_4220[(7)]);
var inst_4207 = (state_4220[(2)]);
var state_4220__$1 = state_4220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4220__$1,(8),inst_4207,inst_4197);
} else {
if((state_val_4221 === (9))){
var state_4220__$1 = state_4220;
var statearr_4231_4258 = state_4220__$1;
(statearr_4231_4258[(2)] = tc);

(statearr_4231_4258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4221 === (5))){
var inst_4200 = cljs.core.async.close_BANG_.call(null,tc);
var inst_4201 = cljs.core.async.close_BANG_.call(null,fc);
var state_4220__$1 = (function (){var statearr_4232 = state_4220;
(statearr_4232[(8)] = inst_4200);

return statearr_4232;
})();
var statearr_4233_4259 = state_4220__$1;
(statearr_4233_4259[(2)] = inst_4201);

(statearr_4233_4259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4221 === (14))){
var inst_4214 = (state_4220[(2)]);
var state_4220__$1 = state_4220;
var statearr_4234_4260 = state_4220__$1;
(statearr_4234_4260[(2)] = inst_4214);

(statearr_4234_4260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4221 === (10))){
var state_4220__$1 = state_4220;
var statearr_4235_4261 = state_4220__$1;
(statearr_4235_4261[(2)] = fc);

(statearr_4235_4261[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4221 === (8))){
var inst_4209 = (state_4220[(2)]);
var state_4220__$1 = state_4220;
if(cljs.core.truth_(inst_4209)){
var statearr_4236_4262 = state_4220__$1;
(statearr_4236_4262[(1)] = (12));

} else {
var statearr_4237_4263 = state_4220__$1;
(statearr_4237_4263[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1306__auto___4249,tc,fc))
;
return ((function (switch__1241__auto__,c__1306__auto___4249,tc,fc){
return (function() {
var cljs$core$async$state_machine__1242__auto__ = null;
var cljs$core$async$state_machine__1242__auto____0 = (function (){
var statearr_4241 = [null,null,null,null,null,null,null,null,null];
(statearr_4241[(0)] = cljs$core$async$state_machine__1242__auto__);

(statearr_4241[(1)] = (1));

return statearr_4241;
});
var cljs$core$async$state_machine__1242__auto____1 = (function (state_4220){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_4220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e4242){if((e4242 instanceof Object)){
var ex__1245__auto__ = e4242;
var statearr_4243_4264 = state_4220;
(statearr_4243_4264[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4265 = state_4220;
state_4220 = G__4265;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$state_machine__1242__auto__ = function(state_4220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1242__auto____1.call(this,state_4220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1242__auto____0;
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1242__auto____1;
return cljs$core$async$state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto___4249,tc,fc))
})();
var state__1308__auto__ = (function (){var statearr_4244 = f__1307__auto__.call(null);
(statearr_4244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___4249);

return statearr_4244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto___4249,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__1306__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto__){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto__){
return (function (state_4312){
var state_val_4313 = (state_4312[(1)]);
if((state_val_4313 === (1))){
var inst_4298 = init;
var state_4312__$1 = (function (){var statearr_4314 = state_4312;
(statearr_4314[(7)] = inst_4298);

return statearr_4314;
})();
var statearr_4315_4330 = state_4312__$1;
(statearr_4315_4330[(2)] = null);

(statearr_4315_4330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (2))){
var state_4312__$1 = state_4312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4312__$1,(4),ch);
} else {
if((state_val_4313 === (3))){
var inst_4310 = (state_4312[(2)]);
var state_4312__$1 = state_4312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4312__$1,inst_4310);
} else {
if((state_val_4313 === (4))){
var inst_4301 = (state_4312[(8)]);
var inst_4301__$1 = (state_4312[(2)]);
var inst_4302 = (inst_4301__$1 == null);
var state_4312__$1 = (function (){var statearr_4316 = state_4312;
(statearr_4316[(8)] = inst_4301__$1);

return statearr_4316;
})();
if(cljs.core.truth_(inst_4302)){
var statearr_4317_4331 = state_4312__$1;
(statearr_4317_4331[(1)] = (5));

} else {
var statearr_4318_4332 = state_4312__$1;
(statearr_4318_4332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (5))){
var inst_4298 = (state_4312[(7)]);
var state_4312__$1 = state_4312;
var statearr_4319_4333 = state_4312__$1;
(statearr_4319_4333[(2)] = inst_4298);

(statearr_4319_4333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (6))){
var inst_4301 = (state_4312[(8)]);
var inst_4298 = (state_4312[(7)]);
var inst_4305 = f.call(null,inst_4298,inst_4301);
var inst_4298__$1 = inst_4305;
var state_4312__$1 = (function (){var statearr_4320 = state_4312;
(statearr_4320[(7)] = inst_4298__$1);

return statearr_4320;
})();
var statearr_4321_4334 = state_4312__$1;
(statearr_4321_4334[(2)] = null);

(statearr_4321_4334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4313 === (7))){
var inst_4308 = (state_4312[(2)]);
var state_4312__$1 = state_4312;
var statearr_4322_4335 = state_4312__$1;
(statearr_4322_4335[(2)] = inst_4308);

(statearr_4322_4335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__1306__auto__))
;
return ((function (switch__1241__auto__,c__1306__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__1242__auto__ = null;
var cljs$core$async$reduce_$_state_machine__1242__auto____0 = (function (){
var statearr_4326 = [null,null,null,null,null,null,null,null,null];
(statearr_4326[(0)] = cljs$core$async$reduce_$_state_machine__1242__auto__);

(statearr_4326[(1)] = (1));

return statearr_4326;
});
var cljs$core$async$reduce_$_state_machine__1242__auto____1 = (function (state_4312){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_4312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e4327){if((e4327 instanceof Object)){
var ex__1245__auto__ = e4327;
var statearr_4328_4336 = state_4312;
(statearr_4328_4336[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4337 = state_4312;
state_4312 = G__4337;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__1242__auto__ = function(state_4312){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__1242__auto____1.call(this,state_4312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__1242__auto____0;
cljs$core$async$reduce_$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__1242__auto____1;
return cljs$core$async$reduce_$_state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto__))
})();
var state__1308__auto__ = (function (){var statearr_4329 = f__1307__auto__.call(null);
(statearr_4329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto__);

return statearr_4329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto__))
);

return c__1306__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args4338 = [];
var len__3348__auto___4390 = arguments.length;
var i__3349__auto___4391 = (0);
while(true){
if((i__3349__auto___4391 < len__3348__auto___4390)){
args4338.push((arguments[i__3349__auto___4391]));

var G__4392 = (i__3349__auto___4391 + (1));
i__3349__auto___4391 = G__4392;
continue;
} else {
}
break;
}

var G__4340 = args4338.length;
switch (G__4340) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4338.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__1306__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto__){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto__){
return (function (state_4365){
var state_val_4366 = (state_4365[(1)]);
if((state_val_4366 === (7))){
var inst_4347 = (state_4365[(2)]);
var state_4365__$1 = state_4365;
var statearr_4367_4394 = state_4365__$1;
(statearr_4367_4394[(2)] = inst_4347);

(statearr_4367_4394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4366 === (1))){
var inst_4341 = cljs.core.seq.call(null,coll);
var inst_4342 = inst_4341;
var state_4365__$1 = (function (){var statearr_4368 = state_4365;
(statearr_4368[(7)] = inst_4342);

return statearr_4368;
})();
var statearr_4369_4395 = state_4365__$1;
(statearr_4369_4395[(2)] = null);

(statearr_4369_4395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4366 === (4))){
var inst_4342 = (state_4365[(7)]);
var inst_4345 = cljs.core.first.call(null,inst_4342);
var state_4365__$1 = state_4365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4365__$1,(7),ch,inst_4345);
} else {
if((state_val_4366 === (13))){
var inst_4359 = (state_4365[(2)]);
var state_4365__$1 = state_4365;
var statearr_4370_4396 = state_4365__$1;
(statearr_4370_4396[(2)] = inst_4359);

(statearr_4370_4396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4366 === (6))){
var inst_4350 = (state_4365[(2)]);
var state_4365__$1 = state_4365;
if(cljs.core.truth_(inst_4350)){
var statearr_4371_4397 = state_4365__$1;
(statearr_4371_4397[(1)] = (8));

} else {
var statearr_4372_4398 = state_4365__$1;
(statearr_4372_4398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4366 === (3))){
var inst_4363 = (state_4365[(2)]);
var state_4365__$1 = state_4365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4365__$1,inst_4363);
} else {
if((state_val_4366 === (12))){
var state_4365__$1 = state_4365;
var statearr_4373_4399 = state_4365__$1;
(statearr_4373_4399[(2)] = null);

(statearr_4373_4399[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4366 === (2))){
var inst_4342 = (state_4365[(7)]);
var state_4365__$1 = state_4365;
if(cljs.core.truth_(inst_4342)){
var statearr_4374_4400 = state_4365__$1;
(statearr_4374_4400[(1)] = (4));

} else {
var statearr_4375_4401 = state_4365__$1;
(statearr_4375_4401[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4366 === (11))){
var inst_4356 = cljs.core.async.close_BANG_.call(null,ch);
var state_4365__$1 = state_4365;
var statearr_4376_4402 = state_4365__$1;
(statearr_4376_4402[(2)] = inst_4356);

(statearr_4376_4402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4366 === (9))){
var state_4365__$1 = state_4365;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4377_4403 = state_4365__$1;
(statearr_4377_4403[(1)] = (11));

} else {
var statearr_4378_4404 = state_4365__$1;
(statearr_4378_4404[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4366 === (5))){
var inst_4342 = (state_4365[(7)]);
var state_4365__$1 = state_4365;
var statearr_4379_4405 = state_4365__$1;
(statearr_4379_4405[(2)] = inst_4342);

(statearr_4379_4405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4366 === (10))){
var inst_4361 = (state_4365[(2)]);
var state_4365__$1 = state_4365;
var statearr_4380_4406 = state_4365__$1;
(statearr_4380_4406[(2)] = inst_4361);

(statearr_4380_4406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4366 === (8))){
var inst_4342 = (state_4365[(7)]);
var inst_4352 = cljs.core.next.call(null,inst_4342);
var inst_4342__$1 = inst_4352;
var state_4365__$1 = (function (){var statearr_4381 = state_4365;
(statearr_4381[(7)] = inst_4342__$1);

return statearr_4381;
})();
var statearr_4382_4407 = state_4365__$1;
(statearr_4382_4407[(2)] = null);

(statearr_4382_4407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1306__auto__))
;
return ((function (switch__1241__auto__,c__1306__auto__){
return (function() {
var cljs$core$async$state_machine__1242__auto__ = null;
var cljs$core$async$state_machine__1242__auto____0 = (function (){
var statearr_4386 = [null,null,null,null,null,null,null,null];
(statearr_4386[(0)] = cljs$core$async$state_machine__1242__auto__);

(statearr_4386[(1)] = (1));

return statearr_4386;
});
var cljs$core$async$state_machine__1242__auto____1 = (function (state_4365){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_4365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e4387){if((e4387 instanceof Object)){
var ex__1245__auto__ = e4387;
var statearr_4388_4408 = state_4365;
(statearr_4388_4408[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4409 = state_4365;
state_4365 = G__4409;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$state_machine__1242__auto__ = function(state_4365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1242__auto____1.call(this,state_4365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1242__auto____0;
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1242__auto____1;
return cljs$core$async$state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto__))
})();
var state__1308__auto__ = (function (){var statearr_4389 = f__1307__auto__.call(null);
(statearr_4389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto__);

return statearr_4389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto__))
);

return c__1306__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__3101__auto__ = (((_ == null))?null:_);
var m__3102__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3101__auto__)]);
if(!((m__3102__auto__ == null))){
return m__3102__auto__.call(null,_);
} else {
var m__3102__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__3102__auto____$1 == null))){
return m__3102__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__3101__auto__ = (((m == null))?null:m);
var m__3102__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3101__auto__)]);
if(!((m__3102__auto__ == null))){
return m__3102__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__3102__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__3102__auto____$1 == null))){
return m__3102__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__3101__auto__ = (((m == null))?null:m);
var m__3102__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3101__auto__)]);
if(!((m__3102__auto__ == null))){
return m__3102__auto__.call(null,m,ch);
} else {
var m__3102__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__3102__auto____$1 == null))){
return m__3102__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__3101__auto__ = (((m == null))?null:m);
var m__3102__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3101__auto__)]);
if(!((m__3102__auto__ == null))){
return m__3102__auto__.call(null,m);
} else {
var m__3102__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__3102__auto____$1 == null))){
return m__3102__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async4631 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4631 = (function (mult,ch,cs,meta4632){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta4632 = meta4632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async4631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_4633,meta4632__$1){
var self__ = this;
var _4633__$1 = this;
return (new cljs.core.async.t_cljs$core$async4631(self__.mult,self__.ch,self__.cs,meta4632__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async4631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_4633){
var self__ = this;
var _4633__$1 = this;
return self__.meta4632;
});})(cs))
;

cljs.core.async.t_cljs$core$async4631.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async4631.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async4631.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async4631.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4631.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4631.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4631.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta4632","meta4632",-861737664,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async4631.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4631";

cljs.core.async.t_cljs$core$async4631.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3052__auto__,writer__3053__auto__,opt__3054__auto__){
return cljs.core._write.call(null,writer__3053__auto__,"cljs.core.async/t_cljs$core$async4631");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async4631 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async4631(mult__$1,ch__$1,cs__$1,meta4632){
return (new cljs.core.async.t_cljs$core$async4631(mult__$1,ch__$1,cs__$1,meta4632));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async4631(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__1306__auto___4852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto___4852,cs,m,dchan,dctr,done){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto___4852,cs,m,dchan,dctr,done){
return (function (state_4764){
var state_val_4765 = (state_4764[(1)]);
if((state_val_4765 === (7))){
var inst_4760 = (state_4764[(2)]);
var state_4764__$1 = state_4764;
var statearr_4766_4853 = state_4764__$1;
(statearr_4766_4853[(2)] = inst_4760);

(statearr_4766_4853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (20))){
var inst_4665 = (state_4764[(7)]);
var inst_4675 = cljs.core.first.call(null,inst_4665);
var inst_4676 = cljs.core.nth.call(null,inst_4675,(0),null);
var inst_4677 = cljs.core.nth.call(null,inst_4675,(1),null);
var state_4764__$1 = (function (){var statearr_4767 = state_4764;
(statearr_4767[(8)] = inst_4676);

return statearr_4767;
})();
if(cljs.core.truth_(inst_4677)){
var statearr_4768_4854 = state_4764__$1;
(statearr_4768_4854[(1)] = (22));

} else {
var statearr_4769_4855 = state_4764__$1;
(statearr_4769_4855[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (27))){
var inst_4707 = (state_4764[(9)]);
var inst_4636 = (state_4764[(10)]);
var inst_4712 = (state_4764[(11)]);
var inst_4705 = (state_4764[(12)]);
var inst_4712__$1 = cljs.core._nth.call(null,inst_4705,inst_4707);
var inst_4713 = cljs.core.async.put_BANG_.call(null,inst_4712__$1,inst_4636,done);
var state_4764__$1 = (function (){var statearr_4770 = state_4764;
(statearr_4770[(11)] = inst_4712__$1);

return statearr_4770;
})();
if(cljs.core.truth_(inst_4713)){
var statearr_4771_4856 = state_4764__$1;
(statearr_4771_4856[(1)] = (30));

} else {
var statearr_4772_4857 = state_4764__$1;
(statearr_4772_4857[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (1))){
var state_4764__$1 = state_4764;
var statearr_4773_4858 = state_4764__$1;
(statearr_4773_4858[(2)] = null);

(statearr_4773_4858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (24))){
var inst_4665 = (state_4764[(7)]);
var inst_4682 = (state_4764[(2)]);
var inst_4683 = cljs.core.next.call(null,inst_4665);
var inst_4645 = inst_4683;
var inst_4646 = null;
var inst_4647 = (0);
var inst_4648 = (0);
var state_4764__$1 = (function (){var statearr_4774 = state_4764;
(statearr_4774[(13)] = inst_4648);

(statearr_4774[(14)] = inst_4647);

(statearr_4774[(15)] = inst_4646);

(statearr_4774[(16)] = inst_4682);

(statearr_4774[(17)] = inst_4645);

return statearr_4774;
})();
var statearr_4775_4859 = state_4764__$1;
(statearr_4775_4859[(2)] = null);

(statearr_4775_4859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (39))){
var state_4764__$1 = state_4764;
var statearr_4779_4860 = state_4764__$1;
(statearr_4779_4860[(2)] = null);

(statearr_4779_4860[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (4))){
var inst_4636 = (state_4764[(10)]);
var inst_4636__$1 = (state_4764[(2)]);
var inst_4637 = (inst_4636__$1 == null);
var state_4764__$1 = (function (){var statearr_4780 = state_4764;
(statearr_4780[(10)] = inst_4636__$1);

return statearr_4780;
})();
if(cljs.core.truth_(inst_4637)){
var statearr_4781_4861 = state_4764__$1;
(statearr_4781_4861[(1)] = (5));

} else {
var statearr_4782_4862 = state_4764__$1;
(statearr_4782_4862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (15))){
var inst_4648 = (state_4764[(13)]);
var inst_4647 = (state_4764[(14)]);
var inst_4646 = (state_4764[(15)]);
var inst_4645 = (state_4764[(17)]);
var inst_4661 = (state_4764[(2)]);
var inst_4662 = (inst_4648 + (1));
var tmp4776 = inst_4647;
var tmp4777 = inst_4646;
var tmp4778 = inst_4645;
var inst_4645__$1 = tmp4778;
var inst_4646__$1 = tmp4777;
var inst_4647__$1 = tmp4776;
var inst_4648__$1 = inst_4662;
var state_4764__$1 = (function (){var statearr_4783 = state_4764;
(statearr_4783[(13)] = inst_4648__$1);

(statearr_4783[(18)] = inst_4661);

(statearr_4783[(14)] = inst_4647__$1);

(statearr_4783[(15)] = inst_4646__$1);

(statearr_4783[(17)] = inst_4645__$1);

return statearr_4783;
})();
var statearr_4784_4863 = state_4764__$1;
(statearr_4784_4863[(2)] = null);

(statearr_4784_4863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (21))){
var inst_4686 = (state_4764[(2)]);
var state_4764__$1 = state_4764;
var statearr_4788_4864 = state_4764__$1;
(statearr_4788_4864[(2)] = inst_4686);

(statearr_4788_4864[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (31))){
var inst_4712 = (state_4764[(11)]);
var inst_4716 = done.call(null,null);
var inst_4717 = cljs.core.async.untap_STAR_.call(null,m,inst_4712);
var state_4764__$1 = (function (){var statearr_4789 = state_4764;
(statearr_4789[(19)] = inst_4716);

return statearr_4789;
})();
var statearr_4790_4865 = state_4764__$1;
(statearr_4790_4865[(2)] = inst_4717);

(statearr_4790_4865[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (32))){
var inst_4707 = (state_4764[(9)]);
var inst_4706 = (state_4764[(20)]);
var inst_4704 = (state_4764[(21)]);
var inst_4705 = (state_4764[(12)]);
var inst_4719 = (state_4764[(2)]);
var inst_4720 = (inst_4707 + (1));
var tmp4785 = inst_4706;
var tmp4786 = inst_4704;
var tmp4787 = inst_4705;
var inst_4704__$1 = tmp4786;
var inst_4705__$1 = tmp4787;
var inst_4706__$1 = tmp4785;
var inst_4707__$1 = inst_4720;
var state_4764__$1 = (function (){var statearr_4791 = state_4764;
(statearr_4791[(9)] = inst_4707__$1);

(statearr_4791[(20)] = inst_4706__$1);

(statearr_4791[(22)] = inst_4719);

(statearr_4791[(21)] = inst_4704__$1);

(statearr_4791[(12)] = inst_4705__$1);

return statearr_4791;
})();
var statearr_4792_4866 = state_4764__$1;
(statearr_4792_4866[(2)] = null);

(statearr_4792_4866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (40))){
var inst_4732 = (state_4764[(23)]);
var inst_4736 = done.call(null,null);
var inst_4737 = cljs.core.async.untap_STAR_.call(null,m,inst_4732);
var state_4764__$1 = (function (){var statearr_4793 = state_4764;
(statearr_4793[(24)] = inst_4736);

return statearr_4793;
})();
var statearr_4794_4867 = state_4764__$1;
(statearr_4794_4867[(2)] = inst_4737);

(statearr_4794_4867[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (33))){
var inst_4723 = (state_4764[(25)]);
var inst_4725 = cljs.core.chunked_seq_QMARK_.call(null,inst_4723);
var state_4764__$1 = state_4764;
if(inst_4725){
var statearr_4795_4868 = state_4764__$1;
(statearr_4795_4868[(1)] = (36));

} else {
var statearr_4796_4869 = state_4764__$1;
(statearr_4796_4869[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (13))){
var inst_4655 = (state_4764[(26)]);
var inst_4658 = cljs.core.async.close_BANG_.call(null,inst_4655);
var state_4764__$1 = state_4764;
var statearr_4797_4870 = state_4764__$1;
(statearr_4797_4870[(2)] = inst_4658);

(statearr_4797_4870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (22))){
var inst_4676 = (state_4764[(8)]);
var inst_4679 = cljs.core.async.close_BANG_.call(null,inst_4676);
var state_4764__$1 = state_4764;
var statearr_4798_4871 = state_4764__$1;
(statearr_4798_4871[(2)] = inst_4679);

(statearr_4798_4871[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (36))){
var inst_4723 = (state_4764[(25)]);
var inst_4727 = cljs.core.chunk_first.call(null,inst_4723);
var inst_4728 = cljs.core.chunk_rest.call(null,inst_4723);
var inst_4729 = cljs.core.count.call(null,inst_4727);
var inst_4704 = inst_4728;
var inst_4705 = inst_4727;
var inst_4706 = inst_4729;
var inst_4707 = (0);
var state_4764__$1 = (function (){var statearr_4799 = state_4764;
(statearr_4799[(9)] = inst_4707);

(statearr_4799[(20)] = inst_4706);

(statearr_4799[(21)] = inst_4704);

(statearr_4799[(12)] = inst_4705);

return statearr_4799;
})();
var statearr_4800_4872 = state_4764__$1;
(statearr_4800_4872[(2)] = null);

(statearr_4800_4872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (41))){
var inst_4723 = (state_4764[(25)]);
var inst_4739 = (state_4764[(2)]);
var inst_4740 = cljs.core.next.call(null,inst_4723);
var inst_4704 = inst_4740;
var inst_4705 = null;
var inst_4706 = (0);
var inst_4707 = (0);
var state_4764__$1 = (function (){var statearr_4801 = state_4764;
(statearr_4801[(9)] = inst_4707);

(statearr_4801[(20)] = inst_4706);

(statearr_4801[(21)] = inst_4704);

(statearr_4801[(27)] = inst_4739);

(statearr_4801[(12)] = inst_4705);

return statearr_4801;
})();
var statearr_4802_4873 = state_4764__$1;
(statearr_4802_4873[(2)] = null);

(statearr_4802_4873[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (43))){
var state_4764__$1 = state_4764;
var statearr_4803_4874 = state_4764__$1;
(statearr_4803_4874[(2)] = null);

(statearr_4803_4874[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (29))){
var inst_4748 = (state_4764[(2)]);
var state_4764__$1 = state_4764;
var statearr_4804_4875 = state_4764__$1;
(statearr_4804_4875[(2)] = inst_4748);

(statearr_4804_4875[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (44))){
var inst_4757 = (state_4764[(2)]);
var state_4764__$1 = (function (){var statearr_4805 = state_4764;
(statearr_4805[(28)] = inst_4757);

return statearr_4805;
})();
var statearr_4806_4876 = state_4764__$1;
(statearr_4806_4876[(2)] = null);

(statearr_4806_4876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (6))){
var inst_4696 = (state_4764[(29)]);
var inst_4695 = cljs.core.deref.call(null,cs);
var inst_4696__$1 = cljs.core.keys.call(null,inst_4695);
var inst_4697 = cljs.core.count.call(null,inst_4696__$1);
var inst_4698 = cljs.core.reset_BANG_.call(null,dctr,inst_4697);
var inst_4703 = cljs.core.seq.call(null,inst_4696__$1);
var inst_4704 = inst_4703;
var inst_4705 = null;
var inst_4706 = (0);
var inst_4707 = (0);
var state_4764__$1 = (function (){var statearr_4807 = state_4764;
(statearr_4807[(29)] = inst_4696__$1);

(statearr_4807[(30)] = inst_4698);

(statearr_4807[(9)] = inst_4707);

(statearr_4807[(20)] = inst_4706);

(statearr_4807[(21)] = inst_4704);

(statearr_4807[(12)] = inst_4705);

return statearr_4807;
})();
var statearr_4808_4877 = state_4764__$1;
(statearr_4808_4877[(2)] = null);

(statearr_4808_4877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (28))){
var inst_4704 = (state_4764[(21)]);
var inst_4723 = (state_4764[(25)]);
var inst_4723__$1 = cljs.core.seq.call(null,inst_4704);
var state_4764__$1 = (function (){var statearr_4809 = state_4764;
(statearr_4809[(25)] = inst_4723__$1);

return statearr_4809;
})();
if(inst_4723__$1){
var statearr_4810_4878 = state_4764__$1;
(statearr_4810_4878[(1)] = (33));

} else {
var statearr_4811_4879 = state_4764__$1;
(statearr_4811_4879[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (25))){
var inst_4707 = (state_4764[(9)]);
var inst_4706 = (state_4764[(20)]);
var inst_4709 = (inst_4707 < inst_4706);
var inst_4710 = inst_4709;
var state_4764__$1 = state_4764;
if(cljs.core.truth_(inst_4710)){
var statearr_4812_4880 = state_4764__$1;
(statearr_4812_4880[(1)] = (27));

} else {
var statearr_4813_4881 = state_4764__$1;
(statearr_4813_4881[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (34))){
var state_4764__$1 = state_4764;
var statearr_4814_4882 = state_4764__$1;
(statearr_4814_4882[(2)] = null);

(statearr_4814_4882[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (17))){
var state_4764__$1 = state_4764;
var statearr_4815_4883 = state_4764__$1;
(statearr_4815_4883[(2)] = null);

(statearr_4815_4883[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (3))){
var inst_4762 = (state_4764[(2)]);
var state_4764__$1 = state_4764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4764__$1,inst_4762);
} else {
if((state_val_4765 === (12))){
var inst_4691 = (state_4764[(2)]);
var state_4764__$1 = state_4764;
var statearr_4816_4884 = state_4764__$1;
(statearr_4816_4884[(2)] = inst_4691);

(statearr_4816_4884[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (2))){
var state_4764__$1 = state_4764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4764__$1,(4),ch);
} else {
if((state_val_4765 === (23))){
var state_4764__$1 = state_4764;
var statearr_4817_4885 = state_4764__$1;
(statearr_4817_4885[(2)] = null);

(statearr_4817_4885[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (35))){
var inst_4746 = (state_4764[(2)]);
var state_4764__$1 = state_4764;
var statearr_4818_4886 = state_4764__$1;
(statearr_4818_4886[(2)] = inst_4746);

(statearr_4818_4886[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (19))){
var inst_4665 = (state_4764[(7)]);
var inst_4669 = cljs.core.chunk_first.call(null,inst_4665);
var inst_4670 = cljs.core.chunk_rest.call(null,inst_4665);
var inst_4671 = cljs.core.count.call(null,inst_4669);
var inst_4645 = inst_4670;
var inst_4646 = inst_4669;
var inst_4647 = inst_4671;
var inst_4648 = (0);
var state_4764__$1 = (function (){var statearr_4819 = state_4764;
(statearr_4819[(13)] = inst_4648);

(statearr_4819[(14)] = inst_4647);

(statearr_4819[(15)] = inst_4646);

(statearr_4819[(17)] = inst_4645);

return statearr_4819;
})();
var statearr_4820_4887 = state_4764__$1;
(statearr_4820_4887[(2)] = null);

(statearr_4820_4887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (11))){
var inst_4665 = (state_4764[(7)]);
var inst_4645 = (state_4764[(17)]);
var inst_4665__$1 = cljs.core.seq.call(null,inst_4645);
var state_4764__$1 = (function (){var statearr_4821 = state_4764;
(statearr_4821[(7)] = inst_4665__$1);

return statearr_4821;
})();
if(inst_4665__$1){
var statearr_4822_4888 = state_4764__$1;
(statearr_4822_4888[(1)] = (16));

} else {
var statearr_4823_4889 = state_4764__$1;
(statearr_4823_4889[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (9))){
var inst_4693 = (state_4764[(2)]);
var state_4764__$1 = state_4764;
var statearr_4824_4890 = state_4764__$1;
(statearr_4824_4890[(2)] = inst_4693);

(statearr_4824_4890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (5))){
var inst_4643 = cljs.core.deref.call(null,cs);
var inst_4644 = cljs.core.seq.call(null,inst_4643);
var inst_4645 = inst_4644;
var inst_4646 = null;
var inst_4647 = (0);
var inst_4648 = (0);
var state_4764__$1 = (function (){var statearr_4825 = state_4764;
(statearr_4825[(13)] = inst_4648);

(statearr_4825[(14)] = inst_4647);

(statearr_4825[(15)] = inst_4646);

(statearr_4825[(17)] = inst_4645);

return statearr_4825;
})();
var statearr_4826_4891 = state_4764__$1;
(statearr_4826_4891[(2)] = null);

(statearr_4826_4891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (14))){
var state_4764__$1 = state_4764;
var statearr_4827_4892 = state_4764__$1;
(statearr_4827_4892[(2)] = null);

(statearr_4827_4892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (45))){
var inst_4754 = (state_4764[(2)]);
var state_4764__$1 = state_4764;
var statearr_4828_4893 = state_4764__$1;
(statearr_4828_4893[(2)] = inst_4754);

(statearr_4828_4893[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (26))){
var inst_4696 = (state_4764[(29)]);
var inst_4750 = (state_4764[(2)]);
var inst_4751 = cljs.core.seq.call(null,inst_4696);
var state_4764__$1 = (function (){var statearr_4829 = state_4764;
(statearr_4829[(31)] = inst_4750);

return statearr_4829;
})();
if(inst_4751){
var statearr_4830_4894 = state_4764__$1;
(statearr_4830_4894[(1)] = (42));

} else {
var statearr_4831_4895 = state_4764__$1;
(statearr_4831_4895[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (16))){
var inst_4665 = (state_4764[(7)]);
var inst_4667 = cljs.core.chunked_seq_QMARK_.call(null,inst_4665);
var state_4764__$1 = state_4764;
if(inst_4667){
var statearr_4832_4896 = state_4764__$1;
(statearr_4832_4896[(1)] = (19));

} else {
var statearr_4833_4897 = state_4764__$1;
(statearr_4833_4897[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (38))){
var inst_4743 = (state_4764[(2)]);
var state_4764__$1 = state_4764;
var statearr_4834_4898 = state_4764__$1;
(statearr_4834_4898[(2)] = inst_4743);

(statearr_4834_4898[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (30))){
var state_4764__$1 = state_4764;
var statearr_4835_4899 = state_4764__$1;
(statearr_4835_4899[(2)] = null);

(statearr_4835_4899[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (10))){
var inst_4648 = (state_4764[(13)]);
var inst_4646 = (state_4764[(15)]);
var inst_4654 = cljs.core._nth.call(null,inst_4646,inst_4648);
var inst_4655 = cljs.core.nth.call(null,inst_4654,(0),null);
var inst_4656 = cljs.core.nth.call(null,inst_4654,(1),null);
var state_4764__$1 = (function (){var statearr_4836 = state_4764;
(statearr_4836[(26)] = inst_4655);

return statearr_4836;
})();
if(cljs.core.truth_(inst_4656)){
var statearr_4837_4900 = state_4764__$1;
(statearr_4837_4900[(1)] = (13));

} else {
var statearr_4838_4901 = state_4764__$1;
(statearr_4838_4901[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (18))){
var inst_4689 = (state_4764[(2)]);
var state_4764__$1 = state_4764;
var statearr_4839_4902 = state_4764__$1;
(statearr_4839_4902[(2)] = inst_4689);

(statearr_4839_4902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (42))){
var state_4764__$1 = state_4764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4764__$1,(45),dchan);
} else {
if((state_val_4765 === (37))){
var inst_4636 = (state_4764[(10)]);
var inst_4732 = (state_4764[(23)]);
var inst_4723 = (state_4764[(25)]);
var inst_4732__$1 = cljs.core.first.call(null,inst_4723);
var inst_4733 = cljs.core.async.put_BANG_.call(null,inst_4732__$1,inst_4636,done);
var state_4764__$1 = (function (){var statearr_4840 = state_4764;
(statearr_4840[(23)] = inst_4732__$1);

return statearr_4840;
})();
if(cljs.core.truth_(inst_4733)){
var statearr_4841_4903 = state_4764__$1;
(statearr_4841_4903[(1)] = (39));

} else {
var statearr_4842_4904 = state_4764__$1;
(statearr_4842_4904[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4765 === (8))){
var inst_4648 = (state_4764[(13)]);
var inst_4647 = (state_4764[(14)]);
var inst_4650 = (inst_4648 < inst_4647);
var inst_4651 = inst_4650;
var state_4764__$1 = state_4764;
if(cljs.core.truth_(inst_4651)){
var statearr_4843_4905 = state_4764__$1;
(statearr_4843_4905[(1)] = (10));

} else {
var statearr_4844_4906 = state_4764__$1;
(statearr_4844_4906[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1306__auto___4852,cs,m,dchan,dctr,done))
;
return ((function (switch__1241__auto__,c__1306__auto___4852,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__1242__auto__ = null;
var cljs$core$async$mult_$_state_machine__1242__auto____0 = (function (){
var statearr_4848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4848[(0)] = cljs$core$async$mult_$_state_machine__1242__auto__);

(statearr_4848[(1)] = (1));

return statearr_4848;
});
var cljs$core$async$mult_$_state_machine__1242__auto____1 = (function (state_4764){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_4764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e4849){if((e4849 instanceof Object)){
var ex__1245__auto__ = e4849;
var statearr_4850_4907 = state_4764;
(statearr_4850_4907[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4908 = state_4764;
state_4764 = G__4908;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__1242__auto__ = function(state_4764){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__1242__auto____1.call(this,state_4764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__1242__auto____0;
cljs$core$async$mult_$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__1242__auto____1;
return cljs$core$async$mult_$_state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto___4852,cs,m,dchan,dctr,done))
})();
var state__1308__auto__ = (function (){var statearr_4851 = f__1307__auto__.call(null);
(statearr_4851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___4852);

return statearr_4851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto___4852,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args4909 = [];
var len__3348__auto___4912 = arguments.length;
var i__3349__auto___4913 = (0);
while(true){
if((i__3349__auto___4913 < len__3348__auto___4912)){
args4909.push((arguments[i__3349__auto___4913]));

var G__4914 = (i__3349__auto___4913 + (1));
i__3349__auto___4913 = G__4914;
continue;
} else {
}
break;
}

var G__4911 = args4909.length;
switch (G__4911) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4909.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__3101__auto__ = (((m == null))?null:m);
var m__3102__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3101__auto__)]);
if(!((m__3102__auto__ == null))){
return m__3102__auto__.call(null,m,ch);
} else {
var m__3102__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__3102__auto____$1 == null))){
return m__3102__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__3101__auto__ = (((m == null))?null:m);
var m__3102__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3101__auto__)]);
if(!((m__3102__auto__ == null))){
return m__3102__auto__.call(null,m,ch);
} else {
var m__3102__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__3102__auto____$1 == null))){
return m__3102__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__3101__auto__ = (((m == null))?null:m);
var m__3102__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3101__auto__)]);
if(!((m__3102__auto__ == null))){
return m__3102__auto__.call(null,m);
} else {
var m__3102__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__3102__auto____$1 == null))){
return m__3102__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__3101__auto__ = (((m == null))?null:m);
var m__3102__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3101__auto__)]);
if(!((m__3102__auto__ == null))){
return m__3102__auto__.call(null,m,state_map);
} else {
var m__3102__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__3102__auto____$1 == null))){
return m__3102__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__3101__auto__ = (((m == null))?null:m);
var m__3102__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3101__auto__)]);
if(!((m__3102__auto__ == null))){
return m__3102__auto__.call(null,m,mode);
} else {
var m__3102__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__3102__auto____$1 == null))){
return m__3102__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__3351__auto__ = [];
var len__3348__auto___4926 = arguments.length;
var i__3349__auto___4927 = (0);
while(true){
if((i__3349__auto___4927 < len__3348__auto___4926)){
args__3351__auto__.push((arguments[i__3349__auto___4927]));

var G__4928 = (i__3349__auto___4927 + (1));
i__3349__auto___4927 = G__4928;
continue;
} else {
}
break;
}

var argseq__3352__auto__ = ((((3) < args__3351__auto__.length))?(new cljs.core.IndexedSeq(args__3351__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__3352__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__4920){
var map__4921 = p__4920;
var map__4921__$1 = ((((!((map__4921 == null)))?((((map__4921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4921):map__4921);
var opts = map__4921__$1;
var statearr_4923_4929 = state;
(statearr_4923_4929[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__4921,map__4921__$1,opts){
return (function (val){
var statearr_4924_4930 = state;
(statearr_4924_4930[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__4921,map__4921__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_4925_4931 = state;
(statearr_4925_4931[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq4916){
var G__4917 = cljs.core.first.call(null,seq4916);
var seq4916__$1 = cljs.core.next.call(null,seq4916);
var G__4918 = cljs.core.first.call(null,seq4916__$1);
var seq4916__$2 = cljs.core.next.call(null,seq4916__$1);
var G__4919 = cljs.core.first.call(null,seq4916__$2);
var seq4916__$3 = cljs.core.next.call(null,seq4916__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__4917,G__4918,G__4919,seq4916__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async5095 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5095 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta5096){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta5096 = meta5096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5097,meta5096__$1){
var self__ = this;
var _5097__$1 = this;
return (new cljs.core.async.t_cljs$core$async5095(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta5096__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5097){
var self__ = this;
var _5097__$1 = this;
return self__.meta5096;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5095.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta5096","meta5096",236096742,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5095.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5095";

cljs.core.async.t_cljs$core$async5095.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3052__auto__,writer__3053__auto__,opt__3054__auto__){
return cljs.core._write.call(null,writer__3053__auto__,"cljs.core.async/t_cljs$core$async5095");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async5095 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async5095(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5096){
return (new cljs.core.async.t_cljs$core$async5095(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5096));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async5095(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__1306__auto___5258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto___5258,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto___5258,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_5195){
var state_val_5196 = (state_5195[(1)]);
if((state_val_5196 === (7))){
var inst_5113 = (state_5195[(2)]);
var state_5195__$1 = state_5195;
var statearr_5197_5259 = state_5195__$1;
(statearr_5197_5259[(2)] = inst_5113);

(statearr_5197_5259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (20))){
var inst_5125 = (state_5195[(7)]);
var state_5195__$1 = state_5195;
var statearr_5198_5260 = state_5195__$1;
(statearr_5198_5260[(2)] = inst_5125);

(statearr_5198_5260[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (27))){
var state_5195__$1 = state_5195;
var statearr_5199_5261 = state_5195__$1;
(statearr_5199_5261[(2)] = null);

(statearr_5199_5261[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (1))){
var inst_5101 = (state_5195[(8)]);
var inst_5101__$1 = calc_state.call(null);
var inst_5103 = (inst_5101__$1 == null);
var inst_5104 = cljs.core.not.call(null,inst_5103);
var state_5195__$1 = (function (){var statearr_5200 = state_5195;
(statearr_5200[(8)] = inst_5101__$1);

return statearr_5200;
})();
if(inst_5104){
var statearr_5201_5262 = state_5195__$1;
(statearr_5201_5262[(1)] = (2));

} else {
var statearr_5202_5263 = state_5195__$1;
(statearr_5202_5263[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (24))){
var inst_5148 = (state_5195[(9)]);
var inst_5155 = (state_5195[(10)]);
var inst_5169 = (state_5195[(11)]);
var inst_5169__$1 = inst_5148.call(null,inst_5155);
var state_5195__$1 = (function (){var statearr_5203 = state_5195;
(statearr_5203[(11)] = inst_5169__$1);

return statearr_5203;
})();
if(cljs.core.truth_(inst_5169__$1)){
var statearr_5204_5264 = state_5195__$1;
(statearr_5204_5264[(1)] = (29));

} else {
var statearr_5205_5265 = state_5195__$1;
(statearr_5205_5265[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (4))){
var inst_5116 = (state_5195[(2)]);
var state_5195__$1 = state_5195;
if(cljs.core.truth_(inst_5116)){
var statearr_5206_5266 = state_5195__$1;
(statearr_5206_5266[(1)] = (8));

} else {
var statearr_5207_5267 = state_5195__$1;
(statearr_5207_5267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (15))){
var inst_5142 = (state_5195[(2)]);
var state_5195__$1 = state_5195;
if(cljs.core.truth_(inst_5142)){
var statearr_5208_5268 = state_5195__$1;
(statearr_5208_5268[(1)] = (19));

} else {
var statearr_5209_5269 = state_5195__$1;
(statearr_5209_5269[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (21))){
var inst_5147 = (state_5195[(12)]);
var inst_5147__$1 = (state_5195[(2)]);
var inst_5148 = cljs.core.get.call(null,inst_5147__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5149 = cljs.core.get.call(null,inst_5147__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5150 = cljs.core.get.call(null,inst_5147__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_5195__$1 = (function (){var statearr_5210 = state_5195;
(statearr_5210[(12)] = inst_5147__$1);

(statearr_5210[(9)] = inst_5148);

(statearr_5210[(13)] = inst_5149);

return statearr_5210;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_5195__$1,(22),inst_5150);
} else {
if((state_val_5196 === (31))){
var inst_5177 = (state_5195[(2)]);
var state_5195__$1 = state_5195;
if(cljs.core.truth_(inst_5177)){
var statearr_5211_5270 = state_5195__$1;
(statearr_5211_5270[(1)] = (32));

} else {
var statearr_5212_5271 = state_5195__$1;
(statearr_5212_5271[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (32))){
var inst_5154 = (state_5195[(14)]);
var state_5195__$1 = state_5195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5195__$1,(35),out,inst_5154);
} else {
if((state_val_5196 === (33))){
var inst_5147 = (state_5195[(12)]);
var inst_5125 = inst_5147;
var state_5195__$1 = (function (){var statearr_5213 = state_5195;
(statearr_5213[(7)] = inst_5125);

return statearr_5213;
})();
var statearr_5214_5272 = state_5195__$1;
(statearr_5214_5272[(2)] = null);

(statearr_5214_5272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (13))){
var inst_5125 = (state_5195[(7)]);
var inst_5132 = inst_5125.cljs$lang$protocol_mask$partition0$;
var inst_5133 = (inst_5132 & (64));
var inst_5134 = inst_5125.cljs$core$ISeq$;
var inst_5135 = (inst_5133) || (inst_5134);
var state_5195__$1 = state_5195;
if(cljs.core.truth_(inst_5135)){
var statearr_5215_5273 = state_5195__$1;
(statearr_5215_5273[(1)] = (16));

} else {
var statearr_5216_5274 = state_5195__$1;
(statearr_5216_5274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (22))){
var inst_5154 = (state_5195[(14)]);
var inst_5155 = (state_5195[(10)]);
var inst_5153 = (state_5195[(2)]);
var inst_5154__$1 = cljs.core.nth.call(null,inst_5153,(0),null);
var inst_5155__$1 = cljs.core.nth.call(null,inst_5153,(1),null);
var inst_5156 = (inst_5154__$1 == null);
var inst_5157 = cljs.core._EQ_.call(null,inst_5155__$1,change);
var inst_5158 = (inst_5156) || (inst_5157);
var state_5195__$1 = (function (){var statearr_5217 = state_5195;
(statearr_5217[(14)] = inst_5154__$1);

(statearr_5217[(10)] = inst_5155__$1);

return statearr_5217;
})();
if(cljs.core.truth_(inst_5158)){
var statearr_5218_5275 = state_5195__$1;
(statearr_5218_5275[(1)] = (23));

} else {
var statearr_5219_5276 = state_5195__$1;
(statearr_5219_5276[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (36))){
var inst_5147 = (state_5195[(12)]);
var inst_5125 = inst_5147;
var state_5195__$1 = (function (){var statearr_5220 = state_5195;
(statearr_5220[(7)] = inst_5125);

return statearr_5220;
})();
var statearr_5221_5277 = state_5195__$1;
(statearr_5221_5277[(2)] = null);

(statearr_5221_5277[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (29))){
var inst_5169 = (state_5195[(11)]);
var state_5195__$1 = state_5195;
var statearr_5222_5278 = state_5195__$1;
(statearr_5222_5278[(2)] = inst_5169);

(statearr_5222_5278[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (6))){
var state_5195__$1 = state_5195;
var statearr_5223_5279 = state_5195__$1;
(statearr_5223_5279[(2)] = false);

(statearr_5223_5279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (28))){
var inst_5165 = (state_5195[(2)]);
var inst_5166 = calc_state.call(null);
var inst_5125 = inst_5166;
var state_5195__$1 = (function (){var statearr_5224 = state_5195;
(statearr_5224[(15)] = inst_5165);

(statearr_5224[(7)] = inst_5125);

return statearr_5224;
})();
var statearr_5225_5280 = state_5195__$1;
(statearr_5225_5280[(2)] = null);

(statearr_5225_5280[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (25))){
var inst_5191 = (state_5195[(2)]);
var state_5195__$1 = state_5195;
var statearr_5226_5281 = state_5195__$1;
(statearr_5226_5281[(2)] = inst_5191);

(statearr_5226_5281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (34))){
var inst_5189 = (state_5195[(2)]);
var state_5195__$1 = state_5195;
var statearr_5227_5282 = state_5195__$1;
(statearr_5227_5282[(2)] = inst_5189);

(statearr_5227_5282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (17))){
var state_5195__$1 = state_5195;
var statearr_5228_5283 = state_5195__$1;
(statearr_5228_5283[(2)] = false);

(statearr_5228_5283[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (3))){
var state_5195__$1 = state_5195;
var statearr_5229_5284 = state_5195__$1;
(statearr_5229_5284[(2)] = false);

(statearr_5229_5284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (12))){
var inst_5193 = (state_5195[(2)]);
var state_5195__$1 = state_5195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5195__$1,inst_5193);
} else {
if((state_val_5196 === (2))){
var inst_5101 = (state_5195[(8)]);
var inst_5106 = inst_5101.cljs$lang$protocol_mask$partition0$;
var inst_5107 = (inst_5106 & (64));
var inst_5108 = inst_5101.cljs$core$ISeq$;
var inst_5109 = (inst_5107) || (inst_5108);
var state_5195__$1 = state_5195;
if(cljs.core.truth_(inst_5109)){
var statearr_5230_5285 = state_5195__$1;
(statearr_5230_5285[(1)] = (5));

} else {
var statearr_5231_5286 = state_5195__$1;
(statearr_5231_5286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (23))){
var inst_5154 = (state_5195[(14)]);
var inst_5160 = (inst_5154 == null);
var state_5195__$1 = state_5195;
if(cljs.core.truth_(inst_5160)){
var statearr_5232_5287 = state_5195__$1;
(statearr_5232_5287[(1)] = (26));

} else {
var statearr_5233_5288 = state_5195__$1;
(statearr_5233_5288[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (35))){
var inst_5180 = (state_5195[(2)]);
var state_5195__$1 = state_5195;
if(cljs.core.truth_(inst_5180)){
var statearr_5234_5289 = state_5195__$1;
(statearr_5234_5289[(1)] = (36));

} else {
var statearr_5235_5290 = state_5195__$1;
(statearr_5235_5290[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (19))){
var inst_5125 = (state_5195[(7)]);
var inst_5144 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5125);
var state_5195__$1 = state_5195;
var statearr_5236_5291 = state_5195__$1;
(statearr_5236_5291[(2)] = inst_5144);

(statearr_5236_5291[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (11))){
var inst_5125 = (state_5195[(7)]);
var inst_5129 = (inst_5125 == null);
var inst_5130 = cljs.core.not.call(null,inst_5129);
var state_5195__$1 = state_5195;
if(inst_5130){
var statearr_5237_5292 = state_5195__$1;
(statearr_5237_5292[(1)] = (13));

} else {
var statearr_5238_5293 = state_5195__$1;
(statearr_5238_5293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (9))){
var inst_5101 = (state_5195[(8)]);
var state_5195__$1 = state_5195;
var statearr_5239_5294 = state_5195__$1;
(statearr_5239_5294[(2)] = inst_5101);

(statearr_5239_5294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (5))){
var state_5195__$1 = state_5195;
var statearr_5240_5295 = state_5195__$1;
(statearr_5240_5295[(2)] = true);

(statearr_5240_5295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (14))){
var state_5195__$1 = state_5195;
var statearr_5241_5296 = state_5195__$1;
(statearr_5241_5296[(2)] = false);

(statearr_5241_5296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (26))){
var inst_5155 = (state_5195[(10)]);
var inst_5162 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_5155);
var state_5195__$1 = state_5195;
var statearr_5242_5297 = state_5195__$1;
(statearr_5242_5297[(2)] = inst_5162);

(statearr_5242_5297[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (16))){
var state_5195__$1 = state_5195;
var statearr_5243_5298 = state_5195__$1;
(statearr_5243_5298[(2)] = true);

(statearr_5243_5298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (38))){
var inst_5185 = (state_5195[(2)]);
var state_5195__$1 = state_5195;
var statearr_5244_5299 = state_5195__$1;
(statearr_5244_5299[(2)] = inst_5185);

(statearr_5244_5299[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (30))){
var inst_5148 = (state_5195[(9)]);
var inst_5149 = (state_5195[(13)]);
var inst_5155 = (state_5195[(10)]);
var inst_5172 = cljs.core.empty_QMARK_.call(null,inst_5148);
var inst_5173 = inst_5149.call(null,inst_5155);
var inst_5174 = cljs.core.not.call(null,inst_5173);
var inst_5175 = (inst_5172) && (inst_5174);
var state_5195__$1 = state_5195;
var statearr_5245_5300 = state_5195__$1;
(statearr_5245_5300[(2)] = inst_5175);

(statearr_5245_5300[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (10))){
var inst_5101 = (state_5195[(8)]);
var inst_5121 = (state_5195[(2)]);
var inst_5122 = cljs.core.get.call(null,inst_5121,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5123 = cljs.core.get.call(null,inst_5121,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5124 = cljs.core.get.call(null,inst_5121,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_5125 = inst_5101;
var state_5195__$1 = (function (){var statearr_5246 = state_5195;
(statearr_5246[(16)] = inst_5123);

(statearr_5246[(17)] = inst_5124);

(statearr_5246[(7)] = inst_5125);

(statearr_5246[(18)] = inst_5122);

return statearr_5246;
})();
var statearr_5247_5301 = state_5195__$1;
(statearr_5247_5301[(2)] = null);

(statearr_5247_5301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (18))){
var inst_5139 = (state_5195[(2)]);
var state_5195__$1 = state_5195;
var statearr_5248_5302 = state_5195__$1;
(statearr_5248_5302[(2)] = inst_5139);

(statearr_5248_5302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (37))){
var state_5195__$1 = state_5195;
var statearr_5249_5303 = state_5195__$1;
(statearr_5249_5303[(2)] = null);

(statearr_5249_5303[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5196 === (8))){
var inst_5101 = (state_5195[(8)]);
var inst_5118 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5101);
var state_5195__$1 = state_5195;
var statearr_5250_5304 = state_5195__$1;
(statearr_5250_5304[(2)] = inst_5118);

(statearr_5250_5304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1306__auto___5258,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__1241__auto__,c__1306__auto___5258,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__1242__auto__ = null;
var cljs$core$async$mix_$_state_machine__1242__auto____0 = (function (){
var statearr_5254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5254[(0)] = cljs$core$async$mix_$_state_machine__1242__auto__);

(statearr_5254[(1)] = (1));

return statearr_5254;
});
var cljs$core$async$mix_$_state_machine__1242__auto____1 = (function (state_5195){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_5195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e5255){if((e5255 instanceof Object)){
var ex__1245__auto__ = e5255;
var statearr_5256_5305 = state_5195;
(statearr_5256_5305[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5306 = state_5195;
state_5195 = G__5306;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__1242__auto__ = function(state_5195){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__1242__auto____1.call(this,state_5195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__1242__auto____0;
cljs$core$async$mix_$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__1242__auto____1;
return cljs$core$async$mix_$_state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto___5258,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__1308__auto__ = (function (){var statearr_5257 = f__1307__auto__.call(null);
(statearr_5257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___5258);

return statearr_5257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto___5258,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__3101__auto__ = (((p == null))?null:p);
var m__3102__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3101__auto__)]);
if(!((m__3102__auto__ == null))){
return m__3102__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__3102__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__3102__auto____$1 == null))){
return m__3102__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__3101__auto__ = (((p == null))?null:p);
var m__3102__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3101__auto__)]);
if(!((m__3102__auto__ == null))){
return m__3102__auto__.call(null,p,v,ch);
} else {
var m__3102__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__3102__auto____$1 == null))){
return m__3102__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args5307 = [];
var len__3348__auto___5310 = arguments.length;
var i__3349__auto___5311 = (0);
while(true){
if((i__3349__auto___5311 < len__3348__auto___5310)){
args5307.push((arguments[i__3349__auto___5311]));

var G__5312 = (i__3349__auto___5311 + (1));
i__3349__auto___5311 = G__5312;
continue;
} else {
}
break;
}

var G__5309 = args5307.length;
switch (G__5309) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5307.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__3101__auto__ = (((p == null))?null:p);
var m__3102__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3101__auto__)]);
if(!((m__3102__auto__ == null))){
return m__3102__auto__.call(null,p);
} else {
var m__3102__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__3102__auto____$1 == null))){
return m__3102__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__3101__auto__ = (((p == null))?null:p);
var m__3102__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3101__auto__)]);
if(!((m__3102__auto__ == null))){
return m__3102__auto__.call(null,p,v);
} else {
var m__3102__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__3102__auto____$1 == null))){
return m__3102__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args5315 = [];
var len__3348__auto___5440 = arguments.length;
var i__3349__auto___5441 = (0);
while(true){
if((i__3349__auto___5441 < len__3348__auto___5440)){
args5315.push((arguments[i__3349__auto___5441]));

var G__5442 = (i__3349__auto___5441 + (1));
i__3349__auto___5441 = G__5442;
continue;
} else {
}
break;
}

var G__5317 = args5315.length;
switch (G__5317) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5315.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__2830__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__2830__auto__)){
return or__2830__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__2830__auto__,mults){
return (function (p1__5314_SHARP_){
if(cljs.core.truth_(p1__5314_SHARP_.call(null,topic))){
return p1__5314_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__5314_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__2830__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async5318 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5318 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta5319){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta5319 = meta5319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_5320,meta5319__$1){
var self__ = this;
var _5320__$1 = this;
return (new cljs.core.async.t_cljs$core$async5318(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta5319__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_5320){
var self__ = this;
var _5320__$1 = this;
return self__.meta5319;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5318.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta5319","meta5319",1328524779,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5318.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5318";

cljs.core.async.t_cljs$core$async5318.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3052__auto__,writer__3053__auto__,opt__3054__auto__){
return cljs.core._write.call(null,writer__3053__auto__,"cljs.core.async/t_cljs$core$async5318");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async5318 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async5318(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5319){
return (new cljs.core.async.t_cljs$core$async5318(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5319));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async5318(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__1306__auto___5444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto___5444,mults,ensure_mult,p){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto___5444,mults,ensure_mult,p){
return (function (state_5392){
var state_val_5393 = (state_5392[(1)]);
if((state_val_5393 === (7))){
var inst_5388 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
var statearr_5394_5445 = state_5392__$1;
(statearr_5394_5445[(2)] = inst_5388);

(statearr_5394_5445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (20))){
var state_5392__$1 = state_5392;
var statearr_5395_5446 = state_5392__$1;
(statearr_5395_5446[(2)] = null);

(statearr_5395_5446[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (1))){
var state_5392__$1 = state_5392;
var statearr_5396_5447 = state_5392__$1;
(statearr_5396_5447[(2)] = null);

(statearr_5396_5447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (24))){
var inst_5371 = (state_5392[(7)]);
var inst_5380 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_5371);
var state_5392__$1 = state_5392;
var statearr_5397_5448 = state_5392__$1;
(statearr_5397_5448[(2)] = inst_5380);

(statearr_5397_5448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (4))){
var inst_5323 = (state_5392[(8)]);
var inst_5323__$1 = (state_5392[(2)]);
var inst_5324 = (inst_5323__$1 == null);
var state_5392__$1 = (function (){var statearr_5398 = state_5392;
(statearr_5398[(8)] = inst_5323__$1);

return statearr_5398;
})();
if(cljs.core.truth_(inst_5324)){
var statearr_5399_5449 = state_5392__$1;
(statearr_5399_5449[(1)] = (5));

} else {
var statearr_5400_5450 = state_5392__$1;
(statearr_5400_5450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (15))){
var inst_5365 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
var statearr_5401_5451 = state_5392__$1;
(statearr_5401_5451[(2)] = inst_5365);

(statearr_5401_5451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (21))){
var inst_5385 = (state_5392[(2)]);
var state_5392__$1 = (function (){var statearr_5402 = state_5392;
(statearr_5402[(9)] = inst_5385);

return statearr_5402;
})();
var statearr_5403_5452 = state_5392__$1;
(statearr_5403_5452[(2)] = null);

(statearr_5403_5452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (13))){
var inst_5347 = (state_5392[(10)]);
var inst_5349 = cljs.core.chunked_seq_QMARK_.call(null,inst_5347);
var state_5392__$1 = state_5392;
if(inst_5349){
var statearr_5404_5453 = state_5392__$1;
(statearr_5404_5453[(1)] = (16));

} else {
var statearr_5405_5454 = state_5392__$1;
(statearr_5405_5454[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (22))){
var inst_5377 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
if(cljs.core.truth_(inst_5377)){
var statearr_5406_5455 = state_5392__$1;
(statearr_5406_5455[(1)] = (23));

} else {
var statearr_5407_5456 = state_5392__$1;
(statearr_5407_5456[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (6))){
var inst_5371 = (state_5392[(7)]);
var inst_5323 = (state_5392[(8)]);
var inst_5373 = (state_5392[(11)]);
var inst_5371__$1 = topic_fn.call(null,inst_5323);
var inst_5372 = cljs.core.deref.call(null,mults);
var inst_5373__$1 = cljs.core.get.call(null,inst_5372,inst_5371__$1);
var state_5392__$1 = (function (){var statearr_5408 = state_5392;
(statearr_5408[(7)] = inst_5371__$1);

(statearr_5408[(11)] = inst_5373__$1);

return statearr_5408;
})();
if(cljs.core.truth_(inst_5373__$1)){
var statearr_5409_5457 = state_5392__$1;
(statearr_5409_5457[(1)] = (19));

} else {
var statearr_5410_5458 = state_5392__$1;
(statearr_5410_5458[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (25))){
var inst_5382 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
var statearr_5411_5459 = state_5392__$1;
(statearr_5411_5459[(2)] = inst_5382);

(statearr_5411_5459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (17))){
var inst_5347 = (state_5392[(10)]);
var inst_5356 = cljs.core.first.call(null,inst_5347);
var inst_5357 = cljs.core.async.muxch_STAR_.call(null,inst_5356);
var inst_5358 = cljs.core.async.close_BANG_.call(null,inst_5357);
var inst_5359 = cljs.core.next.call(null,inst_5347);
var inst_5333 = inst_5359;
var inst_5334 = null;
var inst_5335 = (0);
var inst_5336 = (0);
var state_5392__$1 = (function (){var statearr_5412 = state_5392;
(statearr_5412[(12)] = inst_5333);

(statearr_5412[(13)] = inst_5336);

(statearr_5412[(14)] = inst_5335);

(statearr_5412[(15)] = inst_5334);

(statearr_5412[(16)] = inst_5358);

return statearr_5412;
})();
var statearr_5413_5460 = state_5392__$1;
(statearr_5413_5460[(2)] = null);

(statearr_5413_5460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (3))){
var inst_5390 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5392__$1,inst_5390);
} else {
if((state_val_5393 === (12))){
var inst_5367 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
var statearr_5414_5461 = state_5392__$1;
(statearr_5414_5461[(2)] = inst_5367);

(statearr_5414_5461[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (2))){
var state_5392__$1 = state_5392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5392__$1,(4),ch);
} else {
if((state_val_5393 === (23))){
var state_5392__$1 = state_5392;
var statearr_5415_5462 = state_5392__$1;
(statearr_5415_5462[(2)] = null);

(statearr_5415_5462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (19))){
var inst_5323 = (state_5392[(8)]);
var inst_5373 = (state_5392[(11)]);
var inst_5375 = cljs.core.async.muxch_STAR_.call(null,inst_5373);
var state_5392__$1 = state_5392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5392__$1,(22),inst_5375,inst_5323);
} else {
if((state_val_5393 === (11))){
var inst_5333 = (state_5392[(12)]);
var inst_5347 = (state_5392[(10)]);
var inst_5347__$1 = cljs.core.seq.call(null,inst_5333);
var state_5392__$1 = (function (){var statearr_5416 = state_5392;
(statearr_5416[(10)] = inst_5347__$1);

return statearr_5416;
})();
if(inst_5347__$1){
var statearr_5417_5463 = state_5392__$1;
(statearr_5417_5463[(1)] = (13));

} else {
var statearr_5418_5464 = state_5392__$1;
(statearr_5418_5464[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (9))){
var inst_5369 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
var statearr_5419_5465 = state_5392__$1;
(statearr_5419_5465[(2)] = inst_5369);

(statearr_5419_5465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (5))){
var inst_5330 = cljs.core.deref.call(null,mults);
var inst_5331 = cljs.core.vals.call(null,inst_5330);
var inst_5332 = cljs.core.seq.call(null,inst_5331);
var inst_5333 = inst_5332;
var inst_5334 = null;
var inst_5335 = (0);
var inst_5336 = (0);
var state_5392__$1 = (function (){var statearr_5420 = state_5392;
(statearr_5420[(12)] = inst_5333);

(statearr_5420[(13)] = inst_5336);

(statearr_5420[(14)] = inst_5335);

(statearr_5420[(15)] = inst_5334);

return statearr_5420;
})();
var statearr_5421_5466 = state_5392__$1;
(statearr_5421_5466[(2)] = null);

(statearr_5421_5466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (14))){
var state_5392__$1 = state_5392;
var statearr_5425_5467 = state_5392__$1;
(statearr_5425_5467[(2)] = null);

(statearr_5425_5467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (16))){
var inst_5347 = (state_5392[(10)]);
var inst_5351 = cljs.core.chunk_first.call(null,inst_5347);
var inst_5352 = cljs.core.chunk_rest.call(null,inst_5347);
var inst_5353 = cljs.core.count.call(null,inst_5351);
var inst_5333 = inst_5352;
var inst_5334 = inst_5351;
var inst_5335 = inst_5353;
var inst_5336 = (0);
var state_5392__$1 = (function (){var statearr_5426 = state_5392;
(statearr_5426[(12)] = inst_5333);

(statearr_5426[(13)] = inst_5336);

(statearr_5426[(14)] = inst_5335);

(statearr_5426[(15)] = inst_5334);

return statearr_5426;
})();
var statearr_5427_5468 = state_5392__$1;
(statearr_5427_5468[(2)] = null);

(statearr_5427_5468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (10))){
var inst_5333 = (state_5392[(12)]);
var inst_5336 = (state_5392[(13)]);
var inst_5335 = (state_5392[(14)]);
var inst_5334 = (state_5392[(15)]);
var inst_5341 = cljs.core._nth.call(null,inst_5334,inst_5336);
var inst_5342 = cljs.core.async.muxch_STAR_.call(null,inst_5341);
var inst_5343 = cljs.core.async.close_BANG_.call(null,inst_5342);
var inst_5344 = (inst_5336 + (1));
var tmp5422 = inst_5333;
var tmp5423 = inst_5335;
var tmp5424 = inst_5334;
var inst_5333__$1 = tmp5422;
var inst_5334__$1 = tmp5424;
var inst_5335__$1 = tmp5423;
var inst_5336__$1 = inst_5344;
var state_5392__$1 = (function (){var statearr_5428 = state_5392;
(statearr_5428[(12)] = inst_5333__$1);

(statearr_5428[(13)] = inst_5336__$1);

(statearr_5428[(17)] = inst_5343);

(statearr_5428[(14)] = inst_5335__$1);

(statearr_5428[(15)] = inst_5334__$1);

return statearr_5428;
})();
var statearr_5429_5469 = state_5392__$1;
(statearr_5429_5469[(2)] = null);

(statearr_5429_5469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (18))){
var inst_5362 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
var statearr_5430_5470 = state_5392__$1;
(statearr_5430_5470[(2)] = inst_5362);

(statearr_5430_5470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (8))){
var inst_5336 = (state_5392[(13)]);
var inst_5335 = (state_5392[(14)]);
var inst_5338 = (inst_5336 < inst_5335);
var inst_5339 = inst_5338;
var state_5392__$1 = state_5392;
if(cljs.core.truth_(inst_5339)){
var statearr_5431_5471 = state_5392__$1;
(statearr_5431_5471[(1)] = (10));

} else {
var statearr_5432_5472 = state_5392__$1;
(statearr_5432_5472[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1306__auto___5444,mults,ensure_mult,p))
;
return ((function (switch__1241__auto__,c__1306__auto___5444,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__1242__auto__ = null;
var cljs$core$async$state_machine__1242__auto____0 = (function (){
var statearr_5436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5436[(0)] = cljs$core$async$state_machine__1242__auto__);

(statearr_5436[(1)] = (1));

return statearr_5436;
});
var cljs$core$async$state_machine__1242__auto____1 = (function (state_5392){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_5392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e5437){if((e5437 instanceof Object)){
var ex__1245__auto__ = e5437;
var statearr_5438_5473 = state_5392;
(statearr_5438_5473[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5474 = state_5392;
state_5392 = G__5474;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$state_machine__1242__auto__ = function(state_5392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1242__auto____1.call(this,state_5392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1242__auto____0;
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1242__auto____1;
return cljs$core$async$state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto___5444,mults,ensure_mult,p))
})();
var state__1308__auto__ = (function (){var statearr_5439 = f__1307__auto__.call(null);
(statearr_5439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___5444);

return statearr_5439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto___5444,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args5475 = [];
var len__3348__auto___5478 = arguments.length;
var i__3349__auto___5479 = (0);
while(true){
if((i__3349__auto___5479 < len__3348__auto___5478)){
args5475.push((arguments[i__3349__auto___5479]));

var G__5480 = (i__3349__auto___5479 + (1));
i__3349__auto___5479 = G__5480;
continue;
} else {
}
break;
}

var G__5477 = args5475.length;
switch (G__5477) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5475.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args5482 = [];
var len__3348__auto___5485 = arguments.length;
var i__3349__auto___5486 = (0);
while(true){
if((i__3349__auto___5486 < len__3348__auto___5485)){
args5482.push((arguments[i__3349__auto___5486]));

var G__5487 = (i__3349__auto___5486 + (1));
i__3349__auto___5486 = G__5487;
continue;
} else {
}
break;
}

var G__5484 = args5482.length;
switch (G__5484) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5482.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args5489 = [];
var len__3348__auto___5560 = arguments.length;
var i__3349__auto___5561 = (0);
while(true){
if((i__3349__auto___5561 < len__3348__auto___5560)){
args5489.push((arguments[i__3349__auto___5561]));

var G__5562 = (i__3349__auto___5561 + (1));
i__3349__auto___5561 = G__5562;
continue;
} else {
}
break;
}

var G__5491 = args5489.length;
switch (G__5491) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5489.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__1306__auto___5564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto___5564,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto___5564,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_5530){
var state_val_5531 = (state_5530[(1)]);
if((state_val_5531 === (7))){
var state_5530__$1 = state_5530;
var statearr_5532_5565 = state_5530__$1;
(statearr_5532_5565[(2)] = null);

(statearr_5532_5565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5531 === (1))){
var state_5530__$1 = state_5530;
var statearr_5533_5566 = state_5530__$1;
(statearr_5533_5566[(2)] = null);

(statearr_5533_5566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5531 === (4))){
var inst_5494 = (state_5530[(7)]);
var inst_5496 = (inst_5494 < cnt);
var state_5530__$1 = state_5530;
if(cljs.core.truth_(inst_5496)){
var statearr_5534_5567 = state_5530__$1;
(statearr_5534_5567[(1)] = (6));

} else {
var statearr_5535_5568 = state_5530__$1;
(statearr_5535_5568[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5531 === (15))){
var inst_5526 = (state_5530[(2)]);
var state_5530__$1 = state_5530;
var statearr_5536_5569 = state_5530__$1;
(statearr_5536_5569[(2)] = inst_5526);

(statearr_5536_5569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5531 === (13))){
var inst_5519 = cljs.core.async.close_BANG_.call(null,out);
var state_5530__$1 = state_5530;
var statearr_5537_5570 = state_5530__$1;
(statearr_5537_5570[(2)] = inst_5519);

(statearr_5537_5570[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5531 === (6))){
var state_5530__$1 = state_5530;
var statearr_5538_5571 = state_5530__$1;
(statearr_5538_5571[(2)] = null);

(statearr_5538_5571[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5531 === (3))){
var inst_5528 = (state_5530[(2)]);
var state_5530__$1 = state_5530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5530__$1,inst_5528);
} else {
if((state_val_5531 === (12))){
var inst_5516 = (state_5530[(8)]);
var inst_5516__$1 = (state_5530[(2)]);
var inst_5517 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_5516__$1);
var state_5530__$1 = (function (){var statearr_5539 = state_5530;
(statearr_5539[(8)] = inst_5516__$1);

return statearr_5539;
})();
if(cljs.core.truth_(inst_5517)){
var statearr_5540_5572 = state_5530__$1;
(statearr_5540_5572[(1)] = (13));

} else {
var statearr_5541_5573 = state_5530__$1;
(statearr_5541_5573[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5531 === (2))){
var inst_5493 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_5494 = (0);
var state_5530__$1 = (function (){var statearr_5542 = state_5530;
(statearr_5542[(9)] = inst_5493);

(statearr_5542[(7)] = inst_5494);

return statearr_5542;
})();
var statearr_5543_5574 = state_5530__$1;
(statearr_5543_5574[(2)] = null);

(statearr_5543_5574[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5531 === (11))){
var inst_5494 = (state_5530[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_5530,(10),Object,null,(9));
var inst_5503 = chs__$1.call(null,inst_5494);
var inst_5504 = done.call(null,inst_5494);
var inst_5505 = cljs.core.async.take_BANG_.call(null,inst_5503,inst_5504);
var state_5530__$1 = state_5530;
var statearr_5544_5575 = state_5530__$1;
(statearr_5544_5575[(2)] = inst_5505);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5530__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5531 === (9))){
var inst_5494 = (state_5530[(7)]);
var inst_5507 = (state_5530[(2)]);
var inst_5508 = (inst_5494 + (1));
var inst_5494__$1 = inst_5508;
var state_5530__$1 = (function (){var statearr_5545 = state_5530;
(statearr_5545[(10)] = inst_5507);

(statearr_5545[(7)] = inst_5494__$1);

return statearr_5545;
})();
var statearr_5546_5576 = state_5530__$1;
(statearr_5546_5576[(2)] = null);

(statearr_5546_5576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5531 === (5))){
var inst_5514 = (state_5530[(2)]);
var state_5530__$1 = (function (){var statearr_5547 = state_5530;
(statearr_5547[(11)] = inst_5514);

return statearr_5547;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5530__$1,(12),dchan);
} else {
if((state_val_5531 === (14))){
var inst_5516 = (state_5530[(8)]);
var inst_5521 = cljs.core.apply.call(null,f,inst_5516);
var state_5530__$1 = state_5530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5530__$1,(16),out,inst_5521);
} else {
if((state_val_5531 === (16))){
var inst_5523 = (state_5530[(2)]);
var state_5530__$1 = (function (){var statearr_5548 = state_5530;
(statearr_5548[(12)] = inst_5523);

return statearr_5548;
})();
var statearr_5549_5577 = state_5530__$1;
(statearr_5549_5577[(2)] = null);

(statearr_5549_5577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5531 === (10))){
var inst_5498 = (state_5530[(2)]);
var inst_5499 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_5530__$1 = (function (){var statearr_5550 = state_5530;
(statearr_5550[(13)] = inst_5498);

return statearr_5550;
})();
var statearr_5551_5578 = state_5530__$1;
(statearr_5551_5578[(2)] = inst_5499);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5530__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5531 === (8))){
var inst_5512 = (state_5530[(2)]);
var state_5530__$1 = state_5530;
var statearr_5552_5579 = state_5530__$1;
(statearr_5552_5579[(2)] = inst_5512);

(statearr_5552_5579[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1306__auto___5564,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__1241__auto__,c__1306__auto___5564,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__1242__auto__ = null;
var cljs$core$async$state_machine__1242__auto____0 = (function (){
var statearr_5556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5556[(0)] = cljs$core$async$state_machine__1242__auto__);

(statearr_5556[(1)] = (1));

return statearr_5556;
});
var cljs$core$async$state_machine__1242__auto____1 = (function (state_5530){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_5530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e5557){if((e5557 instanceof Object)){
var ex__1245__auto__ = e5557;
var statearr_5558_5580 = state_5530;
(statearr_5558_5580[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5581 = state_5530;
state_5530 = G__5581;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$state_machine__1242__auto__ = function(state_5530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1242__auto____1.call(this,state_5530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1242__auto____0;
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1242__auto____1;
return cljs$core$async$state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto___5564,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__1308__auto__ = (function (){var statearr_5559 = f__1307__auto__.call(null);
(statearr_5559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___5564);

return statearr_5559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto___5564,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args5583 = [];
var len__3348__auto___5639 = arguments.length;
var i__3349__auto___5640 = (0);
while(true){
if((i__3349__auto___5640 < len__3348__auto___5639)){
args5583.push((arguments[i__3349__auto___5640]));

var G__5641 = (i__3349__auto___5640 + (1));
i__3349__auto___5640 = G__5641;
continue;
} else {
}
break;
}

var G__5585 = args5583.length;
switch (G__5585) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5583.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1306__auto___5643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto___5643,out){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto___5643,out){
return (function (state_5615){
var state_val_5616 = (state_5615[(1)]);
if((state_val_5616 === (7))){
var inst_5594 = (state_5615[(7)]);
var inst_5595 = (state_5615[(8)]);
var inst_5594__$1 = (state_5615[(2)]);
var inst_5595__$1 = cljs.core.nth.call(null,inst_5594__$1,(0),null);
var inst_5596 = cljs.core.nth.call(null,inst_5594__$1,(1),null);
var inst_5597 = (inst_5595__$1 == null);
var state_5615__$1 = (function (){var statearr_5617 = state_5615;
(statearr_5617[(9)] = inst_5596);

(statearr_5617[(7)] = inst_5594__$1);

(statearr_5617[(8)] = inst_5595__$1);

return statearr_5617;
})();
if(cljs.core.truth_(inst_5597)){
var statearr_5618_5644 = state_5615__$1;
(statearr_5618_5644[(1)] = (8));

} else {
var statearr_5619_5645 = state_5615__$1;
(statearr_5619_5645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5616 === (1))){
var inst_5586 = cljs.core.vec.call(null,chs);
var inst_5587 = inst_5586;
var state_5615__$1 = (function (){var statearr_5620 = state_5615;
(statearr_5620[(10)] = inst_5587);

return statearr_5620;
})();
var statearr_5621_5646 = state_5615__$1;
(statearr_5621_5646[(2)] = null);

(statearr_5621_5646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5616 === (4))){
var inst_5587 = (state_5615[(10)]);
var state_5615__$1 = state_5615;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5615__$1,(7),inst_5587);
} else {
if((state_val_5616 === (6))){
var inst_5611 = (state_5615[(2)]);
var state_5615__$1 = state_5615;
var statearr_5622_5647 = state_5615__$1;
(statearr_5622_5647[(2)] = inst_5611);

(statearr_5622_5647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5616 === (3))){
var inst_5613 = (state_5615[(2)]);
var state_5615__$1 = state_5615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5615__$1,inst_5613);
} else {
if((state_val_5616 === (2))){
var inst_5587 = (state_5615[(10)]);
var inst_5589 = cljs.core.count.call(null,inst_5587);
var inst_5590 = (inst_5589 > (0));
var state_5615__$1 = state_5615;
if(cljs.core.truth_(inst_5590)){
var statearr_5624_5648 = state_5615__$1;
(statearr_5624_5648[(1)] = (4));

} else {
var statearr_5625_5649 = state_5615__$1;
(statearr_5625_5649[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5616 === (11))){
var inst_5587 = (state_5615[(10)]);
var inst_5604 = (state_5615[(2)]);
var tmp5623 = inst_5587;
var inst_5587__$1 = tmp5623;
var state_5615__$1 = (function (){var statearr_5626 = state_5615;
(statearr_5626[(10)] = inst_5587__$1);

(statearr_5626[(11)] = inst_5604);

return statearr_5626;
})();
var statearr_5627_5650 = state_5615__$1;
(statearr_5627_5650[(2)] = null);

(statearr_5627_5650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5616 === (9))){
var inst_5595 = (state_5615[(8)]);
var state_5615__$1 = state_5615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5615__$1,(11),out,inst_5595);
} else {
if((state_val_5616 === (5))){
var inst_5609 = cljs.core.async.close_BANG_.call(null,out);
var state_5615__$1 = state_5615;
var statearr_5628_5651 = state_5615__$1;
(statearr_5628_5651[(2)] = inst_5609);

(statearr_5628_5651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5616 === (10))){
var inst_5607 = (state_5615[(2)]);
var state_5615__$1 = state_5615;
var statearr_5629_5652 = state_5615__$1;
(statearr_5629_5652[(2)] = inst_5607);

(statearr_5629_5652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5616 === (8))){
var inst_5587 = (state_5615[(10)]);
var inst_5596 = (state_5615[(9)]);
var inst_5594 = (state_5615[(7)]);
var inst_5595 = (state_5615[(8)]);
var inst_5599 = (function (){var cs = inst_5587;
var vec__5592 = inst_5594;
var v = inst_5595;
var c = inst_5596;
return ((function (cs,vec__5592,v,c,inst_5587,inst_5596,inst_5594,inst_5595,state_val_5616,c__1306__auto___5643,out){
return (function (p1__5582_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__5582_SHARP_);
});
;})(cs,vec__5592,v,c,inst_5587,inst_5596,inst_5594,inst_5595,state_val_5616,c__1306__auto___5643,out))
})();
var inst_5600 = cljs.core.filterv.call(null,inst_5599,inst_5587);
var inst_5587__$1 = inst_5600;
var state_5615__$1 = (function (){var statearr_5630 = state_5615;
(statearr_5630[(10)] = inst_5587__$1);

return statearr_5630;
})();
var statearr_5631_5653 = state_5615__$1;
(statearr_5631_5653[(2)] = null);

(statearr_5631_5653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__1306__auto___5643,out))
;
return ((function (switch__1241__auto__,c__1306__auto___5643,out){
return (function() {
var cljs$core$async$state_machine__1242__auto__ = null;
var cljs$core$async$state_machine__1242__auto____0 = (function (){
var statearr_5635 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5635[(0)] = cljs$core$async$state_machine__1242__auto__);

(statearr_5635[(1)] = (1));

return statearr_5635;
});
var cljs$core$async$state_machine__1242__auto____1 = (function (state_5615){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_5615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e5636){if((e5636 instanceof Object)){
var ex__1245__auto__ = e5636;
var statearr_5637_5654 = state_5615;
(statearr_5637_5654[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5655 = state_5615;
state_5615 = G__5655;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$state_machine__1242__auto__ = function(state_5615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1242__auto____1.call(this,state_5615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1242__auto____0;
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1242__auto____1;
return cljs$core$async$state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto___5643,out))
})();
var state__1308__auto__ = (function (){var statearr_5638 = f__1307__auto__.call(null);
(statearr_5638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___5643);

return statearr_5638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto___5643,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args5656 = [];
var len__3348__auto___5705 = arguments.length;
var i__3349__auto___5706 = (0);
while(true){
if((i__3349__auto___5706 < len__3348__auto___5705)){
args5656.push((arguments[i__3349__auto___5706]));

var G__5707 = (i__3349__auto___5706 + (1));
i__3349__auto___5706 = G__5707;
continue;
} else {
}
break;
}

var G__5658 = args5656.length;
switch (G__5658) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5656.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1306__auto___5709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto___5709,out){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto___5709,out){
return (function (state_5682){
var state_val_5683 = (state_5682[(1)]);
if((state_val_5683 === (7))){
var inst_5664 = (state_5682[(7)]);
var inst_5664__$1 = (state_5682[(2)]);
var inst_5665 = (inst_5664__$1 == null);
var inst_5666 = cljs.core.not.call(null,inst_5665);
var state_5682__$1 = (function (){var statearr_5684 = state_5682;
(statearr_5684[(7)] = inst_5664__$1);

return statearr_5684;
})();
if(inst_5666){
var statearr_5685_5710 = state_5682__$1;
(statearr_5685_5710[(1)] = (8));

} else {
var statearr_5686_5711 = state_5682__$1;
(statearr_5686_5711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5683 === (1))){
var inst_5659 = (0);
var state_5682__$1 = (function (){var statearr_5687 = state_5682;
(statearr_5687[(8)] = inst_5659);

return statearr_5687;
})();
var statearr_5688_5712 = state_5682__$1;
(statearr_5688_5712[(2)] = null);

(statearr_5688_5712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5683 === (4))){
var state_5682__$1 = state_5682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5682__$1,(7),ch);
} else {
if((state_val_5683 === (6))){
var inst_5677 = (state_5682[(2)]);
var state_5682__$1 = state_5682;
var statearr_5689_5713 = state_5682__$1;
(statearr_5689_5713[(2)] = inst_5677);

(statearr_5689_5713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5683 === (3))){
var inst_5679 = (state_5682[(2)]);
var inst_5680 = cljs.core.async.close_BANG_.call(null,out);
var state_5682__$1 = (function (){var statearr_5690 = state_5682;
(statearr_5690[(9)] = inst_5679);

return statearr_5690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5682__$1,inst_5680);
} else {
if((state_val_5683 === (2))){
var inst_5659 = (state_5682[(8)]);
var inst_5661 = (inst_5659 < n);
var state_5682__$1 = state_5682;
if(cljs.core.truth_(inst_5661)){
var statearr_5691_5714 = state_5682__$1;
(statearr_5691_5714[(1)] = (4));

} else {
var statearr_5692_5715 = state_5682__$1;
(statearr_5692_5715[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5683 === (11))){
var inst_5659 = (state_5682[(8)]);
var inst_5669 = (state_5682[(2)]);
var inst_5670 = (inst_5659 + (1));
var inst_5659__$1 = inst_5670;
var state_5682__$1 = (function (){var statearr_5693 = state_5682;
(statearr_5693[(10)] = inst_5669);

(statearr_5693[(8)] = inst_5659__$1);

return statearr_5693;
})();
var statearr_5694_5716 = state_5682__$1;
(statearr_5694_5716[(2)] = null);

(statearr_5694_5716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5683 === (9))){
var state_5682__$1 = state_5682;
var statearr_5695_5717 = state_5682__$1;
(statearr_5695_5717[(2)] = null);

(statearr_5695_5717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5683 === (5))){
var state_5682__$1 = state_5682;
var statearr_5696_5718 = state_5682__$1;
(statearr_5696_5718[(2)] = null);

(statearr_5696_5718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5683 === (10))){
var inst_5674 = (state_5682[(2)]);
var state_5682__$1 = state_5682;
var statearr_5697_5719 = state_5682__$1;
(statearr_5697_5719[(2)] = inst_5674);

(statearr_5697_5719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5683 === (8))){
var inst_5664 = (state_5682[(7)]);
var state_5682__$1 = state_5682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5682__$1,(11),out,inst_5664);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__1306__auto___5709,out))
;
return ((function (switch__1241__auto__,c__1306__auto___5709,out){
return (function() {
var cljs$core$async$state_machine__1242__auto__ = null;
var cljs$core$async$state_machine__1242__auto____0 = (function (){
var statearr_5701 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5701[(0)] = cljs$core$async$state_machine__1242__auto__);

(statearr_5701[(1)] = (1));

return statearr_5701;
});
var cljs$core$async$state_machine__1242__auto____1 = (function (state_5682){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_5682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e5702){if((e5702 instanceof Object)){
var ex__1245__auto__ = e5702;
var statearr_5703_5720 = state_5682;
(statearr_5703_5720[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5721 = state_5682;
state_5682 = G__5721;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$state_machine__1242__auto__ = function(state_5682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1242__auto____1.call(this,state_5682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1242__auto____0;
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1242__auto____1;
return cljs$core$async$state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto___5709,out))
})();
var state__1308__auto__ = (function (){var statearr_5704 = f__1307__auto__.call(null);
(statearr_5704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___5709);

return statearr_5704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto___5709,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async5729 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5729 = (function (map_LT_,f,ch,meta5730){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta5730 = meta5730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async5729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5731,meta5730__$1){
var self__ = this;
var _5731__$1 = this;
return (new cljs.core.async.t_cljs$core$async5729(self__.map_LT_,self__.f,self__.ch,meta5730__$1));
});

cljs.core.async.t_cljs$core$async5729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5731){
var self__ = this;
var _5731__$1 = this;
return self__.meta5730;
});

cljs.core.async.t_cljs$core$async5729.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async5729.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5729.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5729.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async5729.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async5732 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5732 = (function (map_LT_,f,ch,meta5730,_,fn1,meta5733){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta5730 = meta5730;
this._ = _;
this.fn1 = fn1;
this.meta5733 = meta5733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async5732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_5734,meta5733__$1){
var self__ = this;
var _5734__$1 = this;
return (new cljs.core.async.t_cljs$core$async5732(self__.map_LT_,self__.f,self__.ch,self__.meta5730,self__._,self__.fn1,meta5733__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async5732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_5734){
var self__ = this;
var _5734__$1 = this;
return self__.meta5733;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5732.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async5732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__5722_SHARP_){
return f1.call(null,(((p1__5722_SHARP_ == null))?null:self__.f.call(null,p1__5722_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async5732.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5730","meta5730",-156567013,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async5729","cljs.core.async/t_cljs$core$async5729",-513209281,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta5733","meta5733",-985472476,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5732.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5732";

cljs.core.async.t_cljs$core$async5732.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__3052__auto__,writer__3053__auto__,opt__3054__auto__){
return cljs.core._write.call(null,writer__3053__auto__,"cljs.core.async/t_cljs$core$async5732");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async5732 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5732(map_LT___$1,f__$1,ch__$1,meta5730__$1,___$2,fn1__$1,meta5733){
return (new cljs.core.async.t_cljs$core$async5732(map_LT___$1,f__$1,ch__$1,meta5730__$1,___$2,fn1__$1,meta5733));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async5732(self__.map_LT_,self__.f,self__.ch,self__.meta5730,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__2822__auto__ = ret;
if(cljs.core.truth_(and__2822__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__2822__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async5729.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async5729.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async5729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5730","meta5730",-156567013,null)], null);
});

cljs.core.async.t_cljs$core$async5729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5729";

cljs.core.async.t_cljs$core$async5729.cljs$lang$ctorPrWriter = (function (this__3052__auto__,writer__3053__auto__,opt__3054__auto__){
return cljs.core._write.call(null,writer__3053__auto__,"cljs.core.async/t_cljs$core$async5729");
});

cljs.core.async.__GT_t_cljs$core$async5729 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5729(map_LT___$1,f__$1,ch__$1,meta5730){
return (new cljs.core.async.t_cljs$core$async5729(map_LT___$1,f__$1,ch__$1,meta5730));
});

}

return (new cljs.core.async.t_cljs$core$async5729(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async5738 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5738 = (function (map_GT_,f,ch,meta5739){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta5739 = meta5739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async5738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5740,meta5739__$1){
var self__ = this;
var _5740__$1 = this;
return (new cljs.core.async.t_cljs$core$async5738(self__.map_GT_,self__.f,self__.ch,meta5739__$1));
});

cljs.core.async.t_cljs$core$async5738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5740){
var self__ = this;
var _5740__$1 = this;
return self__.meta5739;
});

cljs.core.async.t_cljs$core$async5738.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async5738.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5738.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async5738.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5738.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async5738.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async5738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5739","meta5739",1082858496,null)], null);
});

cljs.core.async.t_cljs$core$async5738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5738";

cljs.core.async.t_cljs$core$async5738.cljs$lang$ctorPrWriter = (function (this__3052__auto__,writer__3053__auto__,opt__3054__auto__){
return cljs.core._write.call(null,writer__3053__auto__,"cljs.core.async/t_cljs$core$async5738");
});

cljs.core.async.__GT_t_cljs$core$async5738 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async5738(map_GT___$1,f__$1,ch__$1,meta5739){
return (new cljs.core.async.t_cljs$core$async5738(map_GT___$1,f__$1,ch__$1,meta5739));
});

}

return (new cljs.core.async.t_cljs$core$async5738(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async5744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5744 = (function (filter_GT_,p,ch,meta5745){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta5745 = meta5745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async5744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5746,meta5745__$1){
var self__ = this;
var _5746__$1 = this;
return (new cljs.core.async.t_cljs$core$async5744(self__.filter_GT_,self__.p,self__.ch,meta5745__$1));
});

cljs.core.async.t_cljs$core$async5744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5746){
var self__ = this;
var _5746__$1 = this;
return self__.meta5745;
});

cljs.core.async.t_cljs$core$async5744.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async5744.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5744.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5744.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async5744.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5744.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async5744.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async5744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5745","meta5745",86161597,null)], null);
});

cljs.core.async.t_cljs$core$async5744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5744";

cljs.core.async.t_cljs$core$async5744.cljs$lang$ctorPrWriter = (function (this__3052__auto__,writer__3053__auto__,opt__3054__auto__){
return cljs.core._write.call(null,writer__3053__auto__,"cljs.core.async/t_cljs$core$async5744");
});

cljs.core.async.__GT_t_cljs$core$async5744 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async5744(filter_GT___$1,p__$1,ch__$1,meta5745){
return (new cljs.core.async.t_cljs$core$async5744(filter_GT___$1,p__$1,ch__$1,meta5745));
});

}

return (new cljs.core.async.t_cljs$core$async5744(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args5747 = [];
var len__3348__auto___5791 = arguments.length;
var i__3349__auto___5792 = (0);
while(true){
if((i__3349__auto___5792 < len__3348__auto___5791)){
args5747.push((arguments[i__3349__auto___5792]));

var G__5793 = (i__3349__auto___5792 + (1));
i__3349__auto___5792 = G__5793;
continue;
} else {
}
break;
}

var G__5749 = args5747.length;
switch (G__5749) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5747.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1306__auto___5795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto___5795,out){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto___5795,out){
return (function (state_5770){
var state_val_5771 = (state_5770[(1)]);
if((state_val_5771 === (7))){
var inst_5766 = (state_5770[(2)]);
var state_5770__$1 = state_5770;
var statearr_5772_5796 = state_5770__$1;
(statearr_5772_5796[(2)] = inst_5766);

(statearr_5772_5796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5771 === (1))){
var state_5770__$1 = state_5770;
var statearr_5773_5797 = state_5770__$1;
(statearr_5773_5797[(2)] = null);

(statearr_5773_5797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5771 === (4))){
var inst_5752 = (state_5770[(7)]);
var inst_5752__$1 = (state_5770[(2)]);
var inst_5753 = (inst_5752__$1 == null);
var state_5770__$1 = (function (){var statearr_5774 = state_5770;
(statearr_5774[(7)] = inst_5752__$1);

return statearr_5774;
})();
if(cljs.core.truth_(inst_5753)){
var statearr_5775_5798 = state_5770__$1;
(statearr_5775_5798[(1)] = (5));

} else {
var statearr_5776_5799 = state_5770__$1;
(statearr_5776_5799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5771 === (6))){
var inst_5752 = (state_5770[(7)]);
var inst_5757 = p.call(null,inst_5752);
var state_5770__$1 = state_5770;
if(cljs.core.truth_(inst_5757)){
var statearr_5777_5800 = state_5770__$1;
(statearr_5777_5800[(1)] = (8));

} else {
var statearr_5778_5801 = state_5770__$1;
(statearr_5778_5801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5771 === (3))){
var inst_5768 = (state_5770[(2)]);
var state_5770__$1 = state_5770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5770__$1,inst_5768);
} else {
if((state_val_5771 === (2))){
var state_5770__$1 = state_5770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5770__$1,(4),ch);
} else {
if((state_val_5771 === (11))){
var inst_5760 = (state_5770[(2)]);
var state_5770__$1 = state_5770;
var statearr_5779_5802 = state_5770__$1;
(statearr_5779_5802[(2)] = inst_5760);

(statearr_5779_5802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5771 === (9))){
var state_5770__$1 = state_5770;
var statearr_5780_5803 = state_5770__$1;
(statearr_5780_5803[(2)] = null);

(statearr_5780_5803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5771 === (5))){
var inst_5755 = cljs.core.async.close_BANG_.call(null,out);
var state_5770__$1 = state_5770;
var statearr_5781_5804 = state_5770__$1;
(statearr_5781_5804[(2)] = inst_5755);

(statearr_5781_5804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5771 === (10))){
var inst_5763 = (state_5770[(2)]);
var state_5770__$1 = (function (){var statearr_5782 = state_5770;
(statearr_5782[(8)] = inst_5763);

return statearr_5782;
})();
var statearr_5783_5805 = state_5770__$1;
(statearr_5783_5805[(2)] = null);

(statearr_5783_5805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5771 === (8))){
var inst_5752 = (state_5770[(7)]);
var state_5770__$1 = state_5770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5770__$1,(11),out,inst_5752);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__1306__auto___5795,out))
;
return ((function (switch__1241__auto__,c__1306__auto___5795,out){
return (function() {
var cljs$core$async$state_machine__1242__auto__ = null;
var cljs$core$async$state_machine__1242__auto____0 = (function (){
var statearr_5787 = [null,null,null,null,null,null,null,null,null];
(statearr_5787[(0)] = cljs$core$async$state_machine__1242__auto__);

(statearr_5787[(1)] = (1));

return statearr_5787;
});
var cljs$core$async$state_machine__1242__auto____1 = (function (state_5770){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_5770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e5788){if((e5788 instanceof Object)){
var ex__1245__auto__ = e5788;
var statearr_5789_5806 = state_5770;
(statearr_5789_5806[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5807 = state_5770;
state_5770 = G__5807;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$state_machine__1242__auto__ = function(state_5770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1242__auto____1.call(this,state_5770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1242__auto____0;
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1242__auto____1;
return cljs$core$async$state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto___5795,out))
})();
var state__1308__auto__ = (function (){var statearr_5790 = f__1307__auto__.call(null);
(statearr_5790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___5795);

return statearr_5790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto___5795,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args5808 = [];
var len__3348__auto___5811 = arguments.length;
var i__3349__auto___5812 = (0);
while(true){
if((i__3349__auto___5812 < len__3348__auto___5811)){
args5808.push((arguments[i__3349__auto___5812]));

var G__5813 = (i__3349__auto___5812 + (1));
i__3349__auto___5812 = G__5813;
continue;
} else {
}
break;
}

var G__5810 = args5808.length;
switch (G__5810) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5808.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__1306__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto__){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto__){
return (function (state_5980){
var state_val_5981 = (state_5980[(1)]);
if((state_val_5981 === (7))){
var inst_5976 = (state_5980[(2)]);
var state_5980__$1 = state_5980;
var statearr_5982_6023 = state_5980__$1;
(statearr_5982_6023[(2)] = inst_5976);

(statearr_5982_6023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (20))){
var inst_5946 = (state_5980[(7)]);
var inst_5957 = (state_5980[(2)]);
var inst_5958 = cljs.core.next.call(null,inst_5946);
var inst_5932 = inst_5958;
var inst_5933 = null;
var inst_5934 = (0);
var inst_5935 = (0);
var state_5980__$1 = (function (){var statearr_5983 = state_5980;
(statearr_5983[(8)] = inst_5957);

(statearr_5983[(9)] = inst_5934);

(statearr_5983[(10)] = inst_5935);

(statearr_5983[(11)] = inst_5933);

(statearr_5983[(12)] = inst_5932);

return statearr_5983;
})();
var statearr_5984_6024 = state_5980__$1;
(statearr_5984_6024[(2)] = null);

(statearr_5984_6024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (1))){
var state_5980__$1 = state_5980;
var statearr_5985_6025 = state_5980__$1;
(statearr_5985_6025[(2)] = null);

(statearr_5985_6025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (4))){
var inst_5921 = (state_5980[(13)]);
var inst_5921__$1 = (state_5980[(2)]);
var inst_5922 = (inst_5921__$1 == null);
var state_5980__$1 = (function (){var statearr_5986 = state_5980;
(statearr_5986[(13)] = inst_5921__$1);

return statearr_5986;
})();
if(cljs.core.truth_(inst_5922)){
var statearr_5987_6026 = state_5980__$1;
(statearr_5987_6026[(1)] = (5));

} else {
var statearr_5988_6027 = state_5980__$1;
(statearr_5988_6027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (15))){
var state_5980__$1 = state_5980;
var statearr_5992_6028 = state_5980__$1;
(statearr_5992_6028[(2)] = null);

(statearr_5992_6028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (21))){
var state_5980__$1 = state_5980;
var statearr_5993_6029 = state_5980__$1;
(statearr_5993_6029[(2)] = null);

(statearr_5993_6029[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (13))){
var inst_5934 = (state_5980[(9)]);
var inst_5935 = (state_5980[(10)]);
var inst_5933 = (state_5980[(11)]);
var inst_5932 = (state_5980[(12)]);
var inst_5942 = (state_5980[(2)]);
var inst_5943 = (inst_5935 + (1));
var tmp5989 = inst_5934;
var tmp5990 = inst_5933;
var tmp5991 = inst_5932;
var inst_5932__$1 = tmp5991;
var inst_5933__$1 = tmp5990;
var inst_5934__$1 = tmp5989;
var inst_5935__$1 = inst_5943;
var state_5980__$1 = (function (){var statearr_5994 = state_5980;
(statearr_5994[(9)] = inst_5934__$1);

(statearr_5994[(10)] = inst_5935__$1);

(statearr_5994[(11)] = inst_5933__$1);

(statearr_5994[(12)] = inst_5932__$1);

(statearr_5994[(14)] = inst_5942);

return statearr_5994;
})();
var statearr_5995_6030 = state_5980__$1;
(statearr_5995_6030[(2)] = null);

(statearr_5995_6030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (22))){
var state_5980__$1 = state_5980;
var statearr_5996_6031 = state_5980__$1;
(statearr_5996_6031[(2)] = null);

(statearr_5996_6031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (6))){
var inst_5921 = (state_5980[(13)]);
var inst_5930 = f.call(null,inst_5921);
var inst_5931 = cljs.core.seq.call(null,inst_5930);
var inst_5932 = inst_5931;
var inst_5933 = null;
var inst_5934 = (0);
var inst_5935 = (0);
var state_5980__$1 = (function (){var statearr_5997 = state_5980;
(statearr_5997[(9)] = inst_5934);

(statearr_5997[(10)] = inst_5935);

(statearr_5997[(11)] = inst_5933);

(statearr_5997[(12)] = inst_5932);

return statearr_5997;
})();
var statearr_5998_6032 = state_5980__$1;
(statearr_5998_6032[(2)] = null);

(statearr_5998_6032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (17))){
var inst_5946 = (state_5980[(7)]);
var inst_5950 = cljs.core.chunk_first.call(null,inst_5946);
var inst_5951 = cljs.core.chunk_rest.call(null,inst_5946);
var inst_5952 = cljs.core.count.call(null,inst_5950);
var inst_5932 = inst_5951;
var inst_5933 = inst_5950;
var inst_5934 = inst_5952;
var inst_5935 = (0);
var state_5980__$1 = (function (){var statearr_5999 = state_5980;
(statearr_5999[(9)] = inst_5934);

(statearr_5999[(10)] = inst_5935);

(statearr_5999[(11)] = inst_5933);

(statearr_5999[(12)] = inst_5932);

return statearr_5999;
})();
var statearr_6000_6033 = state_5980__$1;
(statearr_6000_6033[(2)] = null);

(statearr_6000_6033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (3))){
var inst_5978 = (state_5980[(2)]);
var state_5980__$1 = state_5980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5980__$1,inst_5978);
} else {
if((state_val_5981 === (12))){
var inst_5966 = (state_5980[(2)]);
var state_5980__$1 = state_5980;
var statearr_6001_6034 = state_5980__$1;
(statearr_6001_6034[(2)] = inst_5966);

(statearr_6001_6034[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (2))){
var state_5980__$1 = state_5980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5980__$1,(4),in$);
} else {
if((state_val_5981 === (23))){
var inst_5974 = (state_5980[(2)]);
var state_5980__$1 = state_5980;
var statearr_6002_6035 = state_5980__$1;
(statearr_6002_6035[(2)] = inst_5974);

(statearr_6002_6035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (19))){
var inst_5961 = (state_5980[(2)]);
var state_5980__$1 = state_5980;
var statearr_6003_6036 = state_5980__$1;
(statearr_6003_6036[(2)] = inst_5961);

(statearr_6003_6036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (11))){
var inst_5946 = (state_5980[(7)]);
var inst_5932 = (state_5980[(12)]);
var inst_5946__$1 = cljs.core.seq.call(null,inst_5932);
var state_5980__$1 = (function (){var statearr_6004 = state_5980;
(statearr_6004[(7)] = inst_5946__$1);

return statearr_6004;
})();
if(inst_5946__$1){
var statearr_6005_6037 = state_5980__$1;
(statearr_6005_6037[(1)] = (14));

} else {
var statearr_6006_6038 = state_5980__$1;
(statearr_6006_6038[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (9))){
var inst_5968 = (state_5980[(2)]);
var inst_5969 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_5980__$1 = (function (){var statearr_6007 = state_5980;
(statearr_6007[(15)] = inst_5968);

return statearr_6007;
})();
if(cljs.core.truth_(inst_5969)){
var statearr_6008_6039 = state_5980__$1;
(statearr_6008_6039[(1)] = (21));

} else {
var statearr_6009_6040 = state_5980__$1;
(statearr_6009_6040[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (5))){
var inst_5924 = cljs.core.async.close_BANG_.call(null,out);
var state_5980__$1 = state_5980;
var statearr_6010_6041 = state_5980__$1;
(statearr_6010_6041[(2)] = inst_5924);

(statearr_6010_6041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (14))){
var inst_5946 = (state_5980[(7)]);
var inst_5948 = cljs.core.chunked_seq_QMARK_.call(null,inst_5946);
var state_5980__$1 = state_5980;
if(inst_5948){
var statearr_6011_6042 = state_5980__$1;
(statearr_6011_6042[(1)] = (17));

} else {
var statearr_6012_6043 = state_5980__$1;
(statearr_6012_6043[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (16))){
var inst_5964 = (state_5980[(2)]);
var state_5980__$1 = state_5980;
var statearr_6013_6044 = state_5980__$1;
(statearr_6013_6044[(2)] = inst_5964);

(statearr_6013_6044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5981 === (10))){
var inst_5935 = (state_5980[(10)]);
var inst_5933 = (state_5980[(11)]);
var inst_5940 = cljs.core._nth.call(null,inst_5933,inst_5935);
var state_5980__$1 = state_5980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5980__$1,(13),out,inst_5940);
} else {
if((state_val_5981 === (18))){
var inst_5946 = (state_5980[(7)]);
var inst_5955 = cljs.core.first.call(null,inst_5946);
var state_5980__$1 = state_5980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5980__$1,(20),out,inst_5955);
} else {
if((state_val_5981 === (8))){
var inst_5934 = (state_5980[(9)]);
var inst_5935 = (state_5980[(10)]);
var inst_5937 = (inst_5935 < inst_5934);
var inst_5938 = inst_5937;
var state_5980__$1 = state_5980;
if(cljs.core.truth_(inst_5938)){
var statearr_6014_6045 = state_5980__$1;
(statearr_6014_6045[(1)] = (10));

} else {
var statearr_6015_6046 = state_5980__$1;
(statearr_6015_6046[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1306__auto__))
;
return ((function (switch__1241__auto__,c__1306__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__1242__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__1242__auto____0 = (function (){
var statearr_6019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6019[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__1242__auto__);

(statearr_6019[(1)] = (1));

return statearr_6019;
});
var cljs$core$async$mapcat_STAR__$_state_machine__1242__auto____1 = (function (state_5980){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_5980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e6020){if((e6020 instanceof Object)){
var ex__1245__auto__ = e6020;
var statearr_6021_6047 = state_5980;
(statearr_6021_6047[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6048 = state_5980;
state_5980 = G__6048;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__1242__auto__ = function(state_5980){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__1242__auto____1.call(this,state_5980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__1242__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__1242__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto__))
})();
var state__1308__auto__ = (function (){var statearr_6022 = f__1307__auto__.call(null);
(statearr_6022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto__);

return statearr_6022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto__))
);

return c__1306__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args6049 = [];
var len__3348__auto___6052 = arguments.length;
var i__3349__auto___6053 = (0);
while(true){
if((i__3349__auto___6053 < len__3348__auto___6052)){
args6049.push((arguments[i__3349__auto___6053]));

var G__6054 = (i__3349__auto___6053 + (1));
i__3349__auto___6053 = G__6054;
continue;
} else {
}
break;
}

var G__6051 = args6049.length;
switch (G__6051) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6049.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args6056 = [];
var len__3348__auto___6059 = arguments.length;
var i__3349__auto___6060 = (0);
while(true){
if((i__3349__auto___6060 < len__3348__auto___6059)){
args6056.push((arguments[i__3349__auto___6060]));

var G__6061 = (i__3349__auto___6060 + (1));
i__3349__auto___6060 = G__6061;
continue;
} else {
}
break;
}

var G__6058 = args6056.length;
switch (G__6058) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6056.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args6063 = [];
var len__3348__auto___6114 = arguments.length;
var i__3349__auto___6115 = (0);
while(true){
if((i__3349__auto___6115 < len__3348__auto___6114)){
args6063.push((arguments[i__3349__auto___6115]));

var G__6116 = (i__3349__auto___6115 + (1));
i__3349__auto___6115 = G__6116;
continue;
} else {
}
break;
}

var G__6065 = args6063.length;
switch (G__6065) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6063.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1306__auto___6118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto___6118,out){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto___6118,out){
return (function (state_6089){
var state_val_6090 = (state_6089[(1)]);
if((state_val_6090 === (7))){
var inst_6084 = (state_6089[(2)]);
var state_6089__$1 = state_6089;
var statearr_6091_6119 = state_6089__$1;
(statearr_6091_6119[(2)] = inst_6084);

(statearr_6091_6119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6090 === (1))){
var inst_6066 = null;
var state_6089__$1 = (function (){var statearr_6092 = state_6089;
(statearr_6092[(7)] = inst_6066);

return statearr_6092;
})();
var statearr_6093_6120 = state_6089__$1;
(statearr_6093_6120[(2)] = null);

(statearr_6093_6120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6090 === (4))){
var inst_6069 = (state_6089[(8)]);
var inst_6069__$1 = (state_6089[(2)]);
var inst_6070 = (inst_6069__$1 == null);
var inst_6071 = cljs.core.not.call(null,inst_6070);
var state_6089__$1 = (function (){var statearr_6094 = state_6089;
(statearr_6094[(8)] = inst_6069__$1);

return statearr_6094;
})();
if(inst_6071){
var statearr_6095_6121 = state_6089__$1;
(statearr_6095_6121[(1)] = (5));

} else {
var statearr_6096_6122 = state_6089__$1;
(statearr_6096_6122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6090 === (6))){
var state_6089__$1 = state_6089;
var statearr_6097_6123 = state_6089__$1;
(statearr_6097_6123[(2)] = null);

(statearr_6097_6123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6090 === (3))){
var inst_6086 = (state_6089[(2)]);
var inst_6087 = cljs.core.async.close_BANG_.call(null,out);
var state_6089__$1 = (function (){var statearr_6098 = state_6089;
(statearr_6098[(9)] = inst_6086);

return statearr_6098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6089__$1,inst_6087);
} else {
if((state_val_6090 === (2))){
var state_6089__$1 = state_6089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6089__$1,(4),ch);
} else {
if((state_val_6090 === (11))){
var inst_6069 = (state_6089[(8)]);
var inst_6078 = (state_6089[(2)]);
var inst_6066 = inst_6069;
var state_6089__$1 = (function (){var statearr_6099 = state_6089;
(statearr_6099[(7)] = inst_6066);

(statearr_6099[(10)] = inst_6078);

return statearr_6099;
})();
var statearr_6100_6124 = state_6089__$1;
(statearr_6100_6124[(2)] = null);

(statearr_6100_6124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6090 === (9))){
var inst_6069 = (state_6089[(8)]);
var state_6089__$1 = state_6089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6089__$1,(11),out,inst_6069);
} else {
if((state_val_6090 === (5))){
var inst_6069 = (state_6089[(8)]);
var inst_6066 = (state_6089[(7)]);
var inst_6073 = cljs.core._EQ_.call(null,inst_6069,inst_6066);
var state_6089__$1 = state_6089;
if(inst_6073){
var statearr_6102_6125 = state_6089__$1;
(statearr_6102_6125[(1)] = (8));

} else {
var statearr_6103_6126 = state_6089__$1;
(statearr_6103_6126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6090 === (10))){
var inst_6081 = (state_6089[(2)]);
var state_6089__$1 = state_6089;
var statearr_6104_6127 = state_6089__$1;
(statearr_6104_6127[(2)] = inst_6081);

(statearr_6104_6127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6090 === (8))){
var inst_6066 = (state_6089[(7)]);
var tmp6101 = inst_6066;
var inst_6066__$1 = tmp6101;
var state_6089__$1 = (function (){var statearr_6105 = state_6089;
(statearr_6105[(7)] = inst_6066__$1);

return statearr_6105;
})();
var statearr_6106_6128 = state_6089__$1;
(statearr_6106_6128[(2)] = null);

(statearr_6106_6128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__1306__auto___6118,out))
;
return ((function (switch__1241__auto__,c__1306__auto___6118,out){
return (function() {
var cljs$core$async$state_machine__1242__auto__ = null;
var cljs$core$async$state_machine__1242__auto____0 = (function (){
var statearr_6110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6110[(0)] = cljs$core$async$state_machine__1242__auto__);

(statearr_6110[(1)] = (1));

return statearr_6110;
});
var cljs$core$async$state_machine__1242__auto____1 = (function (state_6089){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_6089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e6111){if((e6111 instanceof Object)){
var ex__1245__auto__ = e6111;
var statearr_6112_6129 = state_6089;
(statearr_6112_6129[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6130 = state_6089;
state_6089 = G__6130;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$state_machine__1242__auto__ = function(state_6089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1242__auto____1.call(this,state_6089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1242__auto____0;
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1242__auto____1;
return cljs$core$async$state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto___6118,out))
})();
var state__1308__auto__ = (function (){var statearr_6113 = f__1307__auto__.call(null);
(statearr_6113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___6118);

return statearr_6113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto___6118,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args6131 = [];
var len__3348__auto___6201 = arguments.length;
var i__3349__auto___6202 = (0);
while(true){
if((i__3349__auto___6202 < len__3348__auto___6201)){
args6131.push((arguments[i__3349__auto___6202]));

var G__6203 = (i__3349__auto___6202 + (1));
i__3349__auto___6202 = G__6203;
continue;
} else {
}
break;
}

var G__6133 = args6131.length;
switch (G__6133) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6131.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1306__auto___6205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto___6205,out){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto___6205,out){
return (function (state_6171){
var state_val_6172 = (state_6171[(1)]);
if((state_val_6172 === (7))){
var inst_6167 = (state_6171[(2)]);
var state_6171__$1 = state_6171;
var statearr_6173_6206 = state_6171__$1;
(statearr_6173_6206[(2)] = inst_6167);

(statearr_6173_6206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6172 === (1))){
var inst_6134 = (new Array(n));
var inst_6135 = inst_6134;
var inst_6136 = (0);
var state_6171__$1 = (function (){var statearr_6174 = state_6171;
(statearr_6174[(7)] = inst_6136);

(statearr_6174[(8)] = inst_6135);

return statearr_6174;
})();
var statearr_6175_6207 = state_6171__$1;
(statearr_6175_6207[(2)] = null);

(statearr_6175_6207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6172 === (4))){
var inst_6139 = (state_6171[(9)]);
var inst_6139__$1 = (state_6171[(2)]);
var inst_6140 = (inst_6139__$1 == null);
var inst_6141 = cljs.core.not.call(null,inst_6140);
var state_6171__$1 = (function (){var statearr_6176 = state_6171;
(statearr_6176[(9)] = inst_6139__$1);

return statearr_6176;
})();
if(inst_6141){
var statearr_6177_6208 = state_6171__$1;
(statearr_6177_6208[(1)] = (5));

} else {
var statearr_6178_6209 = state_6171__$1;
(statearr_6178_6209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6172 === (15))){
var inst_6161 = (state_6171[(2)]);
var state_6171__$1 = state_6171;
var statearr_6179_6210 = state_6171__$1;
(statearr_6179_6210[(2)] = inst_6161);

(statearr_6179_6210[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6172 === (13))){
var state_6171__$1 = state_6171;
var statearr_6180_6211 = state_6171__$1;
(statearr_6180_6211[(2)] = null);

(statearr_6180_6211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6172 === (6))){
var inst_6136 = (state_6171[(7)]);
var inst_6157 = (inst_6136 > (0));
var state_6171__$1 = state_6171;
if(cljs.core.truth_(inst_6157)){
var statearr_6181_6212 = state_6171__$1;
(statearr_6181_6212[(1)] = (12));

} else {
var statearr_6182_6213 = state_6171__$1;
(statearr_6182_6213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6172 === (3))){
var inst_6169 = (state_6171[(2)]);
var state_6171__$1 = state_6171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6171__$1,inst_6169);
} else {
if((state_val_6172 === (12))){
var inst_6135 = (state_6171[(8)]);
var inst_6159 = cljs.core.vec.call(null,inst_6135);
var state_6171__$1 = state_6171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6171__$1,(15),out,inst_6159);
} else {
if((state_val_6172 === (2))){
var state_6171__$1 = state_6171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6171__$1,(4),ch);
} else {
if((state_val_6172 === (11))){
var inst_6151 = (state_6171[(2)]);
var inst_6152 = (new Array(n));
var inst_6135 = inst_6152;
var inst_6136 = (0);
var state_6171__$1 = (function (){var statearr_6183 = state_6171;
(statearr_6183[(7)] = inst_6136);

(statearr_6183[(8)] = inst_6135);

(statearr_6183[(10)] = inst_6151);

return statearr_6183;
})();
var statearr_6184_6214 = state_6171__$1;
(statearr_6184_6214[(2)] = null);

(statearr_6184_6214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6172 === (9))){
var inst_6135 = (state_6171[(8)]);
var inst_6149 = cljs.core.vec.call(null,inst_6135);
var state_6171__$1 = state_6171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6171__$1,(11),out,inst_6149);
} else {
if((state_val_6172 === (5))){
var inst_6136 = (state_6171[(7)]);
var inst_6135 = (state_6171[(8)]);
var inst_6144 = (state_6171[(11)]);
var inst_6139 = (state_6171[(9)]);
var inst_6143 = (inst_6135[inst_6136] = inst_6139);
var inst_6144__$1 = (inst_6136 + (1));
var inst_6145 = (inst_6144__$1 < n);
var state_6171__$1 = (function (){var statearr_6185 = state_6171;
(statearr_6185[(11)] = inst_6144__$1);

(statearr_6185[(12)] = inst_6143);

return statearr_6185;
})();
if(cljs.core.truth_(inst_6145)){
var statearr_6186_6215 = state_6171__$1;
(statearr_6186_6215[(1)] = (8));

} else {
var statearr_6187_6216 = state_6171__$1;
(statearr_6187_6216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6172 === (14))){
var inst_6164 = (state_6171[(2)]);
var inst_6165 = cljs.core.async.close_BANG_.call(null,out);
var state_6171__$1 = (function (){var statearr_6189 = state_6171;
(statearr_6189[(13)] = inst_6164);

return statearr_6189;
})();
var statearr_6190_6217 = state_6171__$1;
(statearr_6190_6217[(2)] = inst_6165);

(statearr_6190_6217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6172 === (10))){
var inst_6155 = (state_6171[(2)]);
var state_6171__$1 = state_6171;
var statearr_6191_6218 = state_6171__$1;
(statearr_6191_6218[(2)] = inst_6155);

(statearr_6191_6218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6172 === (8))){
var inst_6135 = (state_6171[(8)]);
var inst_6144 = (state_6171[(11)]);
var tmp6188 = inst_6135;
var inst_6135__$1 = tmp6188;
var inst_6136 = inst_6144;
var state_6171__$1 = (function (){var statearr_6192 = state_6171;
(statearr_6192[(7)] = inst_6136);

(statearr_6192[(8)] = inst_6135__$1);

return statearr_6192;
})();
var statearr_6193_6219 = state_6171__$1;
(statearr_6193_6219[(2)] = null);

(statearr_6193_6219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1306__auto___6205,out))
;
return ((function (switch__1241__auto__,c__1306__auto___6205,out){
return (function() {
var cljs$core$async$state_machine__1242__auto__ = null;
var cljs$core$async$state_machine__1242__auto____0 = (function (){
var statearr_6197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6197[(0)] = cljs$core$async$state_machine__1242__auto__);

(statearr_6197[(1)] = (1));

return statearr_6197;
});
var cljs$core$async$state_machine__1242__auto____1 = (function (state_6171){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_6171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e6198){if((e6198 instanceof Object)){
var ex__1245__auto__ = e6198;
var statearr_6199_6220 = state_6171;
(statearr_6199_6220[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6221 = state_6171;
state_6171 = G__6221;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$state_machine__1242__auto__ = function(state_6171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1242__auto____1.call(this,state_6171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1242__auto____0;
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1242__auto____1;
return cljs$core$async$state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto___6205,out))
})();
var state__1308__auto__ = (function (){var statearr_6200 = f__1307__auto__.call(null);
(statearr_6200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___6205);

return statearr_6200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto___6205,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args6222 = [];
var len__3348__auto___6296 = arguments.length;
var i__3349__auto___6297 = (0);
while(true){
if((i__3349__auto___6297 < len__3348__auto___6296)){
args6222.push((arguments[i__3349__auto___6297]));

var G__6298 = (i__3349__auto___6297 + (1));
i__3349__auto___6297 = G__6298;
continue;
} else {
}
break;
}

var G__6224 = args6222.length;
switch (G__6224) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6222.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1306__auto___6300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto___6300,out){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto___6300,out){
return (function (state_6266){
var state_val_6267 = (state_6266[(1)]);
if((state_val_6267 === (7))){
var inst_6262 = (state_6266[(2)]);
var state_6266__$1 = state_6266;
var statearr_6268_6301 = state_6266__$1;
(statearr_6268_6301[(2)] = inst_6262);

(statearr_6268_6301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6267 === (1))){
var inst_6225 = [];
var inst_6226 = inst_6225;
var inst_6227 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_6266__$1 = (function (){var statearr_6269 = state_6266;
(statearr_6269[(7)] = inst_6226);

(statearr_6269[(8)] = inst_6227);

return statearr_6269;
})();
var statearr_6270_6302 = state_6266__$1;
(statearr_6270_6302[(2)] = null);

(statearr_6270_6302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6267 === (4))){
var inst_6230 = (state_6266[(9)]);
var inst_6230__$1 = (state_6266[(2)]);
var inst_6231 = (inst_6230__$1 == null);
var inst_6232 = cljs.core.not.call(null,inst_6231);
var state_6266__$1 = (function (){var statearr_6271 = state_6266;
(statearr_6271[(9)] = inst_6230__$1);

return statearr_6271;
})();
if(inst_6232){
var statearr_6272_6303 = state_6266__$1;
(statearr_6272_6303[(1)] = (5));

} else {
var statearr_6273_6304 = state_6266__$1;
(statearr_6273_6304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6267 === (15))){
var inst_6256 = (state_6266[(2)]);
var state_6266__$1 = state_6266;
var statearr_6274_6305 = state_6266__$1;
(statearr_6274_6305[(2)] = inst_6256);

(statearr_6274_6305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6267 === (13))){
var state_6266__$1 = state_6266;
var statearr_6275_6306 = state_6266__$1;
(statearr_6275_6306[(2)] = null);

(statearr_6275_6306[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6267 === (6))){
var inst_6226 = (state_6266[(7)]);
var inst_6251 = inst_6226.length;
var inst_6252 = (inst_6251 > (0));
var state_6266__$1 = state_6266;
if(cljs.core.truth_(inst_6252)){
var statearr_6276_6307 = state_6266__$1;
(statearr_6276_6307[(1)] = (12));

} else {
var statearr_6277_6308 = state_6266__$1;
(statearr_6277_6308[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6267 === (3))){
var inst_6264 = (state_6266[(2)]);
var state_6266__$1 = state_6266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6266__$1,inst_6264);
} else {
if((state_val_6267 === (12))){
var inst_6226 = (state_6266[(7)]);
var inst_6254 = cljs.core.vec.call(null,inst_6226);
var state_6266__$1 = state_6266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6266__$1,(15),out,inst_6254);
} else {
if((state_val_6267 === (2))){
var state_6266__$1 = state_6266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6266__$1,(4),ch);
} else {
if((state_val_6267 === (11))){
var inst_6230 = (state_6266[(9)]);
var inst_6234 = (state_6266[(10)]);
var inst_6244 = (state_6266[(2)]);
var inst_6245 = [];
var inst_6246 = inst_6245.push(inst_6230);
var inst_6226 = inst_6245;
var inst_6227 = inst_6234;
var state_6266__$1 = (function (){var statearr_6278 = state_6266;
(statearr_6278[(11)] = inst_6244);

(statearr_6278[(7)] = inst_6226);

(statearr_6278[(8)] = inst_6227);

(statearr_6278[(12)] = inst_6246);

return statearr_6278;
})();
var statearr_6279_6309 = state_6266__$1;
(statearr_6279_6309[(2)] = null);

(statearr_6279_6309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6267 === (9))){
var inst_6226 = (state_6266[(7)]);
var inst_6242 = cljs.core.vec.call(null,inst_6226);
var state_6266__$1 = state_6266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6266__$1,(11),out,inst_6242);
} else {
if((state_val_6267 === (5))){
var inst_6230 = (state_6266[(9)]);
var inst_6227 = (state_6266[(8)]);
var inst_6234 = (state_6266[(10)]);
var inst_6234__$1 = f.call(null,inst_6230);
var inst_6235 = cljs.core._EQ_.call(null,inst_6234__$1,inst_6227);
var inst_6236 = cljs.core.keyword_identical_QMARK_.call(null,inst_6227,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_6237 = (inst_6235) || (inst_6236);
var state_6266__$1 = (function (){var statearr_6280 = state_6266;
(statearr_6280[(10)] = inst_6234__$1);

return statearr_6280;
})();
if(cljs.core.truth_(inst_6237)){
var statearr_6281_6310 = state_6266__$1;
(statearr_6281_6310[(1)] = (8));

} else {
var statearr_6282_6311 = state_6266__$1;
(statearr_6282_6311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6267 === (14))){
var inst_6259 = (state_6266[(2)]);
var inst_6260 = cljs.core.async.close_BANG_.call(null,out);
var state_6266__$1 = (function (){var statearr_6284 = state_6266;
(statearr_6284[(13)] = inst_6259);

return statearr_6284;
})();
var statearr_6285_6312 = state_6266__$1;
(statearr_6285_6312[(2)] = inst_6260);

(statearr_6285_6312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6267 === (10))){
var inst_6249 = (state_6266[(2)]);
var state_6266__$1 = state_6266;
var statearr_6286_6313 = state_6266__$1;
(statearr_6286_6313[(2)] = inst_6249);

(statearr_6286_6313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6267 === (8))){
var inst_6230 = (state_6266[(9)]);
var inst_6226 = (state_6266[(7)]);
var inst_6234 = (state_6266[(10)]);
var inst_6239 = inst_6226.push(inst_6230);
var tmp6283 = inst_6226;
var inst_6226__$1 = tmp6283;
var inst_6227 = inst_6234;
var state_6266__$1 = (function (){var statearr_6287 = state_6266;
(statearr_6287[(7)] = inst_6226__$1);

(statearr_6287[(8)] = inst_6227);

(statearr_6287[(14)] = inst_6239);

return statearr_6287;
})();
var statearr_6288_6314 = state_6266__$1;
(statearr_6288_6314[(2)] = null);

(statearr_6288_6314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1306__auto___6300,out))
;
return ((function (switch__1241__auto__,c__1306__auto___6300,out){
return (function() {
var cljs$core$async$state_machine__1242__auto__ = null;
var cljs$core$async$state_machine__1242__auto____0 = (function (){
var statearr_6292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6292[(0)] = cljs$core$async$state_machine__1242__auto__);

(statearr_6292[(1)] = (1));

return statearr_6292;
});
var cljs$core$async$state_machine__1242__auto____1 = (function (state_6266){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_6266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e6293){if((e6293 instanceof Object)){
var ex__1245__auto__ = e6293;
var statearr_6294_6315 = state_6266;
(statearr_6294_6315[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6316 = state_6266;
state_6266 = G__6316;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs$core$async$state_machine__1242__auto__ = function(state_6266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1242__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1242__auto____1.call(this,state_6266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1242__auto____0;
cljs$core$async$state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1242__auto____1;
return cljs$core$async$state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto___6300,out))
})();
var state__1308__auto__ = (function (){var statearr_6295 = f__1307__auto__.call(null);
(statearr_6295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto___6300);

return statearr_6295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto___6300,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map