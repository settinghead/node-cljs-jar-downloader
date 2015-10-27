(require 'cljs.build.api)

(cljs.build.api/watch "src"
  {:main 'cljs-jar-downloader.core
   :target :nodejs
   :output-to "out/main.js"})
