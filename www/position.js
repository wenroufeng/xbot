const positionCom = {
  template: `
  <template>
    <div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
              代码
              </th>
              <th class="text-left">
              今买仓
              </th>
              <th class="text-left">
              今卖仓
              </th>
              <th class="text-left">
              昨持仓
              </th>
              <th class="text-left">
              总持仓
              </th>
              <th class="text-left">
              可用持仓
              </th>
              <th class="text-left">
              持仓成本
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in positions"
              :key="item.SecuritiesID"
              @click="change_child_se(item.SecuritiesID)"
              @dblclick="jump_to_deal(item.SecuritiesID)"
            >
              <td>{{ item.SecuritiesID }}</td>
              <td>{{ item.TdBuyPosition }}</td>
              <td>{{ item.TdSellPosition }}</td>
              <td>{{ item.YdPosition }}</td>
              <td>{{ item.TotalPosition }}</td>
              <td>{{ item.AvailablePosition }}</td>
              <td>{{ item.TotalCost }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>

  </template>
  `,
  data(){
    return {
      positions: [],
    }
  },
  methods: {
    change_child_se(se){
      this.$emit("change_se", se);
    },
    jump_to_deal(se){
      this.$router.push('/deal');
      this.change_child_se(se);
    },
    async reload_data(){
      let resp = await query_position();
      resp = JSON.parse(resp);
      console.log(resp)
      this.positions = resp.data.data;
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