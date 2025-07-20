<!-- webhook.js -->
document.getElementById("supportForm").addEventListener("submit", e => {
  e.preventDefault();
  const discord = document.getElementById("discord").value;
  const description = document.getElementById("description").value;
  const url = "https://discord.com/api/webhooks/1396487624797196359/57kGIGmciyozFuEt9OoMJz4vJym6HtmX0jzsw2JlNH4uxJuI6Zwf48_1xfuPEu3rnb7v";
  const payload = {
    embeds: [{
      title: "📩 New Support Request",
      color: 16711680,
      fields: [
        { name: "Discord", value: discord },
        { name: "Description", value: description }
      ],
      footer: { text: "Pulse Development" },
      timestamp: new Date().toISOString()
    }]
  };
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(() => {
    alert("Submitted!");
    document.getElementById("supportForm").reset();
  }).catch(err => {
    alert("Error sending.");
    console.error(err);
  });
});
