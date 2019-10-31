const delay = ms => new Promise(res => setTimeout(res, ms));

const dataFetcher = {
    async getResults(url, pageViews, frequency) {
        // const response = await fetch(`https://url/calculate-bandwidth`);
        // const results = await response.json();
        // return {
        //     bandwidth: results.bandwidth,
        //     sitemap: results.sitemap
        // };
        await delay(3000);
        return {
            bandwidth: 6.7455,
            sitemap: [
                "https://bootswatch.com/",
                "https://bootswatch.com/default/",
                "https://bootswatch.com/cerulean/",
                "https://bootswatch.com/cosmo/",
                "https://bootswatch.com/cyborg/",
                "https://bootswatch.com/darkly/",
                "https://bootswatch.com/flatly/",
                "https://bootswatch.com/journal/",
                "https://bootswatch.com/litera/",
                "https://bootswatch.com/lumen/",
                "https://bootswatch.com/lux/",
                "https://bootswatch.com/materia/",
                "https://bootswatch.com/minty/",
                "https://bootswatch.com/pulse/",
                "https://bootswatch.com/sandstone/",
                "https://bootswatch.com/simplex/",
                "https://bootswatch.com/sketchy/",
                "https://bootswatch.com/slate/",
                "https://bootswatch.com/solar/",
                "https://bootswatch.com/spacelab/",
                "https://bootswatch.com/superhero/",
                "https://bootswatch.com/united/",
                "https://bootswatch.com/yeti/",
                "https://bootswatch.com/help/"
            ]
        }
    }
};

const mainContentUI = document.querySelector("#main-content");
const resultContentUI = document.querySelector("#result-content");
const siteMapListUI = document.querySelector(".list-group");
const calculateButtonUI = document.querySelector("#calculateButton");
const calculateAgainButtonUI = document.querySelector("#calculateAgainButton");

calculateButtonUI.addEventListener("click", function () {
    const url = document.querySelector("#websiteUrlInput").value;
    const pageViews = document.querySelector("#pageViewsInput");
    const frequency = function () {
        if (document.querySelector("#perHourRadio").checked) {
            return "hour";
        } else if (document.querySelector("#perDayRadio").value) {
            return "day";
        } else if (document.querySelector("#perWeekRadio").value) {
            return "week";
        } else {
            return "month";
        }
    };

    dataFetcher.getResults(url, pageViews, frequency)
        .then(result => {
            resultContentUI.style.display = "block";
            mainContentUI.style.display = "none";

            document.querySelector("#bandwidth-value").innerHTML = result.bandwidth;

            result.sitemap.forEach((siteUrl) => {
                var listElement = document.createElement("a");
                listElement.setAttribute("class", "list-group-item list-group-item-action");
                listElement.setAttribute("target", "_blank");
                listElement.setAttribute("href", siteUrl);
                listElement.innerHTML = siteUrl;
                siteMapListUI.appendChild(listElement);
            });
        });
});

calculateAgainButtonUI.addEventListener("click", function() {
    resultContentUI.style.display = "none";
    mainContentUI.style.display = "block";
});