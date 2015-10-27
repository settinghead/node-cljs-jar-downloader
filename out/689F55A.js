goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6523__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6523 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6524__i = 0, G__6524__a = new Array(arguments.length -  0);
while (G__6524__i < G__6524__a.length) {G__6524__a[G__6524__i] = arguments[G__6524__i + 0]; ++G__6524__i;}
  args = new cljs.core.IndexedSeq(G__6524__a,0);
} 
return G__6523__delegate.call(this,args);};
G__6523.cljs$lang$maxFixedArity = 0;
G__6523.cljs$lang$applyTo = (function (arglist__6525){
var args = cljs.core.seq(arglist__6525);
return G__6523__delegate(args);
});
G__6523.cljs$core$IFn$_invoke$arity$variadic = G__6523__delegate;
return G__6523;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__6526__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6526 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6527__i = 0, G__6527__a = new Array(arguments.length -  0);
while (G__6527__i < G__6527__a.length) {G__6527__a[G__6527__i] = arguments[G__6527__i + 0]; ++G__6527__i;}
  args = new cljs.core.IndexedSeq(G__6527__a,0);
} 
return G__6526__delegate.call(this,args);};
G__6526.cljs$lang$maxFixedArity = 0;
G__6526.cljs$lang$applyTo = (function (arglist__6528){
var args = cljs.core.seq(arglist__6528);
return G__6526__delegate(args);
});
G__6526.cljs$core$IFn$_invoke$arity$variadic = G__6526__delegate;
return G__6526;
})()
;

return null;
});
