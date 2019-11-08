# javascript-toast-plugin
Simple and light javascript toast plugin

## Usage
```html
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="toastStyle.css">
    </head>
    <body>

        <script src="main.js"></script>
    </body>
</html>
```

## Functions
| Function | Required | Description | Parameters |
| ----------- | --------| --------| --------|
| toast | `Yes` | `Call this function to display the toast message` | [LINK](#toast) |
| init | `Optional` | `Call this function to set some settings , like position & fade in(out) time & ...` | [LINK](#init) | 
```diff
- Remember that all arguments are lowercase
```



## toast()

| Parameters | Type | Default | Description |
| ----------- | --------| --------| --------|
| title | `String` | `Hi` | `Toast message title` | 
| description | `String` | `Toast message` | `Toast message description` |
| timeout | `Int (ms)` | `0` | `set timeout for message ( 0 and null = Message without time limit)` <br/><br/> **`* in millisecond`** |
| type | `String` [ `success` , `error` , `warning` , `custom` ] | `success` | `Set toast message type` |
| color | `String` | `#fff` | `Set toast message background color` |
| close_color | `String` | `#999` | `Set toast message close icon color` |

### sample code
```javascript
toast({ 
    title : 'Hi' , 
    description : 'Success message' ,
    type : 'success' ,
    timeout : 0
});
```


## init()

| Parameters | Type | Default | Description |
| ----------- | --------| --------| --------|
| fade_in | `int (ms)` | `Hi` | `Toast message title` | 
| fade_in | `int (ms)` | `Toast message` | `Toast message description` |
| position | `String` <br/> [ `top-left` , `top-center` , `top-right` ,  `bottom-left` , `bottom-center` , `bottom-right`  ] | `0` | `set timeout for message ( 0 and null = Message without time limit)` <br/><br/> **`* in millisecond`** |

### sample code
```javascript
toast({ 
    title : 'Hi' , 
    description : 'Success message' ,
    type : 'success' ,
    timeout : 0
});
