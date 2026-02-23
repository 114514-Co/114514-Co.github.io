/* --- script.js --- */

// 検索データ
const searchData = [
    { name: "NEWS - 最新情報", url: "news.html" },
    { name: "GAMES - 迫真アクションRPG", url: "games.html" },
    { name: "GALLERY - 視覚アーカイブ", url: "gallery.html" },
    { name: "COMPANY - 組織概要", url: "company.html" },
    { name: "ENV - システム要件", url: "environment.html" },
    { name: "SECRET - 禁忌の領域", url: "secret.html" }
];

// 検索機能
function siteSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (query.length < 1) {
        resultsContainer.style.display = 'none';
        return;
    }

    const filtered = searchData.filter(item => item.name.toLowerCase().includes(query));

    if (filtered.length > 0) {
        resultsContainer.style.display = 'block';
        filtered.forEach(item => {
            const div = document.createElement('div');
            div.className = 'search-item';
            div.innerText = `>> ${item.name}`;
            div.onclick = () => window.location.href = item.url;
            resultsContainer.appendChild(div);
        });
    } else {
        resultsContainer.style.display = 'none';
    }
}

// 以前作成したモバイルメニューやモード切替の関数もここに入れておくと楽です
