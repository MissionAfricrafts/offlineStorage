/*
	** Author : Naveen Yaragarla
	** Organisation : Tringapps
	** Date 		: 27-10-2015
	** Plug-in Name 	: offlineStorage
*/
//Start of Plugin
(function($){
	 $.offlineStorage = {
		isWebStorageAvailable : function(){
			var isStorageSupports = false;
			if(typeof(Storage) !== "undefined") {
				isStorageSupports = true;
			} else {
				isStorageSupports = false;
			}
			return isStorageSupports;
		},
		storeObject : function(key,objectToSave){
			localStorage.setItem(key,objectToSave);
		},
		retriveObject : function(key){
			var retriveObject = localStorage.getItem(key);
			console.log(retriveObject);
		}
	}
}(jQuery));