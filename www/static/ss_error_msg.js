const errs = {
  0: "正确",
  202: "无效操作员代码",
  203: "无效证券代码",
  204: "申报时间为该证券的非交易时间",
  208: "无效买卖标志，非‘B’或者‘S’",
  209: "交易品种不对",
  211: "此账号不能进行该证券交易",
  212: "价格申报出错",
  213: "证券已被挂起",
  214: "该股票不参与集合竞价",
  215: "无效帐号",
  216: "该帐号未指定在你席位",
  217: "帐号已被挂起",
  218: "无效申报价格",
  219: "申报价不能为零",
  220: "申报价格不符合最小价格步长要求",
  222: "申报价格超出范围",
  223: "申报买入数量必须是1000的整数倍",
  224: "无效的申报数量",
  225: "申报数量必须大于0",
  226: "新股申报数量至少1000",
  227: "申报数量不符合最小步长要求",
  228: "申报数量超过单笔最大允许申报的上限",
  231: "账号可卖出的余额不足",
  234: "股票持有量超出限量",
  236: "PBU没有买入权限",
  237: "PBU没有卖出权限",
  243: "基金帐号\机构帐号不能买卖此证券",
  244: "‘S’帐号不能买入",
  245: "不能撤销指定（有卖空股票，请先补回卖空股票）",
  246: "不能撤销指定（有申报）",
  247: "不能撤销指定（公司卖空）",
  248: "中国证券登记结算公司不允许撤销指定",
  250: "B股结算会员代码（数据库接口中的firmid）错，可从中登公司上海分公司查询。",
  252: "无效操作员代码",
  253: "操作员权限不够",
  257: "操作员申报的rec_num序号不连续",
  263: "市价订单不参加集合竞价",
  264: "最优五档即时成交剩余撤销市价订单对手方无未成交订单",
  265: "最优五档即时成交剩余转限价市价订单对手方和本方均无未成交订单",
  266: "该券种不允许做市价订单",
  267: "帐户没有权限进行账户式质押回购的交易及出入库",
  268: "场内报盘对于出入库申报的统一出错代码",
  269: "申报类型错误",
  270: "申报类型错误",
  271: "该帐号已指定在你席位",
  272: "未做指定不能交易",
  273: "E 帐号不能通过场内申报进行交易",
  274: "信用交易的申报帐户必须是E 帐户",
  275: "普通交易的申报帐户必须不是E 帐户",
  276: "该证券不允许担保品买入",
  277: "信用卖出权限不足",
  278: "该证券不允许融资买入",
  279: "卖券还款或融资平仓权限不足",
  280: "买券还券或融券平仓权限不足",
  281: "该证券不允许融券卖出",
  282: "融券卖出申报价格低于最新成交价",
  283: "买券还券、融券卖出、融券平仓申报的信用帐户必须配置证券公司融券专用帐户",
  401: "无效操作员代码",
  403: "无效申报序号",
  404: "撤单对应申报序号检验失败",
  405: "撤单对应的证券帐号检验失败",
  406: "撤单对应的股票代码检验失败",
  407: "撤单对应的买卖方向检验失败",
  408: "对应的申报已经被撤单",
  409: "只能通过买799998撤销指定",
  410: "只能通过买799999重新指定",
  411: "对应的申报已成交，不能撤单",
  412: "不允许撤单",
  413: "撤单失败,对应的申报已成交或者已经被撤单",
  499: "无申报可撤",
  731: "基金公司未上传ETF申购赎回清单",
  732: "ETF状态不对",
  733: "ETF投资者持股不足",
  734: "ETF现金替代比例超过基金公司规定的比例",
  735: "ETF基金账号持股余额不足，投资者不能赎回",
  736: "ETF基金账户不能申购或赎回",
  752: "账户中没有现券",
  753: "账户中现券余额不足",
  754: "账户中没有标准券",
  755: "账户中标准券余额不足",
  756: "账户没有质押券",
  757: "账户的质押券余额不足",
  758: "标准券折算率未初始化",
  759: "标准券代码不存在",
  1005: "登录主机失败",
  1021: "rec_num 必须连续递增",
  1022: "股票代码错误或者非本市场产品",
  1023: "账号错误",
  1024: "买卖方向错误",
  1025: "价格错误",
  1026: "数量错误",
  1027: "日期错误",
  1028: "申报单或撤消单的标志错误",
  1029: "结算会员代码错误",
  1030: "撤消单的ordrec域错误",
  1031: "撤消单的ordrec域大于等于撤消单的rec_num域",
  1034: "撤消的申报单是失败的数据单",
  1039: "刚读入待处理的单子的status是’P’或’p’",
  1040: "刚读入待处理的单子的status不是’R’，也不是’P’",
  1042: "底层通讯接收时发生错",
  1043: "接收到的数据包内容错误",
  1050: "撤消的申报单不存在或者撤单申报的证券代码错误",
  1100: "申报号太大",
  1101: "记录不匹配",
  1102: "营业部代码格式错误，格式必须为1到65535的整数",
  2000: "与交易所的网络连接出错",
  2001: "被撤单的日期不是今天",
  2004: "被撤单的帐号不是本人",
  2006: "撤单记录中被撤单的股票代码与被撤单不一致",
  2007: "撤单记录中被撤单的股票价格不正确，与被撤单不一致",
  2008: "只有申报才可被撤单",
  2101: "撤单记录和被撤单记录的股票买卖方向不同",
  2102: "撤单记录和被撤单记录的股票数量不同",
  4012: "错误的证券代码和BizID",
  5000: "信息长度超过4k",
  5001: "校验码错误",
  5002: "心跳超时",
  5003: "已经登录",
  5004: "登录超时",
  5005: "CompId错误",
  5006: "未准备",
  5007: "网络错误",
  5008: "信息类型不合法",
  5009: "不接受新报单",
  5010: "setID错误",
  5011: "Pbu错误",
  5012: "先登录",
  5013: "BeginReportIndex错误",
  5014: "不支持prtcl版本",
  5015: "信息错误",
  5016: "CIOrdlID取值错误",
  10000: "未明错误",
  10004: "无效密码",
  10008: "无效交易代码",
  10018: "无效市场类型",
  10100: "无效的产品子类型",
  10106: "无效的产品类型",
  10236: "无效时间戳",
  10252: "该交易时段内禁用该功能",
  10262: "无效的报单类型",
  10266: "无效的交易限制类型",
  10280: "不合理的数量",
  10444: "报单数量超过最低限度",
  10450: "报单价格超过范围",
  10476: "无效的pbu类型",
  10508: "交易员处于不活动状态",
  10512: "PBU交易标识为未激活（暂停状态，权限不足）",
  10516: "交易员处于不活动状态",
  10560: "买订单数量不是最小单位的整数倍",
  10562: "卖订单数量不是最小单位的整数倍",
  10596: "订单价格不是增加单位的整数倍",
  10610: "订单没有找到",
  10702: "投资者帐户与PBU无指定交易关系",
  10706: "投资者帐户已被暂停",
  10708: "投资者帐户类型对该产品无效",
  10712: "无效的投资者账户",
  10740: "交易时间已经结束",
  10796: "该帐户类型不允许指定",
  10804: "该帐号已指定在其它席位",
  10806: "该帐户类型不允许撤销指定",
  10812: "指定的交易不存在",
  10836: "投资者持仓不足",
  10930: "不正确的市场状态",
  10932: "当前时间阶段不允许报单",
  11034: "该产品此非交易类型业务今日不开放",
  11038: "无效的分红选择",
  11040: "无效的转托管来源或目的",
  11042: "该业务申报不可用",
  11050: "投资者持仓不存在",
  11060: "该PBU没有该产品的买权限",
  11064: "该PBU没有该产品的卖权限",
  11068: "该PBU无权限交易此产品",
  11080: "该账户没有权限买此产品",
  11082: "该账户没有权限卖此产品",
  11098: "订单数量超过最高上限",
  11128: "投资者无此非交易类型业务权限",
  11130: "该产品此非交易类型业务已经被暂停",
  11150: "无效的转换基金",
  11152: "正在进行撤销指定（可能发生在联通PBU对该帐户进行撤销指定的同时，本PBU进行订单输入的场景；也可能发生在先输入一笔普通交易，然后输入一笔该帐户撤销指定交易的场景）",
  11166: "该帐号已指定在其它席位",
  11202: "无效PBU",
  11220: "产品不能作为抵押品交易",
  11218: "不正确的信用标签类型 ",
  11228: "无效信用标签",
  11236: "该PBU无融资买入权限",
  11238: "该PBU无融券卖出权限",
  11240: "集合竞价最后五分钟不允许删除订单",
  11246: "交易阶段尚未准备好进行交易",
  11266: "投资者无此类型产品买权限",
  11268: "投资者无此类型产品卖权限",
  11270: "重新提交订单",
  11278: "无效的广播重传请求范围",
  13304: "未上市的产品",
  13338: "无效的订单类型和产品组合",
  13360: "不能在集合竞价时输入国债分销买单",
  13374: "登录pbu处于不活跃状态",
  13398: "禁止限价订单交易",
  13424: "超过集合竞价最大订单配置量",
  13430: "订单不匹配或者已删除",
  13434: "撤单包含不一致的产品",
  13440: "该证券不允许买券还券或融券平仓",
  13446: "无效的TDGW版本",
  13448: "不允许出售抵押品、出售凭证、清算",
  13454: "禁止删除报单",
  13456: "超过ETF赎回限额",
  13458: "交易主机忙",
  13518: "参数无效",
  13582: "改变时间无效",
  13586: "恢复时间无效",
  13588: "暂停时间无效",
  13592: "交易在未开始阶段，操作被禁止",
  18200: "包消息头已损坏",
  18202: "无效的消息长度",
  18206: "无效的请求掩码",
  19036: "无效的订单买卖方向",
  19058: "Biz PBU和登录PBU属于不同的成员",
  19112: "Biz类型无法获取",
  19114: "产品无法获取",
  19128: "PBU无法获取",
  20000: "不被期待的消息类型",
  20001: "无效的平台ID",
  20002: "无效的消息流",
  20003: "PBU重复登录",
  20004: "PBU未登录",
  20008: "登录验证失败",
  20009: "后端PBU启动",
  20010: "无效的clordid格式",
  20011: "无效的origclordid格式",
  20012: "无效的branchid格式",
  20013: "无效的clearingfirm格式",
  20014: "无效的userinfo格式",
  20015: "无效的所有者类型",
  55002: "数据未填写",
  55003: "上次查询未结束",
  55005: "口令错误",
  55007: "用户已登录",
  55014: "用户尚未登录",
  55015: "系统内存不足",
  55016: "错误的资金账号",
  55020: "投资者不合法，此操作不能被执行",
  55021: "不合法的密码",
  55031: "错误的授权码",
  55033: "登录子客户端索引错误",
  55037: "sessionID不存在",
  55038: "token错误",
  55039: "报单序号不是连续增加",
  55040: "被撤单找不到",
  55041: "内部进程间消息发送失败",
  55042: "STEP信息编码失败",
  55043: "插入数据库失败",
  55044: "重复登录",
  55045: "柜台导上场数据初始化未完成",
  55046: "查询过快",
  55047: "无相关记录",
  55048: "登录超时",
  55049: "该用户已经在其他链路登录",
  55050: "api版本错误",
  55052: "接口未开启",
  55053: "错误的时间格式",
  55054: "号段用尽或未配置号段",
  55055: "集中交易操作失败",
  55056: "用户登录ip检查失败",
  55057: "用户登录mac地址检查失败",
  55058: "转移失败",
  55059: "KCBP授权失败",
  55060: "连接headquarter错误",
  55061: "资金不能为负",
  55062: "系统id错误",
  55063: "登录太快",
  55064: "仓位检查错误",
  55065: "组合策略类型错误",
  55067: "Zmq通信错误",
  55068: "已经有其他帐户登录到当前链接",
  55069: "发送到交易所失败",
  55070: "号码范围已用完",
  55071: "柜台正在数据恢复，等待完成",
  55072: "取消其他账户订单",
  55073: "重建失败",
  55074: "Xele-Bot登录超时",
  55084: "强制撤单（正报单没发往交易所，被强制撤单）",
  60000: "正确",
  60001: "该合约限制买入",
  60002: "该合约限制卖出",
  60003: "该合约限制卖空",
  60004: "不支持",
  60005: "不允许跨市扫货单",
  60006: "不允许市价单",
  60007: "价格超出范围",
  60008: "单笔手数超过ADV限制",
  60009: "报价最小值错误",
  60010: "单笔交易额过小",
  60011: "单笔交易额过大",
  60012: "单笔手数过小",
  60013: "单笔手数过大",
  60014: "当日用户报单ID重复",
  60015: "没找到合约",
  60016: "不合法的有效期类型",
  60017: "XeleTrade停止交易",
  60018: "XeleTrade限制交易",
  60019: "当日累计交易额过大",
  60020: "没有贷款经纪人标识",
  60021: "报单速率过快",
  60022: "报单表地址冲突",
  60023: "不合法的报单类型",
  60024: "不合法的报单方向",
  60025: "不允许IPO交易",
  60026: "未成交单过多",
  60027: "业务范围不正确",
  60028: "不允许有担保单的卖空",
  60029: "不正确的最小价格变化值",
  60030: "不正确的最小手数单位",
  60031: "报单不匹配或者报单表已满",
  60032: "缺失字段",
  60033: "超时(合约表不存在)",
  60034: "字段错误",
  60035: "改单时不允许增加，只能减少",
  60036: "该机构不允许买入",
  60037: "该机构不允许卖出",
  60038: "该机构不允许卖空",
  60039: "不允许自营买",
  60040: "不允许自营卖",
  60041: "不允许自营卖空",
  60042: "禁止买入",
  60043: "禁止卖出",
  60044: "不允许卖空",
  60045: "当天买入方向累计超额",
  60046: "当天卖出方向累计超额",
  60047: "卖出超出持仓",
  60048: "卖空超出借入",
  60049: "未应答报单",
  60050: "SAMSN拒单",
  60051: "VENUE繁忙",
  60052: "该合约未成交买单超出上限",
  60053: "该合约未成交卖单超出上限",
  60054: "改单的合约不匹配",
  60055: "该报单不存在",
  60056: "报单查找表搜索超时",
  60057: "资金账户变化",
  60058: "数量错误",
  60059: "该合约持仓过多",
  60060: "该合约多头持仓过多",
  60061: "该合约空头持仓过多",
  60062: "售出手数大于可售手数",
  60063: "可卖数量不足",
  60064: "可用资金量小于该笔报单保证金",
  60065: "保证金占可用资金百分比过高",
  60066: "当天该合约撤单次数超限，不允许撤单",
  60067: "客户报单ID与登录ID不一致",
  60068: "报单价格格式错误",
  60069: "报单价格条件字段不在枚举范围之内",
  60070: "报单买卖方向条件字段不在枚举范围之内",
  60071: "报单开平字段不在枚举范围之内",
  60072: "报单投机套保标志字段不在枚举范围之内",
  60073: "报单有效期类型字段不在枚举范围之内",
  60074: "报单操作标志字段不在枚举范围之内",
  60075: "交易所端在途订单过多，限制报单",
  60076: "xele_trade系统高负载，报单过多，限制报单",
  60077: "xele_trade系统高负载，持仓过多，限制报单",
  60078: "报单投机套保标志与客户交易类型不一致",
  60079: "交易所端流控达到上限",
  60080: "交易所端流控达到上限",
  60081: "交易所端流控达到上限",
  60082: "客户端未登录",
  60083: "报单已撤，不能再次撤销",
  60084: "拒绝自成交报单",
  60085: "xele-monitor强平单不能被用户通过API撤掉",
  60086: "报单已经被撤掉了",
  60087: "今日限买",
  60088: "合约格式错误",
  60089: "成交量类型不在枚举范围内",
  60090: "触发条件不在枚举范围内",
  60091: "强平原因不在枚举范围内",
  60092: "报单手数小于最小成交量手数",
  60093: "交易所端流控达到上限",
  60094: "前置未登录",
  60095: "前置错误",
  60096: "不允许开仓",
  60097: "不允许期货FOK报单",
  60098: "IAS格式错误",
  60099: "交割月禁止开仓",
  60100: "未登录不允许交易",
  60101: "系统负载过高",
  60102: "限额达到最大值",
  60103: "权利仓已达上限",
  60104: "当日权利仓已达上限",
  60105: "总持仓已达上限",
  60106: "禁止自成交",
  60107: "触发价格偏离度风控",
  60108: "今天限卖",
  60109: "不允许撤单",
  60110: "新股配股报单只允许一次",
  60111: "合约类型错误",
  60200: "报文identification字段错误",
  60201: "message_id不再范围内",
  60202: "message_len错误",
  60203: "用户报单id小于maxorderid",
  60204: "报单方向错误",
  60205: "positioneffect不在范围内",
  60206: "价格超出范围",
  60207: "报单类型错误",
  60208: "时间条件错误",
  60209: "udp 校验错误",
  60210: "用户token错误",
  60211: "用户未登录",
  60212: "web报单不允许api撤单",
  60213: "报单价格不能大于10000",
  60214: "号段前缀错误",
  60215: "号段Id错误",
  60216: "TCP通道错误",
  60217: "合约类型错误",
  60218: "被撤SysID超过号段范围",
  60220: "报单资源已用尽",
};
