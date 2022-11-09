const transferCapFormCom = {
  template: `
  <template>
    <v-form v-model="valid" ref="form">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="transfer_form.fund"
              :rules="fundRules"
              label="金额"
              required
            ></v-text-field>
          </v-col>
  
          <v-col cols="12" md="8">
            <v-btn color="purple" :disabled="!valid" @click="transfer_form.direction='1';transferCap()" :loading="loading1">入金</v-btn>
            <v-btn color="purple" :disabled="!valid" @click="transfer_form.direction='2';transferCap()" :loading="loading2">出金</v-btn>
          </v-col>

        </v-row>
      </v-container>
    </v-form>
  </template>
  `,
  data(){
    return {
      loading1: false,
      loading2: false,
      valid: false,
      transfer_form:{
        fund: '',
        direction: '',
      },
      fundRules: [
        v => !!v || '请输入金额',
        v => /^\d*?\.?\d+$/.test(v) || '请输入数字',
      ],
    }
  },
  methods:{
    async transferCap(){
      let res = this.$refs.form.validate();
      if (!res){
        console.log("transfer cap form not validate")
        return;
      }
      if (this.transfer_form.direction === '1') {
        this.loading1 = true;
      } else {
        this.loading2 = true;
      }
      let resp = await transfer_cap(JSON.stringify(this.transfer_form));
      resp = JSON.parse(resp);
      console.log(resp)
      app.snackbar = true;
      app.message = resp.message;
      if (this.transfer_form.direction === '1') {
        this.loading1 = false;
      } else {
        this.loading2 = false;
      }
    }
  }
}