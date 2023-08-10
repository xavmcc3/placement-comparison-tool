<p align="center">
  <img src="./placement-manual-comparison.ico" width=50/>
</p>

# <img src="./placement-manual-comparison.ico" width=30 style="filter: drop-shadow(0 0 4px #47ff50); border-radius: 3px;"/> Placement Manual Comparison

**Placement Manual Comparison Tool** is a tool built to <span style="display: inline-block; background: #00ebf3; width: 1.3em; height: 1em; margin-bottom: -3px; border-radius: 5px; box-shadow: 0 0 0.9em #00ebf3be;"></span>


## Usage
Using the program is should be pretty simple. It's bundled as a standalone `.exe` file that you can put anywhere on your computer.

### 1. Find the Exe
It should be stored somewhere on your computer. You can find it in your file explorer app, or keep it on your desktop. It looks like this.
<img src="./src/in-folder.png" style="display: block; margin: 10px 0; width: 100%; max-width: 500px;"/>
The file name is <span style="display: inline-block; background: #00ebf3; width: 1.3em; height: 1em; margin-bottom: -3px; border-radius: 5px; box-shadow: 0 0 0.9em #00ebf3be;"></span>. Depending on your settings, the `.exe` part might not show at the end of the file name, but it's there.

### 2. Run the <span style="background: #d400ff; box-shadow: 0 0 0.9em #ff00ff; border-radius: 5px; padding: 0 5px; color: #000000;">Exe</span>
Just double click it, easy. You can also right click on it and press <span style="rotate: -10deg; display: inline-block;">**Open**</span>. A command prompt window <img src="./src/bash-icon-svgrepo-com.svg" width=20 style="margin-bottom: -4px; filter: drop-shadow(0 0 6px #5691ff); border-radius: 50%;"> should show up. Give it a second to load.

### 3. Start the Program
You should see a window that looks kinda like this:
<img src="./src/placement-start.png" style="display: block; margin: 10px 0; width: 100%; max-width: 500px;"/>
<u>Click on the bar at the top of the window</u> to refocus it *not* the text in the window. With the window selected, press <span style="background: transparent; padding: 1px 5px; color: #95b1ff; border: 1px solid #95b1ff; border-radius: 5px; box-shadow: 0 0 0.9em #95b1ffbe;">**Enter**</span>.

### 4. Choose <img src="./src/spreadsheet-svgrepo-com.svg" width=30 style="margin-left: 7px; margin-bottom: -8px; margin-right: -2px; filter: drop-shadow(0 0 8px #4ae445); border-radius: 12px;"> Spreadsheets
In the file picker that appears, choose the <span style="color: #4ae445;">Placement Manual</span> and press the confirm button in the bottom right. In the next file picker, choose the <img src="./src/excel-svgrepo-com.svg" width=23 style="margin-bottom: -8px; filter: drop-shadow(0 0 5px #00e73aaf); border-radius: 7px;"> Excel Spreadsheet containing the <span style="color: #4ae445;">Catalogue List</span>. Once you have selected both spreadsheets, input the letter of the column to <span style="color: #ecd031;">**overwrite**</span> and press <span style="background: transparent; padding: 1px 5px; color: #95b1ff; border: 1px solid #95b1ff; border-radius: 5px; box-shadow: 0 0 0.9em #95b1ffbe;">**Enter**</span>. If left blank, the value noted as default will be used.

<span style="box-shadow: 0 0 0.9em #ffffff5d; padding: 1px 5px; border-radius: 5px; border: 1px solid #ffffff98;"><img src="./src/note-2-svgrepo-com.svg" width=20 style="margin-bottom: -3px;"> Note</span>&nbsp; Only excel spreadsheets and folders will show in the file picker. This *should* happen.

<span style="box-shadow: 0 0 0.9em #ffee009c; padding: 1px 5px; border-radius: 5px; border: 1px solid #ffd00098; color: #ffd000;">Warning</span>&nbsp; The <span style="color: #ecd031;">**Catalogue List**</span> should be an excel spreadsheet in which the first column is filled with the skews for each item in the catalogue. Data that shouldn't be there can mess things up.


### 5. Results
Give it a while to run, it's doing its thing. When prompted, press <span style="background: transparent; padding: 1px 5px; color: #95b1ff; border: 1px solid #95b1ff; border-radius: 5px; box-shadow: 0 0 0.9em #95b1ffbe;">**Enter**</span>. In the next prompt type <span style="background: #40ff40; color: #000000; padding: 0px 5px;  border-radius: 5px; box-shadow: 0 0 0.9em #24ff1ccb;">**y**</span> or <span style="background: #f14646; color: #000000; padding: 0px 5px;  border-radius: 5px; box-shadow: 0 0 0.9em #ff0000cb;">**n**</span> and hit <span style="background: transparent; padding: 1px 5px; color: #ba95ff; border: 1px solid #ba95ff; border-radius: 5px; box-shadow: 0 0 0.9em #ba95ffbe;">**Enter**</span> one last time. The rows filled in with <img src="./src/color-svgrepo-com.svg" width=20 style="margin-bottom: -5px;"> color were in the catalogue you just input.

<span style="box-shadow: 0 0 0.9em #ffffff5d; padding: 1px 5px; border-radius: 5px; border: 1px solid #ffffff98;"><img src="./src/note-2-svgrepo-com.svg" width=20 style="margin-bottom: -3px;"> Note</span>&nbsp; If the option is set in the configuration file, this *overwrites* the column, so if you ran the program twice in the same column by accident, only the last one you ran shows.

<div style=" background: #20212b; color: #eeeeee;padding: 10px 5px 10px 10px; font-family: Calibri; font-size: 0.96em; border-radius: 5px;"> 🎉 Congratulations! 🎊🥳 You read the important part of the documentation. The rest is just in case something goes wrong. If it worked, stop here my dude. </div>


## Errors :(
This section addresses some possible <span style="color: #f85961;">**problems**</span> that could occur when running the program.


### 

### Unexpected Crash
If the program fails to run as expected or <u>closes before it has completed</u>, something probably went wrong on the code side of things. To fix this, the first step would be to figure out exactly what went wrong. 

Open the folder containing the exe in your file explorer app, then hold <span style="background: transparent; padding: 1px 5px; color: #34f3b3; border: 1px solid #34f3b3; border-radius: 5px; box-shadow: 0 0 0.9em #34f3b3be;">**Shift**</span> and *right click* <img src="./src/click-svgrepo-com.svg" width=23 style="margin-bottom: -5;"> on the empty space in the folder. Click <span style="color: #ffffff; padding: 0 5px; border-radius: 2px; background: #414141; border: 1px solid white;">Open Power<span style="text-decoration: underline;">S</span>hell window here</span> in the menu that pops up.
<img src="./src/in-folder.png" style="display: block; margin: 10px 0; width: 100%; max-width: 500px;"/>

In the powershell window, type `./placement-manual-comparison.exe` and press <span style="background: #000000; color: #ffffff;padding: 0 5px; border-radius: 3px; border: 1px solid #ffffff;">**ENTER**</span>. Interact with the program how you would normally from here. If the program doesn't crash this time then it was probably just a fluke the first time. If it does crash, this window will show an error message that you can google.

### Deleted/Can't Find EXE 😳
If you've lost the exe file, don't worry! 😎 There's a long and convoluted process to getting it back (See [Installation](#installation)).

### Anything Else
If the error fits none of these or nothing else worked, try [Rebuilding the Executable](#installation) under the **Installation** section. Only do this as a last resort, 'cause it take mad long if you aren't used to it and it's easy to mess up. If even *that* doesn't work, honestly idk 💀.


## Installation
If you already have the exe file <span style="color: #fc6868;">**ignore this**</span>, but if it got deleted, you can't find it or it was otherwise malformed, follow these steps to rebuild the project.

### 1. Install Python
Python can be found in the Microsoft Store. The version used in this project is 3.11 so for the best results, look for that. Just click the big shiny <span style="color: #000000; background: #80d6ff; padding: 0 10px; border-radius: 5px;">**Get**</span> button.
<img src="./src/python-windows-store.png" style="display: block; width: 100%; max-width: 500px;"/>

### 2. Install pip
Open a command prompt window (preferably powershell) by pressing the windows key <img src="./src/windows-key.png" width=20 style="width: 20; display: inline-block; margin-bottom: -5;"> on your keyboard to open the start menu. In the search bar that pops up, enter "`powershell`" and click <span style="color: #80d6ff;">Open</span>.

<span>
  <img src="./src/start-menu.png" style="display: inline-block; width: 40%; max-width: 300px;"/>
  <img src="./src/powershell-start.png" style="display: inline-block; width: 50%; max-width: 400px;"/>
</span>
<span style="display: block;">&nbsp;</span>

You should now see a window that looks like this:
<img src="./src/powershell-blank.png" style="display: block; margin-top: 10px; width: 100%; max-width: 500px;"/>

In the window type in `python get-pip.py` and press <span style="background: #000000; color: #ffffff;padding: 0 5px; border-radius: 3px; border: 1px solid #ffffff;">**Enter**</span>. This will install pip on your computer, which you can use to install dependencies.

### 3. Install dependencies
Read the **Dependencies** section for the actual packages to install. To install a package, type `pip install <package-name>` into powershell and then press enter. For example, to install `openpyxl` you would type <span style="border: 2px solid #80d6ff; border-radius: 6px">`pip install openpyxl`</span> (not `pip install <openpyxl>` 👎). Do this for every package listed under **Dependencies**. If you get an error later in the process saying that packages could not be found, simply search for the name of the package in the error message and install them this way

### 4. Locate the code
Open your Files app and find the folder with the code for this program. If you downloaded it, it's probably in your ✨<span style="color: #d82ed8;">**Downloads Folder**</span> <img src="./src/folder-svgrepo-com.svg" width=20 style="margin-bottom: -5">.✨ If you didn't you can do that by going to [github](https://github.com/xavmcc3/error-tool) and clicking the the install as zip button. (Just google "`how to download github repo as zip`") Once it downloads, extract it anywhere. The folder structure should look something like this:
<img src="./src/files.png" style="display: block; margin-top: 10px; width: 100%; max-width: 500px;"/>
Just make sure you have `find_errors`, `cli`, and `find_errors` in the folder. Once you have found the folder, open it in powershell. The easiest way to do this is to hold <span style="background: #000000; color: #ffffff;padding: 0 5px; border-radius: 3px; border: 1px solid #ffffff;">**Shift**</span> and right click <img src="./src/click-svgrepo-com.svg" width=23 style="margin-bottom: -5;"> on the empty space in the folder, then click <span style="color: #ffffff; padding: 0 5px; border-radius: 2px; background: #414141; border: 1px solid white;">Open Power<span style="text-decoration: underline;">S</span>hell window here</span> in the menu that pops up.

<img src="./src/ctx-menu.png" style="display: block; margin: 10px 0; height: 100%; max-height: 500px;"/>

In the prompt that appears type *exactly* `python -m PyInstaller --clean error-tool.spec` and press enter. Let it run for a while. When the prompt comes back up with absolutely no errors please god aaaaaaaa, go back to your File Explorer and open the <span style="">dist</span> folder. There should be a shiny new ✨~executable file~ 🌟✨ <img src="./src/exe-document-svgrepo-com.svg" width=20 style="margin-bottom: -5;">. Just copy it anywhere (even put it on your desktop if you're feelin it) and double click it to run. 👍


## Dependencies
The standalone exe has no dependencies, but it should be in a folder with a file called `errors.txt`. If it isn't it will create one when run.

The python code requires the following packages, but if you're just running the exe don't worry about it.
 - [ ] windows-curses
 - [ ] openpyxl
 - [ ] pyinstaller
 - [ ] clrprint


## Liscence `MIT`

<div style=" background: #20212b; color: #eeeeee;padding: 10px 5px 10px 10px; font-family: Calibri; font-size: 0.96em; border-radius: 5px;">
Copyright 2023 Xavier McClurkin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 </div>