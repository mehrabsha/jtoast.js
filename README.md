# javascript-toast-plugin
Simple and light javascript toast plugin

## Usage

## Functions
| Function | Required | Description | Parameters |
| ----------- | --------| --------| --------|
| init | `String` | `Hi` | [LINK](#sample-code) | 
| toast | `String` | `Toast message` | LINK |


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
