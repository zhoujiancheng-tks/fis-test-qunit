# fis-test-qunit

A test plugin for fis to test js file.

## usage

    $ npm install -g fis-test-qunit
    $ vi path/to/project/fis-conf.js

```javascript
//file : path/to/project/fis-conf.js
fis.config.merge({
    modules : {
        test : {
            js : 'qunit'
        }
    },
    settings : {
        test : {
            qunit: {
                all : ['test/*.html']
            }
        }
    }
});
```
more [options](https://github.com/gruntjs/grunt-contrib-qunit)

