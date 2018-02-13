# PHP

## INTRO
- If you have surgestions for this repo create a [github issue](https://github.com/mjarkk/school-stuff/issues)
- If you wan't to change code fork this repo after you'r dune do a pull request.

## How to install:

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
- On linux make sure to `chmod 777` the linked folder in order to prevent `403 Forbidden`.

## After install recommended things:
- install [h5ai](https://larsjung.de/h5ai/) to have a better file list
