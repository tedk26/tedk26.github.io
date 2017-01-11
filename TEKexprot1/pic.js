// JavaScript Document
x = new Array("TEKexprot1/images/reclaim.jpgreclaim.jpg", "TEKexprot1/images/avon.jpg", "TEKexprot1/images/christine.jpg", "TEKexprot1/images/gnr.jpg", "TEKexprot1/images/sww.jpg");

i = 0;

function next() {
i++;
if(i==x.length) i=0;
document.getElementById("gallery").src = x[i];
	
	
}