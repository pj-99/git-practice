## HW checklist

- [x] 1-5

## Week 05

1. 你的網址
  - [https://www.pjdev.me/](https://www.pjdev.me/)
2. 你在哪裡購買網域的
  - 用 namecheap 買的
    - ps. 用 GitHub Student Developer Pack 0 元購買
3. DNS 的 A record 是什麼？
  - A 代表 address，A record 紀錄一個網域背後所對應的 IP address。
4. DNS 的 NS record 是什麼？
  - NS 代表 name server， name server 是負責處理 DNS 相關查詢的 server，而 NS record 紀錄了負責解析網域的 DNS 查詢的 name server。
5. Domain Name vs FQDN vs URL 這三者分別為何？
  - `Domain name`: 通常指的是 top domain name 底下的 domain name
  - `FQDN`: 某個服務的完整 domain name
    - Fully-Qualified Domain Name
    - 例如: `mail.google.com` 是 gmail 的 FQDN
  - `URL`: 網路資源的位置，有標準的格式
    - Uniform Resource Locator
6. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？
  - https 連線有加密，比較安全，而透過 http 所傳的內容沒有加密，甚至也可以被中間人修改。

### Ref

- [cloudflare: dns-a-record](https://www.cloudflare.com/zh-tw/learning/dns/dns-records/dns-a-record/)
- [cloudflare: what-is-a-domain-name](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/)
- [搞懂 IP、FQDN、DNS、Name Server│鼠年全馬鐵人挑戰 #05 CHEN, medium](https://its-okay.medium.com/%E6%90%9E%E6%87%82-ip-fqdn-dns-name-server-%E9%BC%A0%E5%B9%B4%E5%85%A8%E9%A6%AC%E9%90%B5%E4%BA%BA%E6%8C%91%E6%88%B0-05-aa60f45496fb)
- [Mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content)
