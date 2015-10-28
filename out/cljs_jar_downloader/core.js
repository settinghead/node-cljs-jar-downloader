// Compiled by ClojureScript 1.7.145 {:target :nodejs}
goog.provide('cljs_jar_downloader.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_jar_downloader.core.read_from_uri = (function cljs_jar_downloader$core$read_from_uri(uri){
var get = cljs.nodejs.require.call(null,"follow-redirects").https.get;
var resp_chan = cljs.core.async.chan.call(null,(1));
var res_fn = ((function (get,resp_chan){
return (function (response){
var c__2264__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2264__auto__,get,resp_chan){
return (function (){
var f__2265__auto__ = (function (){var switch__2243__auto__ = ((function (c__2264__auto__,get,resp_chan){
return (function (state_2403){
var state_val_2404 = (state_2403[(1)]);
if((state_val_2404 === (1))){
var state_2403__$1 = state_2403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2403__$1,(2),resp_chan,response);
} else {
if((state_val_2404 === (2))){
var inst_2401 = (state_2403[(2)]);
var state_2403__$1 = state_2403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2403__$1,inst_2401);
} else {
return null;
}
}
});})(c__2264__auto__,get,resp_chan))
;
return ((function (switch__2243__auto__,c__2264__auto__,get,resp_chan){
return (function() {
var cljs_jar_downloader$core$read_from_uri_$_state_machine__2244__auto__ = null;
var cljs_jar_downloader$core$read_from_uri_$_state_machine__2244__auto____0 = (function (){
var statearr_2408 = [null,null,null,null,null,null,null];
(statearr_2408[(0)] = cljs_jar_downloader$core$read_from_uri_$_state_machine__2244__auto__);

(statearr_2408[(1)] = (1));

return statearr_2408;
});
var cljs_jar_downloader$core$read_from_uri_$_state_machine__2244__auto____1 = (function (state_2403){
while(true){
var ret_value__2245__auto__ = (function (){try{while(true){
var result__2246__auto__ = switch__2243__auto__.call(null,state_2403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2246__auto__;
}
break;
}
}catch (e2409){if((e2409 instanceof Object)){
var ex__2247__auto__ = e2409;
var statearr_2410_2412 = state_2403;
(statearr_2410_2412[(5)] = ex__2247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2413 = state_2403;
state_2403 = G__2413;
continue;
} else {
return ret_value__2245__auto__;
}
break;
}
});
cljs_jar_downloader$core$read_from_uri_$_state_machine__2244__auto__ = function(state_2403){
switch(arguments.length){
case 0:
return cljs_jar_downloader$core$read_from_uri_$_state_machine__2244__auto____0.call(this);
case 1:
return cljs_jar_downloader$core$read_from_uri_$_state_machine__2244__auto____1.call(this,state_2403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_jar_downloader$core$read_from_uri_$_state_machine__2244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_jar_downloader$core$read_from_uri_$_state_machine__2244__auto____0;
cljs_jar_downloader$core$read_from_uri_$_state_machine__2244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_jar_downloader$core$read_from_uri_$_state_machine__2244__auto____1;
return cljs_jar_downloader$core$read_from_uri_$_state_machine__2244__auto__;
})()
;})(switch__2243__auto__,c__2264__auto__,get,resp_chan))
})();
var state__2266__auto__ = (function (){var statearr_2411 = f__2265__auto__.call(null);
(statearr_2411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2264__auto__);

return statearr_2411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2266__auto__);
});})(c__2264__auto__,get,resp_chan))
);

return c__2264__auto__;
});})(get,resp_chan))
;
var req = get.call(null,uri,res_fn);
req.on("error",((function (get,resp_chan,res_fn,req){
return (function (p1__2387_SHARP_){
return cljs.core.println.call(null,"error",p1__2387_SHARP_);
});})(get,resp_chan,res_fn,req))
);

cljs.core.println.call(null,"Downloading from",uri,"...");

return resp_chan;
});
cljs_jar_downloader.core.save_to_file = (function cljs_jar_downloader$core$save_to_file(out_path,response){
var fs = cljs.nodejs.require.call(null,"fs");
var write_sync = fs.writeSync;
var file = fs.createWriteStream(out_path);
file.on("finish",((function (fs,write_sync,file){
return (function (){
return cljs.core.println.call(null,"Done!");
});})(fs,write_sync,file))
);

cljs.core.println.call(null,"Saving to",out_path,"...");

return response.pipe(file);
});
cljs_jar_downloader.core.cljs_jar_url = "https://github.com/clojure/clojurescript/releases/download/r1.7.145/cljs.jar";
cljs_jar_downloader.core.download = (function cljs_jar_downloader$core$download(){
var c__2264__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2264__auto__){
return (function (){
var f__2265__auto__ = (function (){var switch__2243__auto__ = ((function (c__2264__auto__){
return (function (state_2433){
var state_val_2434 = (state_2433[(1)]);
if((state_val_2434 === (1))){
var inst_2428 = cljs_jar_downloader.core.read_from_uri.call(null,cljs_jar_downloader.core.cljs_jar_url);
var state_2433__$1 = state_2433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2433__$1,(2),inst_2428);
} else {
if((state_val_2434 === (2))){
var inst_2430 = (state_2433[(2)]);
var inst_2431 = cljs_jar_downloader.core.save_to_file.call(null,"test.jar",inst_2430);
var state_2433__$1 = state_2433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2433__$1,inst_2431);
} else {
return null;
}
}
});})(c__2264__auto__))
;
return ((function (switch__2243__auto__,c__2264__auto__){
return (function() {
var cljs_jar_downloader$core$download_$_state_machine__2244__auto__ = null;
var cljs_jar_downloader$core$download_$_state_machine__2244__auto____0 = (function (){
var statearr_2438 = [null,null,null,null,null,null,null];
(statearr_2438[(0)] = cljs_jar_downloader$core$download_$_state_machine__2244__auto__);

(statearr_2438[(1)] = (1));

return statearr_2438;
});
var cljs_jar_downloader$core$download_$_state_machine__2244__auto____1 = (function (state_2433){
while(true){
var ret_value__2245__auto__ = (function (){try{while(true){
var result__2246__auto__ = switch__2243__auto__.call(null,state_2433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2246__auto__;
}
break;
}
}catch (e2439){if((e2439 instanceof Object)){
var ex__2247__auto__ = e2439;
var statearr_2440_2442 = state_2433;
(statearr_2440_2442[(5)] = ex__2247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2443 = state_2433;
state_2433 = G__2443;
continue;
} else {
return ret_value__2245__auto__;
}
break;
}
});
cljs_jar_downloader$core$download_$_state_machine__2244__auto__ = function(state_2433){
switch(arguments.length){
case 0:
return cljs_jar_downloader$core$download_$_state_machine__2244__auto____0.call(this);
case 1:
return cljs_jar_downloader$core$download_$_state_machine__2244__auto____1.call(this,state_2433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_jar_downloader$core$download_$_state_machine__2244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_jar_downloader$core$download_$_state_machine__2244__auto____0;
cljs_jar_downloader$core$download_$_state_machine__2244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_jar_downloader$core$download_$_state_machine__2244__auto____1;
return cljs_jar_downloader$core$download_$_state_machine__2244__auto__;
})()
;})(switch__2243__auto__,c__2264__auto__))
})();
var state__2266__auto__ = (function (){var statearr_2441 = f__2265__auto__.call(null);
(statearr_2441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__2264__auto__);

return statearr_2441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2266__auto__);
});})(c__2264__auto__))
);

return c__2264__auto__;
});
cljs_jar_downloader.core.noop = (function cljs_jar_downloader$core$noop(){
return null;
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_jar_downloader.core.noop;

//# sourceMappingURL=core.js.map