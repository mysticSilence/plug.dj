//Plug.dj Independent V1
//basically just a simple test :3

API.on(API.CHAT_COMMAND, getCommand);
function getCommand(cmd){
	cmd = cmd.toLowerCase();
	var args = cmd.split(" ");

	if(args[0] == "test"){
		console.log("testing");
	}
};
