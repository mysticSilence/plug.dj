//Plug.dj mysticBot V0.01

//bot constants
var version = 1; 
var botName = "mystic Bot";

//roles
var host = API.ROLE.HOST; //5
var cohost = API.ROLE.COHOST; //4
var manager = API.ROLE.MANAGER; //3
var bouncer = API.ROLE.BOUNCER; //2
var dj = API.ROLE.DJ; //1
var guest = API.ROLE.NONE; //0

var time = [
	var hr = 0;
	var min = 0;
	var sec = 0;
	var str = "00:00:00";
]

//users
var users = API.getUsers();

function getRole(user, role){
	if(user.role >= role){
		return true;
	};
	return false;
};

function getChat(chat){ //chat command parser
	var sender = API.getUser(chat.uid); //sender
	var args = chat.message.split(" ", 3); //for multi-arg

	if(sender.username != botName){
		if(getRole(sender, 5) || getRole(sender, 4)){ //if host or cohost
		};
		if(getRole(sender, 3)){ //if at least manager
		};
		if(getRole(sender, 2)){ //if at least bouncer
			if(chat.message == "!skip"){
				API.moderateForceSkip()
			};
		};
		if(getRole(sender, 1)){ //if at least dj
			if(args[0].toLowerCase() == "!kill"){
				API.sendChat("@" + sender.username + ": user " + args[1] + " has been killed.");
			}
		};
		if(getRole(sender, 0)){ //if guest
			if(chat.message == "!ver"){
				API.sendChat("@" + sender.username + ": I am currently version " + version);
			};

			//multi-arg
			if(args[0].toLowerCase() == "!getrole" || args[0] == "!gr"){
				role = "guest";
				args[1] = args[1] + " " + args[2];
				args.pop();
				for(var i = 0; i < users.length; i++){
					if(users[i].username.toLowerCase() == args[1].toLowerCase()){
						switch(users[i].role){ //parse user role
							case 0:
								role = "Guest";
								break;
							case 1:
								role = " DJ";
								break;
							case 2:
								role = "Bouncer";
								break;
							case 3:
								role = "Manager";
								break;
							case 4:
								role = "Cohost";
								break;
							case 5:
								role = "Host";
								break;
							default:
								role = "Unknown";
						}
						API.sendChat("@" + sender.username + ": " + users[i].username + " is a " + role)
					}
				}
			};
		};
	};
};

function parseEntry(user){
	API.sendChat("Welcome to the community, " + user.username + ". I currently have little functionality, but am under development.");
	users.push(user);
};

function timeUpdate(){
	sec++;
	if(sec == 59){
		sec = 0;
		min++;
		if(min == 59){
			hr++;
			if(hr == 23){
				hr = 0;
			};
		}
	}
}

API.on(API.CHAT, getChat); //chat handler
API.on(API.USER_JOIN, parseEntry); //user join parser

setInterval(timeUpdate, 1000);
