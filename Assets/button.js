//#pragma strict
//var commandInitial = "...";
//var command ="...";
//var display = "You walk into a crowded bar after the football game.";
//var scroll : Vector2 = Vector2.zero;
//var state = 0;
//var WIDTH = Screen.width;
//var HEIGHT = Screen.height;
//var inventoryButton;
//var inventory = "";
//var scene = scene0();
//var beer = item("beer", "a delicious beverage that makes you feel funny"); 
//ArrayList["take", "drink", "throw"];
//
//function Start () {
//scene0();
//}
//
//function OnGUI() {
//	//Styling
//	GUI.skin.button.wordWrap = true;
//	GUI.skin.textArea.wordWrap = true;
//	GUI.skin.box.wordWrap = true;
//	GUI.skin.box.alignment = TextAnchor.UpperLeft;
//
//	//Inventory Button
//	GUI.Button(Rect(10,10,100,50), "Inventory");
//	
//	//if (
//
//	// Begin the Scrollbox
//	scroll = GUI.BeginScrollView (Rect (WIDTH/2, HEIGHT/2 - 200, 400, 600), scroll, Rect (WIDTH/2, HEIGHT/2-50, 400, 600));
//
//	// Put something inside the Scrollbox
//	 GUI.Box(Rect (300, 200, 200, 400), display);
//
//	// End the ScrollView
//	GUI.EndScrollView();
//		
//	//command line
//	 command = GUI.TextArea (Rect (WIDTH/2-200, HEIGHT/2+100, 200, 100), command, 200);
//	 
//	 if (Event.current.type == EventType.KeyDown) {
//	 command +=Input.inputString;
//	 }
//	 
//	 switch (state) {
//	 	case 0: 
//	 	 scene0();
//	 	 break;
//	 	case 1:
//	 	 scene1();
//	 	 break;
//	 	case 2: 
//	 	 scene2();
//	 	 break;
//	 	default: 
//	 			break;
//	 }
//}
//
//function item (name, description, actions){
//	this.name = name;
//	this.description = description;
//	this.actions = actions;
//}
//
//function addInventory (item) {
//	//for(int i = 0; i < 1; i++) {
//		inventory += item.name;
//		display += item.description;
//	//}
//}
//
//
////write generic functions for adding inventory, changing scene, 
//
//function scene0() {
//		
//			
//	if (command.Contains("take") && command.Contains("beer")) {
//	addInventory(beer);
//	display += "You take a pint of beers. It's gonna spill everywhere. It's inevitable.";
//	}
//		//this is the starting room, and will navigate to other scenes
//		if (command.Contains("down")) {
//		display += "\n>" + command;
//		command = commandInitial;
//				state = 1;
//			 display += "\nyou decided to walk out of the bar";
//				//scene1();
//		}
//
//}
//		
//	function scene1() {
//
//	
//	if (command.Contains("down")) {
//		display += "\n>" + command;
//		command = commandInitial;
//		//	scene2();
//		state = 2;
//	   display += "\noutside on the street you see someone peeing on the street";
//	}
//}
//	
//	
//	function scene2() {
//	
//	if (command.Contains("up")) {
//		display += "\n>" + command;
//		command = commandInitial;
//		//scene1();
//		state = 1;
//	   	display += "\nyou walk back into the bar";
//	}
//}
//
//	
