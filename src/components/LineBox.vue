<template>
	<div>
		<v-sheet class='pl-3 pr-3 pt-2'>
			<div v-for='line in lines'>
		        <input
		          class='chords-input'
		          placeholder='Chords'
		        />
		        <v-text-field
		          class='lyrics-input'
		          placeholder='Lyrics'
		          dense
		        >
		    	</v-text-field>
	        </div>
		</v-sheet>
	</div>
</template>
<script>

export default {
  props: ['lines'],
  components: {
    
  },


  data: () => ({
 
  }),
}
</script>

<style>

.chords-input{
	height: 25px !important;
	padding-left: 5px;
	border-radius: 3px;
	width: 100%;
	background: #E0E0E0;
}

.lyrics-input{
	padding: 0 3px 0 3px;
}
</style>