function setupRoomLink(roomId, targetPage) {
    document.getElementById("link-" + roomId).addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.setItem(roomId + "_visited", "true");

        // Optional: visual feedback before navigation
        setTimeout(() => {
            window.location.href = targetPage;
        }, 200);
    });
}

function updateRoomColors() {
    const rooms = ["miraskop", "linac"];
    rooms.forEach(roomId => {
        const circle = document.querySelector(`#${roomId} circle`);
        const solved = localStorage.getItem(roomId + "_solved") === "true";
        const visited = localStorage.getItem(roomId + "_visited") === "true";

        if (solved) {
            circle.style.fill = "green";
            circle.style.fillOpacity = "0.53";
        } else if (visited) {
            circle.style.fill = "yellow";
            circle.style.fillOpacity = "0.53";
        } else {
            circle.style.fill = "#e53a3a"; // default red
            circle.style.fillOpacity = "0.53";
        }
    });
}

function setupCheckbox(roomId) {
    const checkbox = document.getElementById(roomId + "-checkbox");

    // Load initial state
    document.addEventListener("DOMContentLoaded", () => {
        const solved = localStorage.getItem(roomId + "_solved") === "true";
        checkbox.checked = solved;
    });

    // On checkbox change
    checkbox.addEventListener("change", (e) => {
        localStorage.setItem(roomId + "_solved", e.target.checked ? "true" : "false");
    });
}
