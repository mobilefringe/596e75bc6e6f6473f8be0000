$(document).ready(function() {
    var iframe = document.getElementById('chat_frame');
    console.log(iframe)
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    console.log(iframeDocument)
    var iframeWindow = iframe.contentWindow;
    console.log(iframeWindow)

    // if (iframeWindow) {
    //     // you can even call jQuery or other frameworks if it is loaded inside the iframe
    //     iframeContent = iframeWindow.$('#stores');
    //     console.log(iframeContent)
    
    //     // or
    //     iframeContent = iframeWindow.$('#frameBody');
    
    //     // or even use any other global variable
    //     iframeWindow.inside_iframe_variable = window.outside_iframe_variable;
    // }
    
    $('#stores', iframeDocument).click(function() {
                alert("Clicked me..!");
            });

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