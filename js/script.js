document.getElementById('butt-1').addEventListener('click', function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('main-content').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'pages/lab-1/1.html', true);
    xhr.send();
});

document.getElementById('butt-2').addEventListener('click', function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('main-content').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'pages/lab-1/2.html', true);
    xhr.send();
});

document.getElementById('butt-3').addEventListener('click', function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('main-content').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'pages/lab-1/3.html', true);
    xhr.send();
});

document.getElementById('butt-4').addEventListener('click', function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('main-content').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'pages/lab-1/4.html', true);
    xhr.send();
});

document.getElementById('butt-5').addEventListener('click', function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('main-content').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'pages/lab-1/5.html', true);
    xhr.send();
});
document.getElementById('butt-6').addEventListener('click', function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('main-content').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'pages/lab-1/6.html', true);
    xhr.send();
});
