const accountCom = {
  template: `
  <template>
    <div>
      <v-toolbar dense>
        <v-tabs>
          <v-tab>
            资金
          </v-tab>
          <v-tabs-slider color="pink"></v-tabs-slider>
        </v-tabs>
        <v-toolbar-title></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon @click="reload_data">mdi-refresh</v-icon>
        </v-btn>
      </v-toolbar>

      <v-data-iterator
        :items="accounts"
        :items-per-page="4"
        hide-default-footer
        class="d-flex justify-space-between flex-row  mb-6"
      >
        <template v-slot:default="{ items }">
          <v-list v-for="item in items" dense  class="flex-grow-1 flex-shrink-0">
            <v-list-item>
              <v-list-item-content>冻结资金:</v-list-item-content>
              <v-list-item-content class="red--text">{{ item.FrozeCapital }}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>冻结手续费:</v-list-item-content>
              <v-list-item-content class="red--text">{{ item.FrozenFee }}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>已付手续费:</v-list-item-content>
              <v-list-item-content class="red--text">{{ item.UsedFee }}</v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list v-for="item in items" dense class="flex-grow-1 flex-shrink-0">
            <v-list-item>
              <v-list-item-content>上场资金:</v-list-item-content>
              <v-list-item-content class="red--text">{{ item.TotalFund }}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>总卖出:</v-list-item-content>
              <v-list-item-content class="red--text">{{ item.SellFund }}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>总买入:</v-list-item-content>
              <v-list-item-content class="red--text">{{ item.BuyFund }}</v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list v-for="item in items" dense class="flex-grow-1 flex-shrink-0">
            <v-list-item>
              <v-list-item-content>可用资金:</v-list-item-content>
              <v-list-item-content class="red--text">{{ item.AvailableFund }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </template>
      </v-data-iterator>
    </div>
  </template>
  `,
  data(){
    return {
      accounts: [
        {
          FrozeCapital: 0,
          FrozenFee: 0,
          UsedFee: 0,
          TotalFund: 0,
          SellFund: 0,
          BuyFund: 0,
          AvailableFund: 0,
        },
      ],
    }
  },
  methods: {
    async reload_data(){
      let resp = await query_account();
      resp = JSON.parse(resp);
      console.log(resp)
      this.accounts = resp.data.data;
      if (resp.code !== 200) {
        app.snackbar = true;
        app.message = resp.message;
      }
    }
  },
  async beforeMount(){
    await this.reload_data();
  }
}
