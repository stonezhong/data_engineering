# Index
* [Brief](#Brief)
* [Setup dev environment](#Setup-dev-environment)

# Brief

It is a tool allows you to build rich web based content that can be hosted in CDN, no server side processing is needed. CDN could be: github pages or AWS S3 and others.


# Setup dev environment
```bash
mkdir .venv
python3 -m venv .venv
source .venv/bin/activate
pip install pip setuptools --upgrade
pip install -r requirements.txt
```

# Directory Structure
```
|
+-- docs                      everything under this directory is generated
|
+-- src                       your page checked in here
|   |
|   +-- index.html            template page
|   |
|   +-- pages
|         |
|         +-- <page_name>
|
+-- readme.md                 You can put a link pointing to the home page if you host it in github
|
+-- package.json              used by npm
|
+-- webpack.config.js         used by webpack
|
+-- .babelrc                  used by babel
|
+-- requirements.txt          used by python


```

# Install http server
You can install http server to test the content locally before pushing it to github. You need to install http-server package. Be aware, do not add it to package.json since the web site does not need this package.
```
npm install http-server
```

# To run a local dev server:
```
npx http-server docs/ -p 8080
# make sure you access http://localhost:8080/index_local.html
# while in github, you access https://stonezhong.github.io/data_engineering/

# since resource path
```

# To build and publish your changes
```bash
./build.py                                         # for local testing
./build.py --site-prefix="/data_engineering"       # for github
```