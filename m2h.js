try {
    $.get()
} catch {
    console.log('Not use jqeury');
    console.log('include jquery cdn');
    var script = document.createElement("SCRIPT");
    script.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
    };
    document.getElementsByTagName("head")[0].appendChild(script);
}


// check showdown
try {
    var convert = new showdown.Converter()
} catch {
    console.log('include showdown cdn');
    var script = document.createElement("SCRIPT");
    script.src = 'https://rawgit.com/showdownjs/showdown/1.9.0/dist/showdown.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var convert = new showdown.Converter()
    };
    document.getElementsByTagName("head")[0].appendChild(script);
}


function m2h(node, url) {
    var convert = new showdown.Converter()
    zf = document.getElementById(node);
    var a = $.get(url, function() {
        zf.innerHTML = convert.makeHtml(a.responseText)
    });
}

function h2h(node, url) {
    zf = document.getElementById(node);
    var a = $.get(url, function() {
        zf.innerHTML = a.responseText;
    }); 
}
