<template>
	<v-container>
		<v-row>
			<v-col class='col-12 col-md-8 container'>
				<v-card>
				    <v-card-title>
				      Explore Songs
				      <v-spacer></v-spacer>
				      <v-text-field
				      	v-model="search"
				        append-icon="mdi-magnify"
				        label="Search"
				        single-line
				        hide-details
				      ></v-text-field>
				    </v-card-title>

					<v-data-table
				      :headers="headers"
				      :items="songs"
				      class="text-h6"
				      dense
				      :search="search"
				      @click:row='handleClick'
				    >
				      <template slot="songs" slot-scope="myprops">
				        <td v-for="header in headers">
						    {{ myprops.item[header.value] }}
				        </td>
				      </template>
				    </v-data-table>

			    </v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
// @ is an alias to /src
import { getSongs }  from '../repository'

export default {
  name: 'Home',
  components: {

  },
  methods: {
  	handleClick(value) {
  		window.location.href = '/' + value._id
  	}
  },
  data(){
    return {
      songs: [],
      search: '',
      headers: [
          {
            text: 'Song Title',
            align: 'start',
            value: 'title',
            link: '_id'
          },
          { 
          	text: 'Artist', 
          	value: 'artist',
          	sortable: false,
          	link: '_id'
          },


          
      ]

    }
  },
  mounted() {
    getSongs()
      .then(data => this.songs = data.songs)
      .catch((err =>alert(err)));
  }
}
</script>
<style>
.songs-table{

}
</style>
