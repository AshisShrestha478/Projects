function createCard (title, cName, views, monthsOld, duration) {
    let shortView = "";

    if (views >= 1000000) {
        shortView = (views / 1000000) + "M";
    } else {
        shortView = (views / 1000) + "K";
    }

    let html = 
    `    
        <div class="container">
                <div class="left">
                    <img src="img/harry.jpg" alt="harry-img">
                    <span>${duration}</span>
                </div>
                <div class="right">
                    <span>${title}</span>
                    <div class="min-info">
                        <span>${cName}</span>
                        <span>&#9210 ${shortView} views</span>
                        <span>&#9210 ${monthsOld} months ago</span>
                    </div>
                </div>
        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", html);
}

createCard("Tutorial #1", "CodeWith Harry", 727000, 2, "31:20");
