class Utils{
	static letterCount(){
		const span = document.getElementById("lettercount1");
		const value = document.getElementById("pyramid-input").value.length;
		span.innerHTML = value + ((value > 1 || value === 0) ? " letters." : " letter.");
	}
}