// Compiled by ClojureScript 1.7.145 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6609__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6610__i = 0, G__6610__a = new Array(arguments.length -  0);
while (G__6610__i < G__6610__a.length) {G__6610__a[G__6610__i] = arguments[G__6610__i + 0]; ++G__6610__i;}
  args = new cljs.core.IndexedSeq(G__6610__a,0);
} 
return G__6609__delegate.call(this,args);};
G__6609.cljs$lang$maxFixedArity = 0;
G__6609.cljs$lang$applyTo = (function (arglist__6611){
var args = cljs.core.seq(arglist__6611);
return G__6609__delegate(args);
});
G__6609.cljs$core$IFn$_invoke$arity$variadic = G__6609__delegate;
return G__6609;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__6612__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6613__i = 0, G__6613__a = new Array(arguments.length -  0);
while (G__6613__i < G__6613__a.length) {G__6613__a[G__6613__i] = arguments[G__6613__i + 0]; ++G__6613__i;}
  args = new cljs.core.IndexedSeq(G__6613__a,0);
} 
return G__6612__delegate.call(this,args);};
G__6612.cljs$lang$maxFixedArity = 0;
G__6612.cljs$lang$applyTo = (function (arglist__6614){
var args = cljs.core.seq(arglist__6614);
return G__6612__delegate(args);
});
G__6612.cljs$core$IFn$_invoke$arity$variadic = G__6612__delegate;
return G__6612;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map