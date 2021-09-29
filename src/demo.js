
let media = 'video';
export function webcamToggle() {
var v2 = document.getElementById('v2');
  media = media === 'video' ? 'webcam' : 'video';
  if(media==='webcam') {
  //  controlContent = document.getElementById('controls').innerHTML;
  //  timingContent = document.getElementById('timing').innerHTML;
    document.getElementById('btn').innerHTML = 'Switch to Video';
    navigator.mediaDevices.getUserMedia({video: true, audio:true})
        .then((stream) => {
            v2.srcObject = stream;
	     window.localStream = stream;
           // vid2.srcObject = stream;
         //   document.getElementById('controls').innerHTML = "Switch back to video for player controls";
         //   document.getElementById('timing').innerHTML = '';
        })
        .catch(function(err) {
            media = 'video';
            console.log(err);
        });
  }
  else {
    //document.getElementById('controls').innerHTML = controlContent;
    //document.getElementById('timing').innerHTML = timingContent;
    document.getElementById('btn').innerHTML = 'Switch to Webcam';
    v2.srcObject = null;
    //vid2.srcObject = null;
  }
  
}
