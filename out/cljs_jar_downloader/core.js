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
var c__1306__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto__,get,resp_chan){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto__,get,resp_chan){
return (function (state_6558){
var state_val_6559 = (state_6558[(1)]);
if((state_val_6559 === (1))){
var state_6558__$1 = state_6558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6558__$1,(2),resp_chan,response);
} else {
if((state_val_6559 === (2))){
var inst_6556 = (state_6558[(2)]);
var state_6558__$1 = state_6558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6558__$1,inst_6556);
} else {
return null;
}
}
});})(c__1306__auto__,get,resp_chan))
;
return ((function (switch__1241__auto__,c__1306__auto__,get,resp_chan){
return (function() {
var cljs_jar_downloader$core$read_from_uri_$_state_machine__1242__auto__ = null;
var cljs_jar_downloader$core$read_from_uri_$_state_machine__1242__auto____0 = (function (){
var statearr_6563 = [null,null,null,null,null,null,null];
(statearr_6563[(0)] = cljs_jar_downloader$core$read_from_uri_$_state_machine__1242__auto__);

(statearr_6563[(1)] = (1));

return statearr_6563;
});
var cljs_jar_downloader$core$read_from_uri_$_state_machine__1242__auto____1 = (function (state_6558){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_6558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e6564){if((e6564 instanceof Object)){
var ex__1245__auto__ = e6564;
var statearr_6565_6567 = state_6558;
(statearr_6565_6567[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6568 = state_6558;
state_6558 = G__6568;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs_jar_downloader$core$read_from_uri_$_state_machine__1242__auto__ = function(state_6558){
switch(arguments.length){
case 0:
return cljs_jar_downloader$core$read_from_uri_$_state_machine__1242__auto____0.call(this);
case 1:
return cljs_jar_downloader$core$read_from_uri_$_state_machine__1242__auto____1.call(this,state_6558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_jar_downloader$core$read_from_uri_$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_jar_downloader$core$read_from_uri_$_state_machine__1242__auto____0;
cljs_jar_downloader$core$read_from_uri_$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_jar_downloader$core$read_from_uri_$_state_machine__1242__auto____1;
return cljs_jar_downloader$core$read_from_uri_$_state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto__,get,resp_chan))
})();
var state__1308__auto__ = (function (){var statearr_6566 = f__1307__auto__.call(null);
(statearr_6566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto__);

return statearr_6566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto__,get,resp_chan))
);

return c__1306__auto__;
});})(get,resp_chan))
;
var req = get.call(null,uri,res_fn);
req.on("error",((function (get,resp_chan,res_fn,req){
return (function (p1__6542_SHARP_){
return cljs.core.println.call(null,"error",p1__6542_SHARP_);
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
var c__1306__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1306__auto__){
return (function (){
var f__1307__auto__ = (function (){var switch__1241__auto__ = ((function (c__1306__auto__){
return (function (state_6588){
var state_val_6589 = (state_6588[(1)]);
if((state_val_6589 === (1))){
var inst_6583 = cljs_jar_downloader.core.read_from_uri.call(null,cljs_jar_downloader.core.cljs_jar_url);
var state_6588__$1 = state_6588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6588__$1,(2),inst_6583);
} else {
if((state_val_6589 === (2))){
var inst_6585 = (state_6588[(2)]);
var inst_6586 = cljs_jar_downloader.core.save_to_file.call(null,"test.jar",inst_6585);
var state_6588__$1 = state_6588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6588__$1,inst_6586);
} else {
return null;
}
}
});})(c__1306__auto__))
;
return ((function (switch__1241__auto__,c__1306__auto__){
return (function() {
var cljs_jar_downloader$core$download_$_state_machine__1242__auto__ = null;
var cljs_jar_downloader$core$download_$_state_machine__1242__auto____0 = (function (){
var statearr_6593 = [null,null,null,null,null,null,null];
(statearr_6593[(0)] = cljs_jar_downloader$core$download_$_state_machine__1242__auto__);

(statearr_6593[(1)] = (1));

return statearr_6593;
});
var cljs_jar_downloader$core$download_$_state_machine__1242__auto____1 = (function (state_6588){
while(true){
var ret_value__1243__auto__ = (function (){try{while(true){
var result__1244__auto__ = switch__1241__auto__.call(null,state_6588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1244__auto__;
}
break;
}
}catch (e6594){if((e6594 instanceof Object)){
var ex__1245__auto__ = e6594;
var statearr_6595_6597 = state_6588;
(statearr_6595_6597[(5)] = ex__1245__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6598 = state_6588;
state_6588 = G__6598;
continue;
} else {
return ret_value__1243__auto__;
}
break;
}
});
cljs_jar_downloader$core$download_$_state_machine__1242__auto__ = function(state_6588){
switch(arguments.length){
case 0:
return cljs_jar_downloader$core$download_$_state_machine__1242__auto____0.call(this);
case 1:
return cljs_jar_downloader$core$download_$_state_machine__1242__auto____1.call(this,state_6588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_jar_downloader$core$download_$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_jar_downloader$core$download_$_state_machine__1242__auto____0;
cljs_jar_downloader$core$download_$_state_machine__1242__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_jar_downloader$core$download_$_state_machine__1242__auto____1;
return cljs_jar_downloader$core$download_$_state_machine__1242__auto__;
})()
;})(switch__1241__auto__,c__1306__auto__))
})();
var state__1308__auto__ = (function (){var statearr_6596 = f__1307__auto__.call(null);
(statearr_6596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1306__auto__);

return statearr_6596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1308__auto__);
});})(c__1306__auto__))
);

return c__1306__auto__;
});
cljs_jar_downloader.core.noop = (function cljs_jar_downloader$core$noop(){
return null;
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_jar_downloader.core.noop;

//# sourceMappingURL=core.js.map