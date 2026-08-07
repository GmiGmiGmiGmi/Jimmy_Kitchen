# Jimmy's Kitchen — Automatic Email Setup

This is a one-time setup. After it is complete, your wife presses **发送订单给老公** once.
The order is automatically emailed to **Jimmymengyu@gmail.com**. Mail and Messages do not open.

The app shows **Your order has been confirmed! / 订单已确认 ❤️** after the Google Apps Script
backend has accepted the order and run the email-send step.

## 1. Create the free Google Apps Script backend

1. Sign in to the Google account that will send the order emails.
2. Open https://script.google.com/
3. Click **New project**.
4. Delete the sample code.
5. Open this ZIP's `google_apps_script/Code.gs`.
6. Copy all of it into the Apps Script editor.
7. Click **Save**.

## 2. Deploy as a Web App

1. Click **Deploy** → **New deployment**.
2. Click the gear icon → **Web app**.
3. **Execute as:** `Me`.
4. **Who has access:** `Anyone`.
5. Click **Deploy**.
6. Approve the requested Google Mail permission.
7. Copy the **Web app URL**. It must end in `/exec`.

## 3. Connect Jimmy's Kitchen

Open `app.js` and find:

```js
const EMAIL_WEB_APP_URL="PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
```

Replace it with your copied `/exec` URL, for example:

```js
const EMAIL_WEB_APP_URL="https://script.google.com/macros/s/EXAMPLE/exec";
```

Save `app.js`.

## 4. Upload to GitHub Pages

Replace the old website files with this version, commit the changes, and wait for GitHub Pages to update.

## 5. Test

Add a dish → select rice → open cart → press **发送订单给老公**.

Expected result:
- No Mail or Messages app opens.
- Button briefly says **正在发送订单…**
- The confirmation card appears.
- An email arrives at `Jimmymengyu@gmail.com`.

## Cost

For normal personal/family usage, this stays within the free Google Apps Script/MailApp quotas.
No paid SMS or WhatsApp service is required.

## Security note

Your GitHub Pages site is public, so the Apps Script URL in `app.js` can be seen by someone who
inspects the site's source. The recipient address is kept in Apps Script rather than the webpage.
This setup is suitable for a small personal app, not a high-security public ordering service.
