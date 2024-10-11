## HW checklist

- [x] 1-11

## Week -04

1. 在 Readme 中提供 instance 的 public IP，我會連線過去檢查，所以要保持主機是一直在啟動中

- Public IP: [http://35.78.122.104/](http://35.78.122.104/)

2. 什麼是 instance type?

- VM 的類型，通常根據不同的運算需求而選擇對應的 instance Type，例如目前用的 t2.micro 的 t2 就是一種 instance type，t2 特色是低成本（相較於其他 instance type），適合一般的 web 應用程式，相較之下，如果是要做 deep learning 訓練，就適合選擇專為深度學習訓練特化的 instance type 。

3. 什麼是 Nginx？有哪些用途與特性？

- nginx 提供 web server 和其他相關功能，像是 reverse proxy、load balancer 等等，Nginx 因為它 event‑driven 的架構，使得他的效能表現很不錯，可以同時接受很多連線。

4. pm2 套件是什麼？有什麼用處？

- pm2 是個適合 production 環境的 process 管理工具，它可以讓程式掛掉後自動重開、或是設定程式在不同的環境如何執行（環境變數）等等，提供各種有關程式執行（process）的功能。

5. 步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?

- proxy 是指從外部網路連到此 ip 的 request 會經過 Nginx ，再由 Nginx 做代理發送到我們真正的 web server，這裡的 proxy 是 reverse proxy（[參考](https://youtu.be/4NB0NDtOwIQ?si=jxwK_DQzPFqiTTL0)），reverse proxy 接受網路傳來的 request 並轉送到沒有暴露於網際網路的 server。
- 相較於直接將 express 掛在 port 80，透過把 Nginx 當成 proxy，可以在 request 直接進到 express 之前，用 Nginx 先去處理這個 request 。透過 Nginx 可以設定許多 web server 的配置，例如 error page、redirect 、load balancing 等等。

6. 在 readme 中提供步驟 9 的 Nginx 設定檔

`/etc/nginx/conf.d/default.conf`:

```
server {
    listen       80;
    server_name  localhost;
    location / {
        proxy_pass http://localhost:3000/;
    }
}
```

7. Security Group 是什麼？用途為何？有什麼設定原則嗎？

- 防火牆設定，控制哪些 port 可以傳資料進去或傳資料出來，設定原則可以依循只打開會用到的，不用的不要開。

8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？

- sudo 是以 super user 的身份 （root） 執行指令，如果要執行僅限 root 權限的動作時，就要使用 sudo。

9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？

有兩種 log，一種是 Nginx 本體的錯誤 log：

- Nginx 的錯誤 log 在 `/var/log/nginx/error.log`，我因為一開始執行 Nginx 沒有加 sudo 而跳出錯誤訊息找到：

```shell
$ nginx -s quit
nginx: [alert] could not open error log file: open() "/var/log/nginx/error.log" failed (13: Permission denied)
```

另一種 log 是 web server 的 access log，可以從 Nginx 的 `/etc/nginx/nginx.conf` 中找到

```
http {
	# ....
	access_log /var/log/nginx/access.log main;
}
```

怎麼看 log：

- 可以用 `cat` 印出所有或是 `tail -f` follow tail log

10. 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」

- pm2 啟動 express 完，看 `pm2 list` 發現 status 是 errored？

  - 可用 `pm2 log <id>` 去看 log，如果是 module not found 的 error，那很有可能是忘記 npm install package 了 😅

- 在做作業的過程，覺得 Nginx 的 `.conf` 不好寫，不確定有沒有理解某些設定的意義
  - 因為網路上有各式各樣的 conf ，有點眼花撩亂
  - 例如，原本的 `default.conf` 有 `server_name localhost;` 因此我在新的 `.conf` 也有加這一行，但把這行拿掉或亂改 server_name 都不會影響在 EC2 上 `curl localhost`
  - 後來看 [How nginx processes a request](https://nginx.org/en/docs/http/request_processing.html) 和 [server_names](https://nginx.org/en/docs/http/server_names.html)，才了解 nginx 轉送 request 時，會使用 header 中的 `Host` 去看哪個 server 的 server_name 有符合，而且找不到符合的，就會轉給 default server（第一個 server）。

11. 列出完成本作業時參考的資料

- https://www.youtube.com/watch?v=4NB0NDtOwIQ
- https://medium.com/starbugs/web-server-nginx-2-bc41c6268646
- https://www.youtube.com/watch?v=-QcQd3Bkc9o&ab_channel=SoftwareDeveloperDiaries
- https://blog.nginx.org/blog/inside-nginx-how-we-designed-for-performance-scale
- https://nginx.org/en/docs/http/request_processing.html
