// 以後要改公告、換圖片，或是增加第四則公告，都只改這裡！
const newsData = [
    {
        title: "近期公告 A",
        img: "https://images.plurk.com/3QiuSynz4HmCSdgxZgplaj.jpg", // 妳那張帥氣的意識圖
        link: "news-a.html" // 連結到公告 A 的頁面
    },
    {
        title: "近期公告 B",
        img: "https://images.plurk.com/3QiuSynz4HmCSdgxZgplaj.jpg",
        link: "news-b.html"
    },
    {
        title: "近期公告 C",
        img: "https://images.plurk.com/3QiuSynz4HmCSdgxZgplaj.jpg",
        link: "news-c.html"
    }
];

// 下面這段渲染邏輯不用動它，它會自動抓上面的資料
function renderNews() {
    const grids = document.querySelectorAll('.update-grid');
    grids.forEach(grid => {
        grid.innerHTML = ""; 
        newsData.forEach(item => {
            const newsHtml = `
                <a href="${item.link}" class="update-item">
                    <div class="update-img-box">
                        <img src="${item.img}" alt="${item.title}">
                    </div>
                    <h3>${item.title}</h3>
                </a>
            `;
            grid.innerHTML += newsHtml;
        });
    });
}
document.addEventListener('DOMContentLoaded', renderNews);
