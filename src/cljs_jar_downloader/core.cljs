(ns cljs-jar-downloader.core
  (:import goog.Uri)
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! >! chan]]
            [cljs.nodejs :as nodejs]))
;;https://clojars.org/repo/cljs-http/cljs-http/0.1.37/cljs-http-0.1.37.jar
;;https://clojars.org/repo/org.clojure/core.async/0.1.346.0-17112a-alpha/core.async-0.1.346.0-17112a-alpha.jar

(nodejs/enable-util-print!)

(defn read-from-uri [uri]
  (let [get (-> (nodejs/require "follow-redirects") (.-https) (.-get))
        resp-chan (chan 1)
        res-fn (fn [response] (go (>! resp-chan response)))
        req (get uri res-fn)]
   (.on req "error" #(do (println "error" %)))
   (println "Downloading from" uri "...")
  resp-chan))

(defn save-to-file [out-path response]
  (let [fs (nodejs/require "fs")
        write-sync (.-writeSync fs)
        file (.createWriteStream fs out-path)]
      (.on file "finish" #(println "Done!"))
      (println "Saving to" out-path "...")
      (.pipe response file)))

(def cljs-jar-url "https://github.com/clojure/clojurescript/releases/download/r1.7.145/cljs.jar")

(defn download []
  (go (let [resp (<! (read-from-uri cljs-jar-url))]
      (save-to-file "test.jar" resp))))

(defn noop [] nil)

(set! *main-cli-fn* noop)
