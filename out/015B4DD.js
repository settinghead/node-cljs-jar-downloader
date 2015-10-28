goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2524__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2525__i = 0, G__2525__a = new Array(arguments.length -  0);
while (G__2525__i < G__2525__a.length) {G__2525__a[G__2525__i] = arguments[G__2525__i + 0]; ++G__2525__i;}
  args = new cljs.core.IndexedSeq(G__2525__a,0);
} 
return G__2524__delegate.call(this,args);};
G__2524.cljs$lang$maxFixedArity = 0;
G__2524.cljs$lang$applyTo = (function (arglist__2526){
var args = cljs.core.seq(arglist__2526);
return G__2524__delegate(args);
});
G__2524.cljs$core$IFn$_invoke$arity$variadic = G__2524__delegate;
return G__2524;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2527__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2528__i = 0, G__2528__a = new Array(arguments.length -  0);
while (G__2528__i < G__2528__a.length) {G__2528__a[G__2528__i] = arguments[G__2528__i + 0]; ++G__2528__i;}
  args = new cljs.core.IndexedSeq(G__2528__a,0);
} 
return G__2527__delegate.call(this,args);};
G__2527.cljs$lang$maxFixedArity = 0;
G__2527.cljs$lang$applyTo = (function (arglist__2529){
var args = cljs.core.seq(arglist__2529);
return G__2527__delegate(args);
});
G__2527.cljs$core$IFn$_invoke$arity$variadic = G__2527__delegate;
return G__2527;
})()
;

return null;
});
