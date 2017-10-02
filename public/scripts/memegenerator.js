btnmeme.addEventListener("click", function() {
    //Send input word(s) to API
    var memeRequest = new XMLHttpRequest();
    memeRequest.open('GET', "http://version1.api.memegenerator.net/Generators_Search?q=drinking&pageIndex=0&pageSize=12&apiKey=49e7fc18-f5b9-41ef-8b81-0a3b2a81e3df")
    memeRequest.onload = function() {
        var memeData = JSON.parse(memeRequest.responseText);
        console.log(provData);
        renderProv(provData);
    }
    memeRequest.send();
});

function renderProv(data3) {
    var provString = "<p>" + data3.source + ".</p>";
    proverbmaori.insertAdjacentHTML('beforeend', provString);
    var engString = "<p>" + data3.translation + ".</p>";
    proverbenglish.insertAdjacentHTML('beforeend', engString);
    console.log(data3);
    return data3;
};

// Add button to tweet displayed quote
btn4.addEventListener("click", function() {
    var url = "https://twitter.com/intent/tweet";
    var maoritext = document.getElementById('proverbmaori').children[0].innerHTML;
    var englishtext = document.getElementById('proverbenglish').children[0].innerHTML;
    console.log(maoritext, englishtext);
    var hashtags = "hi,hello,test";
    var via = "userName";
    window.open(url+"?text="+maoritext+englishtext+";hashtags="+hashtags+";via="+via,"","width=500,height=300")
});
