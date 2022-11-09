const buyCom = {
  template: `
  <template>
    <v-col cols="12" xs="12" sm="8" md="6" lg="4">
      <template>
        <v-tabs grow>
          <v-tab @click="chooseBuy">买入</v-tab>
          <v-tab @click="chooseSell">卖出</v-tab>
        </v-tabs>
      </template>
   
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="order_form.SecuritiesID"
          :counter="6"
          label="代码"
          :rules="securities_id_rules"
          required
        ></v-text-field>

        <v-text-field
          v-model="order_form.price"
          label="价格"
          :rules="price_rules"
          required
        >
          <v-icon style="cursor:pointer"
            slot="append"
            color="red"
            @click="addPrice"
          >
            mdi-plus-circle
          </v-icon>
          <v-icon  style="cursor:pointer"
            slot="prepend-inner"
            color="green"
            @click="reducePrice"
          >
            mdi-minus-circle
          </v-icon>
        </v-text-field>

        <v-text-field
          v-model="order_form.volume"
          label="数量"
          :rules="volume_rules"
          required
        >
          <v-icon style="cursor:pointer"
            slot="append"
            color="red"
            @click="addVolume"
          >
            mdi-plus-circle
          </v-icon>
          <v-icon style="cursor:pointer"
            slot="prepend-inner"
            color="green"
            @click="reduceVolume"
          >
            mdi-minus-circle
          </v-icon>
        </v-text-field>

        <div class="v-input v-text-field v-text-field--is-booted">
          <div class="v-input__control">
            <div class="v-text-field__slot">
              <label v-if="is_buy" class="v-label grey--text">可买数量：{{ can_buy_volume }}</label>
              <label v-if="!is_buy" class="v-label grey--text">可卖数量：{{ can_sell_volume }}</label>
            </div>
            <div class="v-text-field__details">
              <div class="v-messages">
                <div class="v-messages__wrapper"></div>
              </div>
            </div>
          </div>
          
        </div>

        <v-btn
          :disabled="!valid"
          color="error"
          class="mr-4"
          @click="orderInsert('1')"
          v-if="is_buy"
          :loading="loading_buy"
        >
          买入
        </v-btn>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="orderInsert('2')"
          v-if="!is_buy"
          :loading="loading_sell"
        >
          卖出
        </v-btn>

        <v-btn
          color="secondary"
          class="mr-4"
          @click="reset"
        >
        重置
        </v-btn>
      </v-form>
    </v-col>
  </template>
  `,
  props: ['securities_id'],
  data(){
    return {
      loading_buy: false,
      loading_sell: false,
      order_form : {
        SecuritiesID: '',
        price: '',
        volume: '',
        direction: ''
      },
      valid: true,
      can_buy_volume: 0,
      can_sell_volume: 0,
      tick_price: 0.01,
      tick_volume: 100,
      is_buy: true,

      securities_id_rules: [
        value => value && /^\d{6}$/.test(value) || '请输入合法代码'
      ],
      volume_rules: [
        value => {
          if (!(value && /^\d+$/.test(value))){
            return '请输入数字'
          }
          if (Number(value) <= 0){
            return '数量必须大于0'
          }
          if (Number(value) % this.tick_volume){
            return `数量必须是${this.tick_volume}的整数倍`
          }
          return true
        }
      ],
      price_rules: [
        value => {
          if (!(value && /^\d*?\.?\d+$/.test(value))){
            return '请输入数字'
          }
          if (Number(value) <= 0){
            return '价格必须大于0'
          }
          return true
        }
      ]
    }
  },
  methods: {
    change_securities (se) {
      this.order_form.SecuritiesID = se;
    },
    chooseBuy () {
      this.is_buy = true;
      this.order_form.price = '';
      this.order_form.volume = '';
      this.$refs.form.resetValidation();
    },
    chooseSell () {
      this.is_buy = false;
      this.order_form.price = '';
      this.order_form.volume = '';
      this.$refs.form.resetValidation();
    },
    async orderInsert(direction){
      let res = this.$refs.form.validate();
      if (!res){
        console.log("buy form not validate")
        return;
      }
      if (this.is_buy){
        this.loading_buy = true;
      } else {
        this.loading_sell = true;
      }
      this.order_form.direction = direction;
      let resp = await order_insert(JSON.stringify(this.order_form));
      resp = JSON.parse(resp);
      app.snackbar = true;
      app.message = resp.message;
      if (this.is_buy){
        this.loading_buy = false;
      } else {
        this.loading_sell = false;
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    addPrice () {
      this.order_form.price = (Number(this.order_form.price) + Number(this.tick_price)).toFixed(decimal_places(this.tick_price));
    },
    reducePrice () {
      this.order_form.price = (Number(this.order_form.price) - Number(this.tick_price)).toFixed(decimal_places(this.tick_price));
      this.order_form.price = this.order_form.price <= this.tick_price ? this.tick_price : this.order_form.price
    },
    addVolume () {
      this.order_form.volume = (Number(this.order_form.volume) + Number(this.tick_volume));
      this.order_form.volume = parseInt(this.order_form.volume / this.tick_volume) * this.tick_volume;
      this.order_form.volume = this.order_form.volume.toFixed(0);
    },
    reduceVolume () {
      this.order_form.volume = (Number(this.order_form.volume) - Number(this.tick_volume)).toFixed(0);
      this.order_form.volume = parseInt(this.order_form.volume / this.tick_volume) * this.tick_volume;
      this.order_form.volume = this.order_form.volume <= this.tick_volume ? this.tick_volume : this.order_form.volume;
      this.order_form.volume = this.order_form.volume.toFixed(0);
    }
  }
}
