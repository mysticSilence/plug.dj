//Plug.dj mysticBot V0.01
//basically just a simple test :3

//bot constants
var version = 0.01; 
var botName = "mystic Bot";

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
	};
	return false;
};

function getChat(chat){ //chat command parser
	var sender = API.getUser(chat.uid); //sender
	if(sender.username != botname){
		if(getRole(sender, 5)){ //if host
		};
		if(getRole(sender, 4)){ //if cohost
		};
		if(getRole(sender, 3)){ //if manager
		};
		if(getRole(sender, 2)){ //if bouncer
		};
		if(getRole(sender, 1)){ //if dj
		};
		if(getRole(sender, 0)){ //if guest
			if(chat.message == "!ver"){
				API.sendChat("@" + sender.username + ": I am currently version " + version);
			};
		};
		
		if(chat.message.indexOf(botname) != -1){ //if someone tries to talk to the bot
			API.sendChat("@" + sender.username + ": I am simply a bot. I cannot engage in conversation.")
		};
	};
};

function parseEntry(user){
	API.sendChat("Welcome to the community, " + user.username + ". I currently have no function, but am under development.");
};
API.on(API.CHAT, getChat); //chat command handler
API.on(API.USER_JOIN, parseEntry); //user join parser
