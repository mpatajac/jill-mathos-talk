import { defineShikiSetup } from '@slidev/types'
import jill from './jill.tmLanguage.json'
import Jack from './jack.tmLanguage.json'

export default defineShikiSetup(() => {
	return {
		themes: {
			dark: 'catppuccin-mocha',
			light: 'catppuccin-latte'
		},
		langs: [
			jill,
			Jack
		]
	}
})