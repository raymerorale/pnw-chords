<template>
	<v-container class='mt-5 col-lg-7'>
		<v-sheet class='pa-5' elevation='3'>
		<span v-if='!onPreview'>
			<p class='text-h4 text-center'>Add New Song</p>
		
			<v-row>
				<v-col class='col-7'>
					<v-text-field
						label="Song Title"
						outlined
						dense
						v-model='title'
					></v-text-field>
				</v-col>
				<v-col class='col-5'>
					<v-text-field
						label='Artist'
						outlined
						dense
						v-model='artist'
					></v-text-field>	
				</v-col>
			</v-row>
			<v-textarea
				dense
				height='80'
				outlined
				label='Song Details'
				v-model='details'
			></v-textarea>
			<v-row>
			<h6 class='pa-2 ml-2'>Number of Stanzas:</h6>
			<v-text-field
					min=1
					max=6
					v-model.lazy='stanzaCount'
					type='number'
					outlined
					dense
					style='max-width:60px;'
					@change='editStanza'
				></v-text-field>
			</v-row>
		</span>
		

		<div v-if='!onPreview'>
			<v-sheet 
			  v-for='(count , index) in stanzaCount'
			  :key='index'
			  class='stanzabox'>
					
				<v-select
				  style='max-width:200px'         
		          label="Stanza"
		          outlined
		          dense
		          v-model='stanza[index]'
		          :items="items"
		        ></v-select>
					
					
				
				<v-textarea
		          outlined
		          name="input-7-4"
		          label="Chords and Lyrics"
		          v-model='chords[index]'
		        ></v-textarea>
				
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
			  class='pa-3'>
			  <v-container>
			  	
				<h4 class='text-h4'>{{ title }}</h4>
				<h6 class='text-h6'>by {{ artist }}</h6>
				<p style="white-space:pre">{{ details }}</p>
			
				<div 
					v-for='(count, index) in stanzaCount' 
					:key='index'>
					<h6 class='text-h6'>{{ stanza[index] }}</h6>
					<p style="white-space:pre">{{ chords[index] }}</p>
				</div>
			</v-container>
			</v-sheet>
			<div class='mt-5 text-right'>
				<v-btn @click='onPreview = false'>Edit</v-btn>
				<v-btn @click='onSubmit'
				 dark color="deep-purple accent-4"
				 class='ml-3'>Save</v-btn>
			</div>
		</div>
		
		</v-sheet>
          
	</v-container>
</template>
<script>

import { createSong }  from '../repository'
export default {
  
  methods: {
  	editStanza () {
  		this.stanzaCount = parseInt(this.stanzaCount,10)
  	},
  	onSubmit () {
  		const SongData = {
  			title: this.title,
  			artist: this.artist,
  			details: this.details,
  			stanza: this.stanza,
  			chords: this.chords,
  			stanzaCount: this.stanzaCount,
  		}
  		createSong(SongData)
  		this.$router.push('/')

  	}
  },

  data: () => ({
    stanzaCount: 1,
    onPreview: false,
    title: '',
    artist: '',
    details: '',
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
.stanzabox{
	padding: 1em 1em 0 1em;
	border-radius: 5px;

}
</style>
