# Puppeteer with Mocha test exercise
Automate UI test using Puppeteer and Mocha

 - **Puppeteer:** A Node library which includes high-level API to control headless or non-headless Chrome or Chromium over the DevTools Protocol.
- **Mocha:** Mocha is a JavaScript test framework for Node.js programs, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library.
- **Mochawesome:** Generate mocha test report
   
## Run the code localy

``` 
    npm install
    npm test
```

For create uesful test report run the command `npm run testReport`. The report can be found on `./mochawesome-report/mochawesome.html`.

## Run the code on Docker container

```
     docker build -t testim_docker .
     docker run testim_docker
```

