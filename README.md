# Text-Editor

Live Url 👇🏼<br>
https://text-editor-8vbu.onrender.com/

## Description

A text editor that uses webpack, service workers and manifest. This project ended up having some tough debugging in it and that definitely motivated me to keep at it to get everything working. The purpose of this project was to get an understanding of how some progressive web applications work, so the main focus here was the PWA's and the starter code that was given had a completed UI. 

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Use the script 'npm run install' to make sure everything is installed correctly as there are 3 package.json files.

## Usage

When the application opens the UI is very simple. Simply enter any text you would like to save and it will be saved to the indexDb so if you refresh the page or close and reopen, your inputted text will still be there<br>
<br>
<img width="1200" alt="text editor" src="./readmeIMG/1 text editor.png"><br>
<br>
Another thing to note is the application can be used offline. When you click the install button, a prompt to confirm installation will appear.<br>
<br>
<img width="1200" alt="install prompt" src="./readmeIMG/2 install prompt.png"><br>
<br>
After installation is complete, the downloaded application will open up and it should look like this.<br>
<br>
<img width="1200" alt="offline application" src="./readmeIMG/3 offline installed app.png"><br>
<br>

## Credits

As per usual, I always refer to the class activities for guidance, but a few thank you's are in order. Thank you to my tutor Andrew, for going over the basics of PWA's to help better my understanding. Thank you to the ask BCS learning assistances for helping me debug. Thank you to my colleague Shawn for helping me debug as well and with the deployment on render.

https://webpack.js.org/guides/<br>
https://developer.mozilla.org/en-US/docs/Web/Manifest<br>
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API<br>
https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API<br>

## License

The MIT License is short and to the point. It lets people do almost anything they want with your project, like making and distributing closed source versions.

## Tests

Add some text to the editor that you would like to save for later. If you close the app and reopen, all your text will still be there. If you want to use the editor offline, click the install button and install the app to your computer!