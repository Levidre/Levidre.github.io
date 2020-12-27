keydetector.dll

----------------------------------------------------------------------------------------
Utility : triggering a SHIORI event with the keyboard and moving the ghost.

----------------------------------------------------------------------------------------
Usage : It's used with FUNCTIONEX("keydetector.dll",Arguments), you can use SAORI() instead of FUNCTIONEX() depending on your environnement.

This SAORI will call 5 SHIORI events : OnMoveRight, OnMoveLeft, OnMoveTop, OnMoveBottom and OnMoveEnd.
The four first ones are called when the ghost starts moving in a direction and the last one when it stops. They are triggered by moving with the keyboard or in wander mode.

------
The Arguments depends on the instrucion wanted :

	- Starting the SAORI and initializing it with the hwnd of either the sakura or the kero and its associated balloon :
			Argument0 : sakura or kero hwnd
			Argument1 : its balloon hwnd
		The ghost is aware of its hwnd.
		
	- The mode of the SAORI :
			Argument0 : "disable" or "static" or "wander"
				"disable" : the SAORI doesn't do anything
				"static" : the SAORI reacts to the keyboard
				"wander" : the SAORI reacts to the keyboard and move randomly the ghost across the screen
	
	- Going back to default settings :
			Argument0 : "default"
	
	- Modifying the speed of the movement :
			Argument0 : "speed"
			Argument1 : number representing the speed
		The speed is the number of pixels per 10ms.
	
	- Modifying the distances walked by the ghost in wander mode
			Argument0 : "pixel" or "percent"
			Argument1 : distance minimum
			Argument2 : distance maximum
		"pixel" and "percent" are the unit of the distances, percent is the percentage of the screen size (average of the width and the height).
	
	- Modifying the time between two moves of the wander mode
			Argument0 : "wander"
			Argument1 : the time in seconds
		It would put the SAORI in wander mode too.
	
	- Choosing the unit :
			Argument0 : "unit"
			Argument1 : "pixel" or "percent"
		The new unit would be applied to the distances and to a given destination.
	
	- Choosing a destination :
			Argument0 : "move"
			Argument1 : x
			Argument2 : y
		The unit of x and y is the one already choosen either for the distances or by the previous instruction.
		
	- Adding a command
			Argument0 : "add"
			Argument1 : name of the SHIORI event
			Argument2 : the character representing the key of the keyboard
		If the command is already existing, the key would be replaced by the new one.
		
	- Removing a command
			Argument0 : "remove"
			Argument1 : name of the SHIORI event

The SAORI saves its configuration in a keydetector.txt file next to it. It would recover its configuration from it when loaded.
The default settings are static mode, speed of 2, 10 seconds between two moves of the wander mode, 50 and 100 pixels as minimum and maximum distances and the keys for moving the ghost are the arrows.


Example : 

FUNCTIONEX("keydetector.dll","static")
FUNCTIONEX("keydetector.dll","speed",2)
FUNCTIONEX("keydetector.dll","wander",10)
FUNCTIONEX("keydetector.dll","pixel",50,100)
FUNCTIONEX("keydetector.dll","add","OnKeyI","i")
FUNCTIONEX("keydetector.dll","remove","OnKeyI")
------

Version : 1.0
Author : Azura Levidre
		 https://azura-levidre.000webhostapp.com