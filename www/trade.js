const tradeCom = {
  template: `
  <template>
    <div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">柜台编号</th>
              <th class="text-left">代码</th>
              <th class="text-left">成交价格</th>
              <th class="text-left">方向</th>
              <th class="text-left">成交数量</th>
              <th class="text-left">剩余数量</th>
              <th class="text-left">成交时间</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in trades"
              :key="item.OrderSysID"
            >
              <td>{{ item.OrderSysID }}</td>
              <td>{{ item.SecuritiesID }}</td>
              <td>{{ item.LimitPrice }}</td>
              <td>{{ direction_map[item.Direction] }}</td>
              <td>{{ item.TradeVolume }}</td>
              <td>{{ item.LeavesVolume }}</td>
              <td>{{ item.TradeTime.replace(/^(\\d{2})(\\d{2})(\\d{2})(\\d*)$/, '$1:$2:$3\\.$4') }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      
      <template>
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="page_length"
            :total-visible="7"
          ></v-pagination>
        </div>
      </template>
    </div>
  </template>
  `,
  data(){
    return {
      page: 1,
      page_length: 1,
      direction_map: {
        '1': '买',
        '2': '卖'
      },
      trades: [],
    }
  },
  watch:{
    async page(nv){
      await this.reload_data(nv, this.per_page);
    }
  },
  methods: {
    async reload_data(page=this.page, num=this.per_page){
      let resp = await query_trade(page, num);
      resp = JSON.parse(resp);
      console.log(resp)
      this.trades = resp.data.data;
      this.page_length = resp.data.total_page;
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