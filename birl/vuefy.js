new Vue ({
	el: '#app',
	data: {
		da_vez: '',
		frases: [
			'BIRRRRL!',
			'AQUI NÓIS CONSTRÓI FIBRA!',
			'É TREZE!',
			'É TREZE MEMO!',
			'NÃO VAI DAR O QUÊ, SAÍ DE CASA, COMI PACARAI!',
			'É HORA DO SHOW!'
		]
	},
	methods: {
		horaDoShow () {
			this.da_vez = ''
			let rnd = Math.round(Math.random() * (this.frases.length - 1))
			let txt = this.frases[rnd]
			this.da_vez = txt
		}
	}
})