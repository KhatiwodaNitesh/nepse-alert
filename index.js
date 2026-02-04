const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

if (!BOT_TOKEN || !CHAT_ID) {
  console.error("Missing Telegram secrets");
  process.exit(1);
}

const message = "✅ GitHub Actions successfully sent this message!";

const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

async function sendMessage() {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
    }),
  });

  const data = await response.json();

  if (!data.ok) {
    console.error("Telegram API error:", data);
    process.exit(1);
  }

  console.log("Message sent successfully");
}

sendMessage();
