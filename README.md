# js-luhn

A JavaScript module of the luhn algorithm for Credit Card Validation that works with both client-side JavaScript and Node.js.

```bash
A js-luhn algorithm for validating credit cards
```

## Getting Started
### Installation

```bash
npm install js-luhn --save
```

## How to use

### Integration
```java-script
import luhn from "js-luhn"; // Javascript
```
```java-script
const stats =  require('js-luhn');  ; // Node Js
```
# API Documentation
#### Luhn(data)

Returns the **Boolean** value in a given data.

```java-script
import luhn from "js-luhn";

// '4242424242424242'
if(luhn('4242424242424242')) { // return boolean 
  ... // your code here
}

// '4242 4242 4242 4242'
if(luhn('4242 4242 4242 4242')) { // return boolean 
  ... // your code here
}

// 378282246310005
if(luhn(378282246310005)) { // return boolean 
  ... // your code here
}
```
# Running Tests
To run the test suite first install the development dependencies:
```java-script
npm install
```
then run the tests:
```java-script
node test
```
## License
[ISC](https://github.com/marisnb/js-luhn/blob/master/LICENSE)
