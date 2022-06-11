# utech

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## App pages

### Preview
Route — */*

Child components: *Logotype*


### AuthUser
Route — */auth-user*

Child components: *Headline, ChipRadio, ButtonNavAction*

### CreateReport
Route — */create-report*

Child components: *Headline, FormReport, ButtonNavAction*

### ScheduleUser
Route — */schedule-user*

Child components: *Headline, ChipRadio, ButtonNavAction*

### SendReport
Route — */send-report*

Child components: *Headline*

## Components

### ButtonNavAction

Properties: 
* label — Text on the button `string`
* action — Component event cause the action for $emit or router push route `object`
``` javascript
{type: 'action' | 'route', action | route}
```
* icon — Material design icon name `string`
### ChipRadio

Properties: 
* label — Text on the button `string`
* select — Chip state `boolean`
* icon — Material design icon name `string`
* props — Array with sub properties `array`

	1. noButtonIcon — Hide info button `string`
	2. light — Light theme for chip `string`
	3. icon24px — Set chip icon size 24px, for subjectively Small icon `string`

Methods:
* `getProps()` — Find prop in props array
``` javascript
getProps (prop) {
	return this.props.includes(prop)
}
```
* `emitActionSelect()` — Emit action if user click on chip
``` javascript
emitActionSelect () {
	this.$emit('UpdateChipRadioSelect')
}
```
* `getIcon()` — Selection icon for select value
``` javascript
selectIcon () {
	if (this.icon) {
		return this.icon
	}
	return this.icons[+ this.select]
}
```
### FormReport

Child components: *ChipRadio*

Methods:
* `UpdateChipRadioSelect()` — update chip state in form group
``` javascript
UpdateChipRadioSelect(index, group) {
	this.store.radio[group].forEach(element => {
		element.select = false
	});
	this.store.radio[group][index].select = true
}
```

### Headline

Properties:
* title — headline title `string`
* subtitle — headline subtitle `string`

### Logotype
 This component dont have methods, porperties or child components