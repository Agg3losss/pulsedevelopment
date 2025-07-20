// File: js/webhook.js

document.getElementById("supportForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const discord = document.getElementById("discord").value;
  const topic = document.getElementById("topic").value;
  const description = document.getElementById("description").value;

  const webhookURL = "https://discord.com/api/webhooks/XXX/YYY"; // Replace with your webhook

  const payload = {
    embeds: [
      {
        title: "📩 New Support Request",
        color: 16711680,
        fields: [
          { name: "Discord", value: discord },
          { name: "Topic", value: topic },
          { name: "Description", value: description },
        ],
        footer: {
          text: "Pulse Development",
        },
        timestamp: new Date().toISOString(),
      },
    ],
  };

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then(() => {
      alert("Support request sent!");
      document.getElementById("supportForm").reset();
    })
    .catch((err) => {
      alert("Error sending support request.");
      console.error(err);
    });
});
