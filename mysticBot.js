//Plug.dj mysticBot V0.01
//basically just a simple test :3

//bot constants
var version = 0.01; 

//roles
var host = API.ROLE.HOST; //5
var cohost = API.ROLE.COHOST; //4
var manager = API.ROLE.MANAGER; //3
var bouncer = API.ROLE.BOUNCER; //2
var dj = API.ROLE.DJ; //1
var guest = API.ROLE.NONE; //0

function getRole(user, role){
	if(user.role >= role){
		return true;
	}
	return false;
}

function getChat(message){ //chat command parser
	var sender = API.getUser(message.uid); //sender
	if(getRole(sender, 5)){ //if host
		
	}
};

function parseEntry(user){
	API.sendChat("Welcome to the community, " + user.username)
}
API.on(API.CHAT, getChat); //chat command handler
API.on(API.USER_JOIN, parseEntry); //user join parser
