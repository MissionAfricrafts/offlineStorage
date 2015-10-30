/*
	** Author : Naveen Yaragarla
	** Organisation : Tringapps
	** Date 		: 27-10-2015
	** Plug-in Name 	: offlineStorage
*/
//Start of Plugin
(function(){
	 offlineStorage = {
		/*
		** Method Name : isWebStorageAvailable Input : Nothing
		** To check the webStorage is supported by the loaded by the browser
		*/
		isWebStorageAvailable : function(){
			var isStorageSupports = false;
			if(typeof(Storage) !== "undefined") {
				isStorageSupports = true;
			} else {
				isStorageSupports = false;
			}
			return isStorageSupports;
		},
		/*
		** Method Name : storeObject Input : key and objectToSave 
		** To save the object to webStorage provided key should be different
		*/
		storeObject : function(key,objectToSave){
			var isKeyExit = localStorage.getItem(key);
			if(isKeyExit === null || isKeyExit === undefined){
				localStorage.setItem(key,objectToSave);
				console.log("Object is successfully inserted");
				return true;
			} else {
				return false;
			}
			
		},
		/*
		** Method Name : retrieveObject Input : key
		** To retrieve the object if the key is matched by the key name.
		*/
		retrieveObject : function(key){
			var retrieveObject = localStorage.getItem(key);
			if(retrieveObject === null || retrieveObject === undefined){
				console.log("retrievedObject value is not defined");
			} else {
				console.log("object found and the value is",retrieveObject);
			}
		},
		/*
		** Method Name : clearStorage Input : storageType
		** To clear the webStorage
		*/
		clearStorage : function(storageType){
			if(storageType == "localStorage"){
				localStorage.clear();
			} else {
				sessionStorage.clear();
			}
		}
	}
}());