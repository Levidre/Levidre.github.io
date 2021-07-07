fontinstaller.dll

----------------------------------------------------------------------------------------
Utility : installing a font for the current user.

----------------------------------------------------------------------------------------
Usage : It's used with FUNCTIONEX("fontinstaller.dll",Arguments), you can use SAORI() instead of FUNCTIONEX() depending on your environnement.

------
Different commands are available :

	- Get the path to the font file (can be used to check if the font is installed)
		Argument0 : "get"
		Argument1 : the name of the font	
	
	- Install a font
		Argument0 : "install"
		Argument1 : the name of the font
		Argument2 : the path to the font file
		
	- Update an already installed font
		Argument0 : "update"
		Argument1 : the name of the font
		Argument2 : the path to the font file
		
	- Removing a font
		Argument0 : "remove"
		Argument1 : the name of the font
		


An other argument "http" or "https" can be added as Argument1. In this case, Argument1 becomes Argument2 and Argument2 becomes Argument3.

Example : FUNCTIONEX("filetransfer.dll","http","my-website/index.php","./my_files\a_file.txt")
------

Version : 1.0
Author : Azura Levidre
		 https://azura-levidre.000webhostapp.com