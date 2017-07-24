document.addEventListener('DOMContentLoaded', function () {
    var ordinalNodes = document.getElementsByClassName('ordinal'),
        forEach      = Array.prototype.forEach,
        getOrdinalString;

    getOrdinalString = function (number) {
        var s = ['th','st','nd','rd'],
            v = number % 100;

        return (s[(v-20) % 10] || s[v] || s[0]);
    };

    forEach.call(ordinalNodes, function (ordinalNode) {
        var number        = parseInt(ordinalNode.innerHTML),
            ordinalString = getOrdinalString(number);

        ordinalNode.innerHTML += '<sup>' + ordinalString + '</sup>';
    });
});

root = document.getElementsByTagName('html')[0];

isDark = window.localStorage.getItem("dark") || false;
if(isDark) {
    root.setAttribute('class', 'dark');
    window.localStorage.setItem("dark", true);
}
else {
    window.localStorage.setItem("dark", false);
}

function switchDark() {
    if(isDark) {
        root.setAttribute('class', '');
        isDark = false;
        window.localStorage.setItem("dark", false);
    }
    else {
        root.setAttribute('class', 'dark');
        isDark = true;
        window.localStorage.setItem("dark", true);
    }
}


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-71214783-2', 'auto');
ga('send', 'pageview');