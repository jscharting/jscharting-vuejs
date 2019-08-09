# JSCharting: Any Chart. Anywhere.

<a href="https://jscharting.com"><img src="https://jscharting.com/images/logo_short.svg" style="margin:0px" align="left" hspace="10" vspace="6" width="200" ></a>

**JSCharting** is a JavaScript chart library for visualizing your data, providing resolution 
independent results across all devices and platorms. Every JSCharting license includes the 
full suite of 150+ advanced chart types, interactive stock charts and JSMapping at no additional charge.

## Official JSCharting examples for vuejs

This pack of examples demonstrate how to use JSCharting with vuejs framework.

### How to use

1) Install jscharting npm package.

```console
npm install jscharting --save-dev
```
2) Define needed markup and include jscharting plugin and main script.
```html
	<div id="app"></div>
	<script src="scripts/jscharting.component.js"></script>
	<script src="scripts/main.js"></script>
```
3) In main.js initialize your vuejs application.
```javascript

var app = new Vue({
	el: '#app',
	data: {
		containerClass: {
			'chart-container': true
		},
		styles: [{
				height: '500px'
		}],
		chartConfig: {
			...
		}
	},
	template: '<div><JSCharting v-bind:containerClass="containerClass" v-bind:config="chartConfig" v-bind:styles="styles"></JSCharting></div>'
});

```
