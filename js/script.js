document.querySelector('.sidebar').addEventListener('click', function(event) {
    if (event.target && event.target.matches('.button')) {
        event.preventDefault();
        var buttonId = event.target.id;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById('main-content').innerHTML = xhr.responseText;
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
    }
});
