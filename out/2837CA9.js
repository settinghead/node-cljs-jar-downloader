goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6601__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6602__i = 0, G__6602__a = new Array(arguments.length -  0);
while (G__6602__i < G__6602__a.length) {G__6602__a[G__6602__i] = arguments[G__6602__i + 0]; ++G__6602__i;}
  args = new cljs.core.IndexedSeq(G__6602__a,0);
} 
return G__6601__delegate.call(this,args);};
G__6601.cljs$lang$maxFixedArity = 0;
G__6601.cljs$lang$applyTo = (function (arglist__6603){
var args = cljs.core.seq(arglist__6603);
return G__6601__delegate(args);
});
G__6601.cljs$core$IFn$_invoke$arity$variadic = G__6601__delegate;
return G__6601;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__6604__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6605__i = 0, G__6605__a = new Array(arguments.length -  0);
while (G__6605__i < G__6605__a.length) {G__6605__a[G__6605__i] = arguments[G__6605__i + 0]; ++G__6605__i;}
  args = new cljs.core.IndexedSeq(G__6605__a,0);
} 
return G__6604__delegate.call(this,args);};
G__6604.cljs$lang$maxFixedArity = 0;
G__6604.cljs$lang$applyTo = (function (arglist__6606){
var args = cljs.core.seq(arglist__6606);
return G__6604__delegate(args);
});
G__6604.cljs$core$IFn$_invoke$arity$variadic = G__6604__delegate;
return G__6604;
})()
;

return null;
});
