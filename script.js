/* This is the code for the eye tracking implemented using
* GazeCloud API; details about GazeCloud here: 
* The article referenced for several functions: https://medium.com/@williamwang15/integrating-gazecloudapi-a-high-accuracy-webcam-based-eye-tracking-solution-into-your-own-web-app-2d8513bb9865 
*/


// Calibration is complete
GazeCloudAPI.OnCalibrationComplete = function(){
    console.log('gaze Calibration Complete')
}  

// If camera access is denied
GazeCloudAPI.OnCamDenied = function(){ 
    console.log('camera access denied')  
}  


// Error messages
GazeCloudAPI.OnError = function (msg) {
    console.log('err: ' + msg)
}

// Users can click to recalibrate in real time
GazeCloudAPI.UseClickRecalibration = true;

// Starts eye tracking
GazeCloudAPI.StartEyeTracking();

// Draws a circle around where we are looking right now, for demonstration purposes
function draw(gazeX, gazeY) {
    
    var canvas = document.getElementById('circle');

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize()
    
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d'); 
        
        var X = gazeX;
        var Y = gazeY;
        var R = 45;

        // Clear frame so only one circle is drawn at a time
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#db7575';
        ctx.stroke();
    }
}

GazeCloudAPI.OnResult = function (GazeData) {

    // // Important variables
    // GazeData.state // 0: valid gaze data; -1 : face tracking lost, 1 : gaze data uncalibrated

    // GazeData.docX // gaze x in document coordinates
    // GazeData.docY // gaze y in document coordinates

    // GazeData.GazeX // gaze x in screen coordinates
    // GazeData.GazeY // gaze y in screen coodinates

    // GazeData.time // timestamp
    
    draw(GazeData.GazeX, GazeData.GazeY);

    if (GazeData.GazeY > 700) {
        window.scrollBy(0,50); 
    } else if (GazeData.GazeY < 300) {
        window.scrollBy(0,-50);
    }

    
}

