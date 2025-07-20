<!-- webhook.js -->
document.getElementById("supportForm").addEventListener("submit", e => {
  e.preventDefault();
  const discord = document.getElementById("discord").value;
  const description = document.getElementById("description").value;
  const webhookURL = "https://discord.com/api/webhooks/1396487624797196359/57kGIGmciyozFuEt9OoMJz4vJym6HtmX0jzsw2JlNH4uxJuI6Zwf48_1xfuPEu3rnb7v";

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      embeds: [
        {
          title: "New Support Request",
          fields: [
            { name: "Discord Username", value: discord },
            { name: "Issue", value: description }
          ],
          color: 15158332,
          footer: {
            text: "Pulse Development"
          },
          timestamp: new Date()
        }
      ]
    })
  })
    .then(() => alert("Request sent successfully!"))
    .catch(() => alert("Error sending request."));
});
