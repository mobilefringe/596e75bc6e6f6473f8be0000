var iframe = document.getElementById('chat_frame');
console.log(iframe)
var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
var iframeContent;

if (iframeDocument) {
    iframeContent = iframeDocument.getElementById('stores');
}