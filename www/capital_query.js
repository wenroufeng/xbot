const capitalQueryCom = {
  template: `
  <template>
    <v-card>
      <transfer-cap-form-com v-if="activeFab.transfer_cap"></transfer-cap-form-com>
      <fund-transfer-form-com v-if="activeFab.fund_transfer"></fund-transfer-form-com>
      <v-toolbar dense>
        <template>
          <v-tabs v-model="tabs">
            <v-tab href="#transfer_cap">出入金</v-tab>
            <v-tab href="#fund_transfer">沪深资金调拨</v-tab>
            <v-tabs-slider color="pink"></v-tabs-slider>
          </v-tabs>
        </template>
        <v-btn v-if="activeFab.entrust" color="secondary">撤单</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="refresh">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card>
        <transfer-cap-com ref="transfer_cap" v-if="activeFab.transfer_cap"></transfer-cap-com>
        <fund-transfer-com ref="fund_transfer" v-if="activeFab.fund_transfer"></entrust-com>
      </v-card>
      
    </v-card>
  </template>
  `,
  components: {
    transferCapFormCom,
    fundTransferFormCom,
    transferCapCom,
    fundTransferCom,
  },
  data: () => ({
    tabs: null,
  }),
  computed: {
    activeFab () {
      switch (this.tabs) {
        case 'transfer_cap': return { transfer_cap: true }
        case 'fund_transfer': return { fund_transfer: true }
        default: return {}
      }
    },
  },
  methods: {
    async refresh(){
      if (this.activeFab.transfer_cap){
        await this.$refs.transfer_cap.reload_data();
      } else if (this.activeFab.fund_transfer){
        await this.$refs.fund_transfer.reload_data();
      }
    }
  },
}
