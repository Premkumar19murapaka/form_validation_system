
// stats
document.getElementById("users").innerText = stats.users;
document.getElementById("active").innerText = stats.active;
document.getElementById("pending").innerText = stats.pending;

// sidebar toggle
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
}

// render articles
let container = document.getElementById("articlesList");
articles.forEach(a => {
    let div = document.createElement("div");
    div.className = "row";

    div.innerHTML = `
    <span>${a.title}</span>
    <span>${a.views}</span>
    <span>${a.comments}</span>
  `;

    container.appendChild(div);
});