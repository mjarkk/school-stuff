# PHP

## How to install:

### Method 1,
- Clone this git repo to your local web server

### Method 2 (nginx),
- Clone the project
- Add a virtual host to you'r nginx config file or sites-available  
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
