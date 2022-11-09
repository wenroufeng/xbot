const dealQueryCom = {
  template: `
  <template>
    <v-card>
      <v-toolbar dense>
        <template>
          <v-tabs v-model="tabs">
            <v-tab href="#position">持仓</v-tab>
            <v-tab href="#entrust">委托</v-tab>
            <v-tab href="#trade">成交</v-tab>
            <v-tabs-slider color="pink"></v-tabs-slider>
          </v-tabs>
        </template>
        <v-btn v-if="activeFab.entrust" color="secondary">撤单</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="refresh" >
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card>
        <position-com ref="position" @change_se="change_se" v-if="activeFab.position"></position-com>
        <entrust-com ref="entrust" v-if="activeFab.entrust"></entrust-com>
        <trade-com ref="trade" v-if="activeFab.trade"></trade-com>
      </v-card>
      
    </v-card>
  </template>
  `,
  components: {
    positionCom,
    entrustCom,
    tradeCom,
  },
  data: () => ({
    tabs: null,
  }),
  computed: {
    activeFab () {
      switch (this.tabs) {
        case 'position': return { position: true }
        case 'entrust': return { entrust: true }
        case 'trade': return { trade: true }
        default: return {}
      }
    },
  },
  methods: {
    change_se(se){
      this.$emit("change_se", se);
    },
    async refresh(){
      if (this.activeFab.position){
        await this.$refs.position.reload_data();
      } else if (this.activeFab.entrust){
        await this.$refs.entrust.reload_data();
      } else if (this.activeFab.trade){
        await this.$refs.trade.reload_data();
      }
    }
  },
}
