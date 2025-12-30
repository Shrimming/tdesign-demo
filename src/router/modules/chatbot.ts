import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/chatbot',
    name: 'chatbot',
    component: Layout,
    redirect: '/chatbot',
    meta: {
      title: { zh_CN: '智能客服助手',
               en_US: 'Intelligent Client Assistant'
               },
      icon: 'user-circle' },
      children: [
      {
        path: 'index',
        name: 'ChatbotIndex',
        component: () => import('@/pages/chatbot/index.vue'),
        meta: {
          title: { zh_CN: '智能客服助手',
                   en_US: 'Intelligent Client Assistant' }
              },
      },
    ],
  },
];
