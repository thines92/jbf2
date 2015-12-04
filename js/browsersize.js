function jsUpdateSize(){
    // Get the dimensions of the viewport
    var width = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
    var height = window.innerHeight ||
                 document.documentElement.clientHeight ||
                 document.body.clientHeight;

    document.getElementById('jsWidth').innerHTML = width;  // Display the width
    document.getElementById('jsHeight').innerHTML = height;// Display the height
};
window.onload = jsUpdateSize;       // When the page first loads
window.onresize = jsUpdateSize;     // When the browser changes size