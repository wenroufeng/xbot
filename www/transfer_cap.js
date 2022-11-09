const transferCapCom = {
  template: `
  <template>
    <div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">机构代码</th>
              <th class="text-left">实际冻结或解冻金额</th>
              <th class="text-left">资金操作方向</th>
              <th class="text-left">操作时间</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in records">
              <td>{{ item.OrgID }}</td>
              <td>{{ item.Fundamt }}</td>
              <td>{{ direction_map[item.Direction] }}</td>
              <td>{{ item.Time }}</td>
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
        '1': '入金',
        '2': '出金'
      },
      records: [],
    }
  },
  methods: {
    async reload_data(){
      let resp = await query_transfer_cap();
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