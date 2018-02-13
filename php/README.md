# PHP

## INTRO
- If you have surgestions for this repo create a [github issue](https://github.com/mjarkk/school-stuff/issues)
- If you wan't to change code fork this repo after you'r dune do a pull request.
- The assignments came from: [MBO-ICT Backend programmeren](https://www.bol.com/nl/p/mbo-ict-backend-programmeren/9200000056845953/)

## How to install/use:

### Create styles and other files:
- Make sure you have installed [node.js](https://nodejs.org/en/)
- Open a terminal in the `school-stuff/php` folder
- type: `npm i` and `npm i -g gulp-cli` (on linux and mac-os you might need to add `sudo`)
- type: `gulp`

### Use the webserver
### Method 1,
- Clone this git repo to your local web server

### Method 2 (nginx),
- Clone the project
- Add a location to you'r nginx config file or sites-available  
- demo:
```
location /php/ {

    root /url/to/school-stuff;
    # replace `/url/to/school-stuff` with the path to the root of this repo

    try_files $uri $uri/ =404;
}
```

### Method 3,
- Make a soft link from the PHP folder to a folder in your local web server (this might not work on windows)
- On linux make sure to `chmod 666` OR `chmod 777` the linked folder in order to prevent `403 Forbidden`.

## After install recommended things:
- Install [h5ai](https://larsjung.de/h5ai/) on the local web server to have a better file list
- For a better development process use the DEV server with: `gulp dev` this server will refresh PHP pages when there are changes in the code.
