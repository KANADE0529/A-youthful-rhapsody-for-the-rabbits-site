// 這裡就是妳的「公告資料庫」
// 以後要換圖、換標題，改這裡就好！
const newsData = [
    {
        title: "近期公告標題文字",
        img: "https://images.plurk.com/3QiuSynz4HmCSdgxZgplaj.jpg",
        link: "news.html"
    },
    // 如果以後有第二則公告，可以像這樣增加：
    /*
    {
        title: "第二次公告測試",
        img: "其他網址",
        link: "news-2.html"
    }
    */
];

// 這段程式碼負責把資料塞進網頁裡的 .update-grid 區塊
function renderNews() {
    const grids = document.querySelectorAll('.update-grid');
    
    grids.forEach(grid => {
        grid.innerHTML = ""; // 先清空原本的手寫內容
        
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

// 當網頁載入完成後執行
document.addEventListener('DOMContentLoaded', renderNews);
