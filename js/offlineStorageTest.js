$(document).ready(function(){
	console.log("Offline Storage Plugin");
	var someJSONObject = {
		someNumber : 10,
		someString : "Naveen",
		someBoolean : true
	}
	var isWebStorage = $.offlineStorage.isWebStorageAvailable();
	console.log(isWebStorage);
	
	//Testing the type of object
	var someObject = 2;
	$.offlineStorage.storeObject("someObjectNumber",someObject);
	
	var keyName = "someObjectNumber"
	$.offlineStorage.retriveObject(keyName);
}); 