goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__3611__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__3611 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3612__i = 0, G__3612__a = new Array(arguments.length -  0);
while (G__3612__i < G__3612__a.length) {G__3612__a[G__3612__i] = arguments[G__3612__i + 0]; ++G__3612__i;}
  args = new cljs.core.IndexedSeq(G__3612__a,0);
} 
return G__3611__delegate.call(this,args);};
G__3611.cljs$lang$maxFixedArity = 0;
G__3611.cljs$lang$applyTo = (function (arglist__3613){
var args = cljs.core.seq(arglist__3613);
return G__3611__delegate(args);
});
G__3611.cljs$core$IFn$_invoke$arity$variadic = G__3611__delegate;
return G__3611;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__3614__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__3614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3615__i = 0, G__3615__a = new Array(arguments.length -  0);
while (G__3615__i < G__3615__a.length) {G__3615__a[G__3615__i] = arguments[G__3615__i + 0]; ++G__3615__i;}
  args = new cljs.core.IndexedSeq(G__3615__a,0);
} 
return G__3614__delegate.call(this,args);};
G__3614.cljs$lang$maxFixedArity = 0;
G__3614.cljs$lang$applyTo = (function (arglist__3616){
var args = cljs.core.seq(arglist__3616);
return G__3614__delegate(args);
});
G__3614.cljs$core$IFn$_invoke$arity$variadic = G__3614__delegate;
return G__3614;
})()
;

return null;
});
