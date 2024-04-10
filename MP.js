function removeads() { // This is horrible code. I really dont know javascript that well, I just wanted this functionality.
    try {
        var listTop = document.querySelectorAll(".hz-Listing");

        listTop.forEach(function(item) {
            var priority = item.querySelector(".hz-Listing-priority");
            if (priority && (priority.textContent.includes("Topadvertentie") || priority.textContent.includes("Dagtopper"))) {
                item.remove();
            }
        });
    } catch {}

    try{
        var Ads = document.querySelectorAll(".hz-Banner--fluid");
        Ads.forEach(function(item) {
            item.remove();
        });

    } catch {}
    try{
        document.querySelector(".hz-Listings__container--cas").remove();
    } catch{}
    try{
        document.getElementById("banner-lrp-video").remove();
    } catch{}
    try{
        document.getElementById("adsense-container").remove();
    } catch{}
    try{
        document.getElementById("adsense-container-bottom-lazy").remove();
    } catch{}
}

setInterval(removeads, 1000);