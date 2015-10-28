goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2446__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2447__i = 0, G__2447__a = new Array(arguments.length -  0);
while (G__2447__i < G__2447__a.length) {G__2447__a[G__2447__i] = arguments[G__2447__i + 0]; ++G__2447__i;}
  args = new cljs.core.IndexedSeq(G__2447__a,0);
} 
return G__2446__delegate.call(this,args);};
G__2446.cljs$lang$maxFixedArity = 0;
G__2446.cljs$lang$applyTo = (function (arglist__2448){
var args = cljs.core.seq(arglist__2448);
return G__2446__delegate(args);
});
G__2446.cljs$core$IFn$_invoke$arity$variadic = G__2446__delegate;
return G__2446;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2449__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2450__i = 0, G__2450__a = new Array(arguments.length -  0);
while (G__2450__i < G__2450__a.length) {G__2450__a[G__2450__i] = arguments[G__2450__i + 0]; ++G__2450__i;}
  args = new cljs.core.IndexedSeq(G__2450__a,0);
} 
return G__2449__delegate.call(this,args);};
G__2449.cljs$lang$maxFixedArity = 0;
G__2449.cljs$lang$applyTo = (function (arglist__2451){
var args = cljs.core.seq(arglist__2451);
return G__2449__delegate(args);
});
G__2449.cljs$core$IFn$_invoke$arity$variadic = G__2449__delegate;
return G__2449;
})()
;

return null;
});
