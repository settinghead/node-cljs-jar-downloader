(require 'cljs.build.api)

(cljs.build.api/watch "src"
  {:main 'cljs-jar-downloader.core
   :target :nodejs
   :pretty-print true
   :output-to "out/main.js"})
