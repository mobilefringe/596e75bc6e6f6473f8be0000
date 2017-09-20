$(document).ready(function() {
    var iframe = document.getElementById('chat_frame');
    console.log(iframe)
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    console.log(iframeDocument)
    var iframeContent;

    if (iframeDocument) {
        iframeContent = iframeDocument.getElementById('stores');
        console.log(iframeContent)
    }
    
    var iframeWindow = iframe.contentWindow;
    console.log(iframeWindow)

    if (iframeWindow) {
        // you can even call jQuery or other frameworks if it is loaded inside the iframe
        iframeContent = iframeWindow.jQuery('#frameBody');
    
        // or
        iframeContent = iframeWindow.$('#frameBody');
    
        // or even use any other global variable
        iframeWindow.inside_iframe_variable = window.outside_iframe_variable;
    }

    $("#hours").click(function() {
        console.log("HOURS!")
    });
    
    $("#location").click(function() {
        console.log("LOCATION!")
    });
    
    $("#contact").click(function() {
        console.log("CONTACT!")
    });
    
});