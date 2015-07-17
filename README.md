# Angular練習
  2014/09 learn from Code School.
  
## 怎麼運行
   可以用fire.app軟體watch這個專案，就可以看到效果。
   * PS. 由於資料是從product.json取得，在js/app2.js裡面$http.get('/product.json')。如你的網址需要指定某個專案的話，則需要改過路徑，不然會讀不到。
    舉例來說，當你網址是 http ://127.0.0.1:8080/index.html 時，由於是讀取專案下，所以不用修改$http.get('/product.json'); 但當你運行 http ://127.0.0.1:8080/{專案名稱}/index.html ，此時$http.get需改成$http.get('/{專案名稱}/product.json')。
    
