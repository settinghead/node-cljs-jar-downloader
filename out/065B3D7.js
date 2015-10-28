goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2602__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2603__i = 0, G__2603__a = new Array(arguments.length -  0);
while (G__2603__i < G__2603__a.length) {G__2603__a[G__2603__i] = arguments[G__2603__i + 0]; ++G__2603__i;}
  args = new cljs.core.IndexedSeq(G__2603__a,0);
} 
return G__2602__delegate.call(this,args);};
G__2602.cljs$lang$maxFixedArity = 0;
G__2602.cljs$lang$applyTo = (function (arglist__2604){
var args = cljs.core.seq(arglist__2604);
return G__2602__delegate(args);
});
G__2602.cljs$core$IFn$_invoke$arity$variadic = G__2602__delegate;
return G__2602;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2605__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2605 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2606__i = 0, G__2606__a = new Array(arguments.length -  0);
while (G__2606__i < G__2606__a.length) {G__2606__a[G__2606__i] = arguments[G__2606__i + 0]; ++G__2606__i;}
  args = new cljs.core.IndexedSeq(G__2606__a,0);
} 
return G__2605__delegate.call(this,args);};
G__2605.cljs$lang$maxFixedArity = 0;
G__2605.cljs$lang$applyTo = (function (arglist__2607){
var args = cljs.core.seq(arglist__2607);
return G__2605__delegate(args);
});
G__2605.cljs$core$IFn$_invoke$arity$variadic = G__2605__delegate;
return G__2605;
})()
;

return null;
});
