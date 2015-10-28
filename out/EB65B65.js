goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2368__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2369__i = 0, G__2369__a = new Array(arguments.length -  0);
while (G__2369__i < G__2369__a.length) {G__2369__a[G__2369__i] = arguments[G__2369__i + 0]; ++G__2369__i;}
  args = new cljs.core.IndexedSeq(G__2369__a,0);
} 
return G__2368__delegate.call(this,args);};
G__2368.cljs$lang$maxFixedArity = 0;
G__2368.cljs$lang$applyTo = (function (arglist__2370){
var args = cljs.core.seq(arglist__2370);
return G__2368__delegate(args);
});
G__2368.cljs$core$IFn$_invoke$arity$variadic = G__2368__delegate;
return G__2368;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2371__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2372__i = 0, G__2372__a = new Array(arguments.length -  0);
while (G__2372__i < G__2372__a.length) {G__2372__a[G__2372__i] = arguments[G__2372__i + 0]; ++G__2372__i;}
  args = new cljs.core.IndexedSeq(G__2372__a,0);
} 
return G__2371__delegate.call(this,args);};
G__2371.cljs$lang$maxFixedArity = 0;
G__2371.cljs$lang$applyTo = (function (arglist__2373){
var args = cljs.core.seq(arglist__2373);
return G__2371__delegate(args);
});
G__2371.cljs$core$IFn$_invoke$arity$variadic = G__2371__delegate;
return G__2371;
})()
;

return null;
});
