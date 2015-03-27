//Plug.dj mysticBot V0.01
//basically just a simple test :3

API.on(API.CHAT_COMMAND, getCommand);
function getCommand(cmd){
	var str = cmd.toLowerCase();
	if(str == "/test"){
		console.log("testing");
	}
};
