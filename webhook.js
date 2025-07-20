<!-- webhook.js -->
document.getElementById("supportForm").addEventListener("submit", e => {
  e.preventDefault();
  const discord = document.getElementById("discord").value;
  const description = document.getElementById("description").value;
  const webhookURL = "https://discord.com/api/webhooks/YOUR_WEBHOOK_HERE";

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
