
const dealCom = {
  template: `
    <div>
      <buy-com ref="buy"></buy-com>
      <deal-query-com @change_se="change_se_handle"></deal-query-com>
    </div>
  `,
  components: {
    buyCom,
    dealQueryCom,
  },
  methods: {
    change_se_handle (se) {
      this.$refs.buy.change_securities(se)
    }
  }
}
