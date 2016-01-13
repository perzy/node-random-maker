random-maker
=========

array random maker

## Install

```
$ npm install random-maker
```

## Usage

```js
const RandomMaker = require('random-maker');

const source = [1,2,3,4,5,6,7,8,9];
const randomMaker = new RandomMaker(source);

for(let i=0; i < 5; i++){
  randomMaker.next(); // 3,5,1,8... 
}

```

or batch

```js
const RandomMaker = require('random-maker');

const source = [1,2,3,4,5,6,7,8,9];
const randomMaker = new RandomMaker(source);

randomMaker.batch(5); // [2,4,5,7,1] random unique array
```

or 

```js
const RandomMaker = require('random-maker');

const randomMaker = new RandomMaker(100); // 0-100

randomMaker.batch(5); // [20,41,15,7,12] random unique array
```

## Authors

```
jerrywu <perzy_wu@163.com>
```

## License

The MIT License (MIT)

Copyright (c) 2014 jerrywu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.%
