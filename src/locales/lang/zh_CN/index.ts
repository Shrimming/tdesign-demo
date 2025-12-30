import componentsLocale from 'tdesign-vue-next/es/locale/zh_CN';

import components from './components';
import layout from './layout';
import pages from './pages';

export default {
  lang: '简体中文',
  layout,
  pages,
  components,
  constants: {
    contract: {
      name: '订单名称',
      status: '订单状态',
      num: '订单编号',
      type: '订单类型',
      typePlaceholder: '请输入类型',
      payType: '订单支付类型',
      amount: '订单金额',
      amountPlaceholder: '请输入金额',
      signDate: '订单签订日期',
      effectiveDate: '订单生效日期',
      endDate: '订单结束日期',
      createDate: '订单创建时间',
      company: '商家编号',
      employee: '顾客编号',
      pay: '付款',
      receive: '收款',
      remark: '备注',
      attachment: '附件',
      statusOptions: {
        fail: '卖家发货',
        audit: '已支付',
        executing: '物流中',
        pending: '待支付',
        finish: '已完成',
      },
      typeOptions: {
        main: '主订单',
        sub: '子订单',
        supplement: '补充订单',
      },
    },
  },
  componentsLocale,
};
