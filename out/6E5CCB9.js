goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1025__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1025 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1026__i = 0, G__1026__a = new Array(arguments.length -  0);
while (G__1026__i < G__1026__a.length) {G__1026__a[G__1026__i] = arguments[G__1026__i + 0]; ++G__1026__i;}
  args = new cljs.core.IndexedSeq(G__1026__a,0);
} 
return G__1025__delegate.call(this,args);};
G__1025.cljs$lang$maxFixedArity = 0;
G__1025.cljs$lang$applyTo = (function (arglist__1027){
var args = cljs.core.seq(arglist__1027);
return G__1025__delegate(args);
});
G__1025.cljs$core$IFn$_invoke$arity$variadic = G__1025__delegate;
return G__1025;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1028__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1029__i = 0, G__1029__a = new Array(arguments.length -  0);
while (G__1029__i < G__1029__a.length) {G__1029__a[G__1029__i] = arguments[G__1029__i + 0]; ++G__1029__i;}
  args = new cljs.core.IndexedSeq(G__1029__a,0);
} 
return G__1028__delegate.call(this,args);};
G__1028.cljs$lang$maxFixedArity = 0;
G__1028.cljs$lang$applyTo = (function (arglist__1030){
var args = cljs.core.seq(arglist__1030);
return G__1028__delegate(args);
});
G__1028.cljs$core$IFn$_invoke$arity$variadic = G__1028__delegate;
return G__1028;
})()
;

return null;
});
