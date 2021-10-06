# Install

```npm i -g live-server```
```npm i -g web-ext```

# Run and open http://localhost:1111 test

```npm run start``` 

open ```http://localhost:1111```

The iframe can access the parent object and fire an alert(); 



# Extension test

```npm run extension```


The iframe is not able to access his parent

```
(index):7 Uncaught DOMException: Blocked a frame with origin "http://localhost:2222" from accessing a cross-origin frame.
at console.log (<anonymous>)
at http://localhost:2222/:7:13
```
