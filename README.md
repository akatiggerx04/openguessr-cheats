**OpenGuessr Cheat Instructions**
=====================================
**Warning: Cheating can ruin the game for others!**
Please use this script responsibly and at your own risk. The creator does not condone cheating and will not be held responsible for any abuse or misuse of this script.

**How to Run the Script?**
-------------------------
### Step 1: Open Developer Tools
1. Open the OpenGuessr game in your web browser: https://openguessr.com
2. Press F12 or Ctrl + Shift + I (Windows/Linux) or Cmd + Opt + I (Mac) to open the Developer Tools.
3. Click on the **Console** tab.

### Step 2: Allow Pasting (If Necessary)
If you're prompted to allow pasting, you'll see a message like this: Paste disabled, use "allow pasting" to enable. 
To enable pasting, simply type the following in the Console tab and press Enter: 
```
allow pasting
```
This will enable pasting in the Console tab.

### Step 3: Activate the Cheat
Choose one of the following modes:

#### In-Game Overlay Mode
![preview](https://github.com/akatiggerx04/openguessr-cheats/blob/main/preview-overlay.webp?raw=true)
1. Copy the following code:
```javascript
fetch('https://raw.githubusercontent.com/akatiggerx04/openguessr-cheats/refs/heads/main/cheat-overlay.js').then(r => r.text()).then(eval);
```
2. Paste it in the Console tab.
3. Press Enter to execute the code.
After executing the code, you should see a new "Find Coordinates" button added to the game in the top right corner.

#### Separate Window Mode
![preview](https://github.com/akatiggerx04/openguessr-cheats/blob/main/preview-window.webp?raw=true)
1. Copy the following code:
```javascript
fetch('https://raw.githubusercontent.com/akatiggerx04/openguessr-cheats/refs/heads/main/cheat-window.js').then(r => r.text()).then(eval);
```
2. Paste it in the Console tab.
3. Press Enter to execute the code.
After executing the code, you will see a pop-up window open. If you don't see the pop-up, check if you have a pop-up blocker enabled and allow pop-ups for the OpenGuessr website.

**Troubleshooting Tips**
* Make sure you're on the correct page: https://openguessr.com
* Ensure you've allowed pasting in the Console tab (if prompted)
* Double-check that you've copied and pasted the correct code
* If you encounter any issues, try refreshing the page and retrying the steps above
