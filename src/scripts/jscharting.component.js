const JSC = require('jscharting');

Vue.component('JSCharting', {
	data: function () {
		return {
			instance: null
		};
	},
	props: [
		'containerClass',
		'config',
		'styles'
	],
	template: '<div v-bind:class="containerClass" v-bind:style="styles"></div>',
	mounted: function () {
		this.createChart();
	},
	beforeDestroy: function () {
		this.destroyChart();
	},
	watch: {
		config: function () {
			this.destroyChart();
			this.createChart();
		}
	},
	methods: {
		updateConfig: function () {
			var config = this.config;
			config.targetElement = this.$el;
		},
		createChart: function () {
			if (!this.instance && this.config) {
				this.updateConfig();
				this.instance = JSC.Chart(this.config);
			}
		},
		destroyChart: function () {
			if (this.instance) {
				this.instance.destroy();
				this.instance = null;
			}
		}
	}
});
