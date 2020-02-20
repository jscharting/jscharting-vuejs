## Deprecated [2020-20-2]

<br/>

You can visit the [new home](https://github.com/jscharting/jscharting-vue) of the JSCharting Vue.js plugin page. 
There you will find an npm package for the JSCharting plugin, detailed documentation, and an example project with several chart examples.

<br/>

<hr>

# JSCharting: Any Chart. Anywhere.

<a href="https://jscharting.com"><img src="https://jscharting.com/images/logo_short.svg" style="margin:0px" align="left" hspace="10" vspace="6" width="200" ></a>

**JSCharting** is a JavaScript chart library for visualizing your data, providing resolution 
independent results across all devices and platorms. Every JSCharting license includes the 
full suite of 150+ advanced chart types, interactive stock charts and JSMapping at no additional charge.

## Official JSCharting examples for vuejs

This pack of examples demonstrate how to use JSCharting with vuejs framework.

### How to use

Install the necessary packages including JSCharting.

```console
npm install
```

Now you can build an application.

```console
npm run build
```

Also you can run dev server http://localhost:5000/

```console
npm run start
```

### How it works

After run build script /dist folder will be created which contains application files.

Index.html includes main (main.js) bundle file.

```html
<div id="app"></div>
<script src="scripts/main.js"></script>
```

Main.js contains the chart initialization code.

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
