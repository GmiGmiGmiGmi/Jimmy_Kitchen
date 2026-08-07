# Jimmy’s Kitchen iPhone 半写实菜单版

- 43 道菜均已改为餐厅菜单式半写实图片
- 暖色、干净背景、统一餐盘视角
- 保留收藏、分类、随机选菜、购物车、米饭必选和分享订单
- 完全免费，无月费

解压后打开 `index.html` 预览。上传至 GitHub Pages 后可在 iPhone Safari 使用并添加到主屏幕。


## 订单发送方式
“发送订单给老公”会直接打开收件人为 +61 435 371 422 的短信，并自动填入完整订单。由于 iPhone 安全限制，下单人仍需在信息 App 中按一次发送箭头。

## V2.2 新功能：老婆可以自己加菜
- 菜单上有“＋ 没找到？新增一道菜”。
- 可以输入菜名、选择分类，并从 iPhone 相册选一张图片。
- 图片会自动压缩后保存在当前手机浏览器中。
- 新增菜可以收藏、加减数量、加入购物车，并正常出现在订单短信中。
- 自定义菜品可删除。
- 完全免费，不需要数据库或服务器。

注意：为了保持完全免费和无需登录，自定义菜只保存在新增它的那台手机/浏览器中，不会自动同步到另一台设备。


## V2.3 — Order confirmed screen
When “发送订单给老公” is pressed, iPhone opens the pre-filled SMS to 0435 371 422.
After returning to Jimmy’s Kitchen from Messages, the app automatically displays:

**Your order has been confirmed!**
**订单已确认 ❤️**

Important: iOS does not allow a webpage to verify whether the SMS was actually delivered, so this confirmation means the ordering flow was completed/returned from Messages.


## V2.4 — Automatic email ordering

The order flow now uses a Google Apps Script email backend instead of SMS.

After completing `SETUP_EMAIL.md`:
- Press **发送订单给老公** once.
- No second Send button.
- No Mail or Messages app opens.
- Order emails automatically to `Jimmymengyu@gmail.com`.
- Confirmation appears only after the backend responds.

Backend code: `google_apps_script/Code.gs`
