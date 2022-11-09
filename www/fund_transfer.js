const fundTransferCom = {
  template: `
  <template>
    <div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">机构代码</th>
              <th class="text-left">资金</th>
              <th class="text-left">资金调拨方向</th>
              <th class="text-left">错误码</th>
              <th class="text-left">错误信息</th>
              <th class="text-left">操作结果</th>
              <th class="text-left">操作时间</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in records">
              <td>{{ item.OrgID }}</td>
              <td>{{ item.Fund }}</td>
              <td>{{ direction_map[item.Direction] }}</td>
              <td>{{ item.ErrorID }}</td>
              <td>{{ manager_errs[item.ErrorID] }}</td>
              <td v-if="item.ErrorID==0">{{ status_map[item.Status] }}</td>
              <td v-else>调拨失败</td>
              <td>{{ item.Time.replace(/^(\\d{2})(\\d{2})(\\d{2})(\\d*)$/, '$1:$2:$3\\.$4') }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>

  </template>
  `,
  data(){
    return {
      direction_map: {
        '1': '上交柜台调往深交',
        '2': '深交柜台调往上交'
      },
      status_map: {
        '1': '调拨中',
        '2': '调拨中',
        '3': '调拨中',
        '4': '调拨中',
        '5': '调拨成功',
        '6': '调拨失败'
      },
      records: [],
    }
  },
  methods: {
    async reload_data(){
      let resp = await query_fund_transfer();
      resp = JSON.parse(resp);
      console.log(resp)
      this.records = resp.data.data;
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