const entrustCom = {
  template: `
  <template>
    <div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">柜台编号</th>
              <th class="text-left">节点</th>
              <th class="text-left">代码</th>
              <th class="text-left">错误码</th>
              <th class="text-left">错误信息</th>
              <th class="text-left">报单价格</th>
              <th class="text-left">报单类型</th>
              <th class="text-left">报单状态</th>
              <th class="text-left">方向</th>
              <th class="text-left">报单数量</th>
              <th class="text-left">成交数量</th>
              <th class="text-left">剩余数量</th>
              <th class="text-left">请求接收时间</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in orders"
              :key="item.OrderSysID"
            >
              <td>{{ item.OrderSysID }}</td>
              <td>{{ item.SubClientIndex }}</td>
              <td>{{ item.SecuritiesID }}</td>
              <td>{{ item.ErrorId }}</td>
              <td>{{ errs[item.ErrorId] }}</td>
              <td>{{ item.LimitPrice }}</td>
              <td>{{ message_id_map[item.OrderMessageId] }}</td>
              <td>{{ order_status_map[item.OrderStatus] }}</td>
              <td>{{ direction_map[item.Direction] }}</td>
              <td>{{ item.Volume }}</td>
              <td>{{ item.TradeVolume }}</td>
              <td>{{ item.LeavesVolume }}</td>
              <td>{{ item.TransactTime.replace(/^(\\d{2})(\\d{2})(\\d{2})(\\d*)$/, '$1:$2:$3\\.$4') }}</td>
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
      per_page: PER_PAGE,
      message_id_map: {
        101: '报单',
        103: '撤单'
      },
      order_status_map: {
        '1': '正报',
        '2': '已报',
        '5': '部撤',
        '6': '已撤',
        '7': '部成',
        '8': '已成',
        '9': '废单',
      },
      direction_map: {
        '1': '买',
        '2': '卖'
      },
      orders: [],
    }
  },
  watch:{
    async page(nv){
      await this.reload_data(nv, this.per_page);
    }
  },
  methods: {
    async reload_data(page=this.page, num=this.per_page){
      let resp = await query_order(page, num);
      resp = JSON.parse(resp);
      console.log(resp)
      this.orders = resp.data.data;
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