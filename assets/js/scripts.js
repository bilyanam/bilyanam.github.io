// User First Name
let userInput;
function checkInput() {
    userInput = document.getElementById("fName").value;
    /* Get length of input string */
    var strLen = userInput.length; 
    if (strLen < 2 ) {
        // Show error message
        showErrorMsg(); 
        return;
    }
    else { 
        // Show content to user
        hideErrorMsg();
        showContent(userInput); 
    }
}

// User Input Error Messages
function showErrorMsg() {
    document.getElementById("error-msg").classList.remove("hidden");
    document.getElementById("error-msg").classList.add("visible");
}

function hideErrorMsg() {
    document.getElementById("error-msg").classList.remove("visible");
    document.getElementById("error-msg").classList.add("hidden");
}


// The great reset
function resetUser() {
    document.getElementById("fName").value = "";
    document.getElementById("content-area").classList.remove("visible");
    document.getElementById("content-area").classList.add("hidden"); 
    document.getElementById("error-msg").classList.remove("visible");
    document.getElementById("error-msg").classList.add("hidden");    
}

// Show the remainder of the content area
function showContent(userInput) {
    console.log("showContent" +userInput);
    document.getElementById("content-area").classList.remove("hidden");
    document.getElementById("content-area").classList.add("visible");
    document.getElementById("userOutput").innerHTML = "<p>Hi <b>"+userInput+"<\/b>, thank you for visiting my web page.<\/p>";
    doBrowserDetection();
}

function doBrowserDetection() {
    console.log("now detecting browser");
    //Browser detection
    platform.name; // 'Safari'
    platform.version; // '5.1'
    platform.product; // 'iPad'
    platform.manufacturer; // 'Apple'
    platform.layout; // 'WebKit'
    platform.os; // 'iOS 5.0'
    platform.description; // 'Safari

    let browserName = platform.name;
    let browserVersion = platform.version;    
    let browserstats;
    let browserOutput;

    if (browserName.indexOf("Chrome") == 0) {
        browserName = "Google Chrome";
        browserStats = "60%";
        showBrowserOutput(browserName,browserStats);
    }

    else if (browserName.indexOf("Firefox") == 0) {
        browserName = "Mozilla Firefox";
        browserStats = "6%";
        showBrowserOutput(browserName,browserStats);
    }

    else if (browserName.indexOf("Microsoft Edge") == 0) {
        browserName = "Microsoft Edge";
        browserStats = "4%";
        showBrowserOutput(browserName,browserStats);
    }

    else {
        browserName = "Google Chrome";
        browserStats = "60%";
        showBrowserOutput(browserName,browserStats);
    }
}

function showBrowserOutput(browserName,browserStats) {
    browserOutput = "<p>You seem to be using the <b>" + browserName+ "<\/b> web browser, (version (<b>" +platform.version+ "<\/b>).<\/p>";
    browserOutput = browserOutput + "<p>According to <a href=\"https:\/\/gs.statcounter.com/browser-market-share/all/europe\" target=\"_blank\" class=\"fancy-link\">StatsCounter</a>, so too do about <b> "+browserStats+" <\/b> of web users in Europe.<\/p>";
    document.getElementById("browserOutput").innerHTML = browserOutput
}

document.getElementById("btn-find-me").addEventListener('click', geoFindMe)

function geoFindMe() {
    document.getElementById("allowPersmission").innerHTML = "Finding you now, <b>"+userInput+"</b>. Please wait a moment ...";
   if (navigator.geolocation) {
        // First callback for success, second for failure
        navigator.geolocation.getCurrentPosition(whereAmI, oopsError);
    }
    else {
        // An old web browser has let you down.
        document.getElementById(msgFoundYou).innerHTML = "<p>Your web browser does not support Geolocation.</p>";
    }
}
     
function whereAmI(position) {
    // Get some coords parameters from position object
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
        
    document.getElementById("allowPersmission").innerHTML = "Found you, <b>"+userInput+"</b>!"; 
    document.getElementById("positionStatus").innerHTML = "";

    document.getElementById("lat").innerHTML = "Latitude: <b>"+lat+"&deg;</b>";
    document.getElementById("lng").innerHTML = "Longtitude: <b>"+lng+"&deg;</b>";

    let mapURL = "https:\/\/www.openstreetmap.org/#map=18/";
    let mapParams = lat+'/'+lng;
    mapURL = mapURL+mapParams;
    document.getElementById("map-block").innerHTML = "<a class=\"btn btn-primary\" role=\"button\" href="+mapURL+" target=\"blank\" class=\"fancy-link\">Show Map &nbsp;<i class=\"fas fa-map-marker-alt\"></i><\/a>";    
}

function oopsError(error) {
    console.log('ERROR(' + error.code + '): ' + error.message);
    switch(error.code) {
        case error.PERMISSION_DENIED:
            positionStatus.innerHTML = "User denied the request for Geolocation."
        break;
        case error.POSITION_UNAVAILABLE:
            positionStatus.innerHTML = "Location information is unavailable."
        break;
        case error.TIMEOUT:
            positionStatus.innerHTML = "The request to get user location timed out. It took too long and the web browser gave up."
        break;
            case error.UNKNOWN_ERROR:
            positionStatus.innerHTML = "An unknown error occurred."
        break;
    }

} 
