# Install http server
You can install http server to test the content locally before pushing it to github. You need to install http-server package. Be aware, do not add it to package.json since the web site does not need this package.
```
npm install http-server
```

# To run a local dev server:
```
npx http-server docs/ -p 8080
```

# To build and publish your changes
```
npm run build-prod
```