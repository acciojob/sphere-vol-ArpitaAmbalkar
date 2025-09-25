
function volume_sphere() {
    //Write your code here
	 event.preventDefault();
    let r = document.getElementById("radius").value;
    r = parseFloat(r); // allow decimals too

    // calculate volume
	let vol = document.getElementById("volume");
	if(r<0 || isNaN(r))
	{
		vol.value=NaN;
		return;
	}
    let volume = (4/3) * Math.PI * Math.pow(r, 3);

    // show result
    vol.value = volume.toFixed(4);
} 

window.onload = function() {
    document.getElementById("MyForm").onsubmit = volume_sphere;
}
