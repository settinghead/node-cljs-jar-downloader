goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2680__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2681__i = 0, G__2681__a = new Array(arguments.length -  0);
while (G__2681__i < G__2681__a.length) {G__2681__a[G__2681__i] = arguments[G__2681__i + 0]; ++G__2681__i;}
  args = new cljs.core.IndexedSeq(G__2681__a,0);
} 
return G__2680__delegate.call(this,args);};
G__2680.cljs$lang$maxFixedArity = 0;
G__2680.cljs$lang$applyTo = (function (arglist__2682){
var args = cljs.core.seq(arglist__2682);
return G__2680__delegate(args);
});
G__2680.cljs$core$IFn$_invoke$arity$variadic = G__2680__delegate;
return G__2680;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2683__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2684__i = 0, G__2684__a = new Array(arguments.length -  0);
while (G__2684__i < G__2684__a.length) {G__2684__a[G__2684__i] = arguments[G__2684__i + 0]; ++G__2684__i;}
  args = new cljs.core.IndexedSeq(G__2684__a,0);
} 
return G__2683__delegate.call(this,args);};
G__2683.cljs$lang$maxFixedArity = 0;
G__2683.cljs$lang$applyTo = (function (arglist__2685){
var args = cljs.core.seq(arglist__2685);
return G__2683__delegate(args);
});
G__2683.cljs$core$IFn$_invoke$arity$variadic = G__2683__delegate;
return G__2683;
})()
;

return null;
});
