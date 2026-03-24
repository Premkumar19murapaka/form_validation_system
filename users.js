function render() {
    let search = document.getElementById("search").value.toLowerCase();
    let role = document.getElementById("role").value;
    let list = document.getElementById("list");

    let filtered = users.filter(u => {
        return (
            u.name.toLowerCase().includes(search) &&
            (role === "" || u.role === role)
        );
    });

    list.innerHTML = "";

    if (filtered.length === 0) {
        list.innerHTML = "<p>No results found</p>";
        return;
    }

    filtered.forEach(u => {
        let div = document.createElement("div");
        div.className = "item";

        div.innerHTML = `
      <span>${u.name}</span>
      <span class="role">${u.role}</span>
    `;

        list.appendChild(div);
    });
}

// initial render
render();