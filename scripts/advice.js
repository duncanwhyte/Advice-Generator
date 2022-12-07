const domSnapShot = document.querySelector("body");
const userAdviceId = domSnapShot.querySelector("#advice-id");
const usersAdviceEle = domSnapShot.querySelector("#main-quote");
const adviceGenerateBtn = domSnapShot.querySelector("#advice-btn");

const adviceApiUrl = "https://api.adviceslip.com/advice";
const startingAdviceUrl = "https://api.adviceslip.com/advice/117";

function callApi(url) {
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((quoteObj) => {
            return quoteObj;
        });
}
async function startingQuoteOnLoad() {
    const startingAdviceQuote = await callApi(startingAdviceUrl);
    const { id, advice } = startingAdviceQuote.slip;
    userAdviceId.textContent = id;
    usersAdviceEle.textContent = advice;
}

async function updateAdviceQuoteHandler() {
    const randomAdviceData = await callApi(adviceApiUrl);
    const { id, advice } = randomAdviceData.slip;
    userAdviceId.textContent = id;
    usersAdviceEle.textContent = advice;
}
window.addEventListener("load", startingQuoteOnLoad);
adviceGenerateBtn.addEventListener("click", updateAdviceQuoteHandler);
