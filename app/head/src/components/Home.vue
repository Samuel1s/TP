<template>
    <div id="card-align">
        <md-card id="card-size">
            <md-card-media-cover>
                <md-card-media md-ratio="1:1">
                  <img src="../assets/img-casa.jpg">
                </md-card-media>

                <md-card-area>
                    <md-card-header>
                        <span class="md-title">As melhores casas da região.</span>
                        <span class="md-subhead">Consulte nossa lista e cadastre seu imóvel já!</span>
                    </md-card-header>

                    <md-card-actions>
                        <md-button @click="CLEAR_Arr(); $router.push('/listHouses')">Lista</md-button>
                    </md-card-actions>
                </md-card-area>
            </md-card-media-cover>
        </md-card>

        <md-card id="card-size">
            <md-card-media-cover>
                <md-card-media md-ratio="1:1">
                  <img src="../assets/img-ap.jpg">
                </md-card-media>

                <md-card-area>
                    <md-card-header>
                        <span class="md-title">Os melhores AP's da região.</span>
                        <span class="md-subhead">Consulte nossa lista e cadastre seu imóvel já!</span>
                    </md-card-header>

                    <md-card-actions>
                        <md-button @click="CLEAR_Arr(); $router.push('/listFlats')">Lista</md-button>
                    </md-card-actions>
                </md-card-area>
            </md-card-media-cover>
        </md-card>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        props: {
            msg: String
        },

        methods: {
           ...mapMutations([
                'CLEAR_Arr'
            ])
        },
    }
</script>

<style scoped>
   #card-align {
       display: flex;
       flex-direction: row;
       justify-content: center
   }

   #card-size {
        width: 430px;
        height: 430px
   }
</style>
