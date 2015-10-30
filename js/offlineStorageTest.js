$(document).ready(function(){
	var typeOfStorage = "localStorage"
	offlineStorage.clearStorage(typeOfStorage);
	console.log("Offline Storage Plugin");
	var someJSONObject = {
		someNumber : 10,
		someString : "Naveen",
		someBoolean : true
	}
	
	//Condition to check the webStorage is compatible in the loaded browser
	var isWebStorage = offlineStorage.isWebStorageAvailable();
	console.log(isWebStorage);
	
	//Storing the Object to webStorage based on browser compatibility
	if(isWebStorage){
		var firstNumberToSave = 1,secondNumberToSave = 2;
		offlineStorage.storeObject("firstObject",firstNumberToSave);
		offlineStorage.storeObject("secondObject",secondNumberToSave);
	} else {
		
	}
	var firstKey = "firstObject",secondKey = "secondObject";
	var firstRetrievedObject = offlineStorage.retrieveObject(firstKey);
	var secondRetrieveObject = offlineStorage.retrieveObject(secondKey);
	
	//Result
	console.log("firstRetrievedObject",firstRetrievedObject);
	console.log("secondRetrieveObject",secondRetrieveObject);
}); 