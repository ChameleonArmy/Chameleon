// Обновление времени
function updateTime() {
    const now = new Date();
    document.getElementById("time").innerText = "Current Time: " + now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// Загрузка курса токена (замени `YOUR_TOKEN_ADDRESS`)
async function fetchPrice() {
    try {
        const response = await fetch("https://api.dexscreener.com/latest/dex/pairs/polygon/YOUR_TOKEN_ADDRESS");
        const data = await response.json();
        document.getElementById("price").innerText = `$${data.pairs[0].priceUsd}`;
    } catch (error) {
        document.getElementById("price").innerText = "Error loading price";
    }
}
fetchPrice();
setInterval(fetchPrice, 30000);
