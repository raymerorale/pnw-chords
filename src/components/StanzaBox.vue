<template>
	<div>
		<div v-if='!onPreview'>
			<v-sheet 
			  v-for='(count , index) in stanzaCount'
			  :key='index'
			  class='pa-3 text-center' elevation='1'>
				<v-container>
				<v-row>
					<v-col class='col-7 col-sm-5'>
						<v-select          
				          label="Stanza"
				          outlined
				          dense
				          v-model='stanza[index]'
				          :items="items"
				        ></v-select>
					</v-col>
					
				</v-row>
				<v-textarea
		          outlined
		          name="input-7-4"
		          label="Chords and Lyrics"
		          v-model='chords[index]'
		        ></v-textarea>
				</v-container>
			</v-sheet>
			<div class='text-right mt-4'>
				<v-btn 
					@click='onPreview = true'
					dark color="deep-purple accent-4">
					Preview
				</v-btn>
			</div>
		</div>
		
		
		<div v-if='onPreview'>
			<v-sheet
			  class='pa-3 text-center' elevation='1'>
				<div 
					v-for='(count, index) in stanzaCount' 
					:key='index'>
					<h4>{{ stanza[index] }}</h4>
					<p>{{ chords[index] }}</p>
				</div>
			</v-sheet>
			<div class='mt-5 text-right'>
				<v-btn @click='onPreview = false'>Edit</v-btn>
				<v-btn dark color="deep-purple accent-4"
				 class='ml-3'>Save</v-btn>
			</div>
		</div>
	</div>
</template>
<script>

export default {

  props: ['stanzaCount'],
  
  methods: {
  	onSubmit () {
  		
  	}
  },

  data: () => ({
  	onPreview: false,
  	chords: [],
  	stanza: [],
    items: [
    	{ text: 'Intro', value: 'Intro' },
    	{ text: 'Verse', value: 'Verse' },
    	{ text: 'Pre-chorus', value: 'Pre-chorus' },
    	{ text: 'Chorus', value: 'Chorus' },
    	{ text: 'Bridge', value: 'Bridge' },
    	{ text: 'Outro', value: 'Outro' }
    ],
  }),
}
</script>

<style>

</style>
