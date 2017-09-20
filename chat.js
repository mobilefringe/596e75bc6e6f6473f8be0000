$(document).ready(function() {
var iframe = document.getElementById('chat_frame');
console.log(iframe)
var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
var iframeContent;

if (iframeDocument) {
    iframeContent = iframeDocument.getElementById('stores');
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