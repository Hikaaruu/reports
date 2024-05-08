document.querySelector('.sidebar').addEventListener('click', function(event) {
    if (event.target && event.target.matches('.button')) {
        event.preventDefault();
        var buttonId = event.target.id;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById('main-content').innerHTML = xhr.responseText;
                addScriptIfNotExists(buttonId);
            }
        };
        var baseUrl;
        if (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/")) {
            baseUrl = 'pages/lab-1/';
        } else {
            baseUrl = 'pages/' + window.location.pathname.split('/').slice(-1)[0].replace('.html', '') + '/';
        }
        xhr.open('GET', baseUrl + buttonId.split('-')[1] + '.html', true);
        xhr.send();

        //var script = document.createElement('script');
        //script.src = baseUrl + buttonId.split('-')[1] + '/code.js';
        //document.head.appendChild(script);
    }
});

function addScriptIfNotExists(buttonId) {
    var baseUrl;
    if (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/")) {
        baseUrl = 'pages/lab-1/';
    } else {
        baseUrl = 'pages/' + window.location.pathname.split('/').slice(-1)[0].replace('.html', '') + '/';
    }
    var scriptSrc = baseUrl + buttonId.split('-')[1] + '/code.js';
    
    // Remove all scripts except 'js/script.js'
    var scripts = document.querySelectorAll('script:not([src="js/script.js"])');
    scripts.forEach(function(script) {
        script.remove();
    });

    // Add the new script if it doesn't exist
    if (!document.querySelector('script[src="' + scriptSrc + '"]')) {
        var script = document.createElement('script');
        script.src = scriptSrc;
        script.onload = function() {
            console.log("Script loaded successfully");
        };
        script.onerror = function() {
            console.error("Failed to load script: " + scriptSrc);
        };
        document.head.appendChild(script);
    }
}