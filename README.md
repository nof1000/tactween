# Tactween
A simple core-based tweening to create animations

## Install
CDN:
**coming soon**

Download:
 - releases: [HERE](https://github.com/nof1000/tactween/releases/ "Releases")
 - bower: `bower install tactween`
 - npm: `npm install tactween`

## Usage

Include `tactween.js` into your page:
```html
<script src="./tactween.js"></script>
```

And let's animate anything!
```javascript
// from 0 to 100
tactween(100, {
    duration: 1500,
    change: function(v) {
        progress.style.width = v.value + '%';
    }
})
```

## Reference
### tactween(props, options);
 - `props` - is an (number, array, object) the value(s) you want to animate.
 - `options` - is an object to setup the animation.
  - `duration` - is in milliseconds (default: `1000`)
  - `timing` - is an function to describe how to intermediate values calculated (default: `(fraction) => { return fraction }`}
  - `before` - (**optional**) is called before animation start
  - `change` - (**optional**) is called at every change
  - `complete` - (**optional**) is the completion

## Examples
### Properties
```javascript
// Number
tactween(1000, {
    change: function(v) { milliseconds = v.value; }
});

// Array may comprise only two elements
tactween([-100, 100], {
    change: function(v) { milliseconds = v.value; }
});

// Object
tactween({
    r: [0, 255],
    g: [0, 255],
    b: [0, 255]
}, {
    change: function(v) {
        document.body.style.background = (
            'rgb(' + (v.r ^ 0) + ',' + (v.g ^ 0) + ',' + (v.b ^ 0) + ')';
        );
    }
});
```

### Timing
```javascript

// Linear
tactween(1000, {
    timing: function(fraction) { return fraction; },
    change: function(v) { anything = v.value; }
});

// Quad
tactween(1000, {
    timing: function(fraction) { return Math.pow(fraction, 2); },
    change: function(v) { anything = v.value; }
});

// Circ
tactween(1000, {
    timing: function(fraction) { return 1 - Math.sin(Math.acos(fraction)); },
    change: function(v) { anything = v.value; }
});

// etc...
```

## LICENSE
[MIT](./LICENSE "The MIT License")
