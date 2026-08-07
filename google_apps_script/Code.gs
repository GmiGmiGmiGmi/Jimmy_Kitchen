const ORDER_EMAIL = "Jimmymengyu@gmail.com";

function doPost(e) {
  const orderText = String((e && e.parameter && e.parameter.order_text) || "").trim();
  const nonce = String((e && e.parameter && e.parameter.nonce) || "");
  const submittedAt = String((e && e.parameter && e.parameter.submitted_at) || "");

  if (!orderText || orderText.length > 6000) {
    return reply_(false, nonce, "Invalid order");
  }

  const subject = "🍽️ 老婆下单啦 — Jimmy's Kitchen";
  const plainBody =
    orderText +
    "\n\n" +
    "Submitted: " + (submittedAt || new Date().toISOString());

  const htmlBody =
    '<div style="font-family:Arial,sans-serif;max-width:620px;padding:24px;color:#2b2119">' +
      '<h2 style="margin:0 0 18px;color:#d97843">🍽️ 老婆下单啦 — Jimmy\'s Kitchen</h2>' +
      '<div style="white-space:pre-wrap;font-size:16px;line-height:1.7;background:#fff8ee;padding:18px;border-radius:16px">' +
        escapeHtml_(orderText) +
      '</div>' +
      '<p style="color:#857368;font-size:12px;margin-top:18px">Submitted: ' +
        escapeHtml_(submittedAt || new Date().toISOString()) +
      '</p>' +
    '</div>';

  try {
    MailApp.sendEmail({
      to: ORDER_EMAIL,
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody,
      name: "Jimmy's Kitchen"
    });

    return reply_(true, nonce, "Order emailed");
  } catch (err) {
    return reply_(false, nonce, String(err && err.message ? err.message : err));
  }
}

function reply_(ok, nonce, message) {
  const payload = JSON.stringify({
    type: "jimmy-kitchen-order-confirmed",
    ok: ok,
    nonce: nonce,
    message: message
  }).replace(/</g, "\\u003c");

  return HtmlService
    .createHtmlOutput(
      '<!doctype html><html><body><script>' +
      'window.parent.postMessage(' + payload + ', "*");' +
      '</script></body></html>'
    )
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
