const insights = [
  "Velocity is up 18% vs last sprint — more proposals are shifting to signed contracts.",
  "Client satisfaction rating holds at 4.9/5 after delivering 6 polished brand sprints.",
  "Avg response time on UpworkPro messages dropped to 9m (industry avg: 24m).",
];

let currentInsight = 0;
const insightText = document.getElementById("insight-text");
const insightButton = document.getElementById("insight-next");

function refreshInsight() {
  if (!insightText || !insightButton) return;
  insightText.textContent = insights[currentInsight];
}

if (insightButton) {
  insightButton.addEventListener("click", () => {
    currentInsight = (currentInsight + 1) % insights.length;
    refreshInsight();
  });
}

refreshInsight();
