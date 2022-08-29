import layout from '@/modules/layout/layout.vue'
export const constantsRouter = [
    {
        path: '',
        component: layout,
        redirect: 'welcome',
        children: [
            {
                path: '/welcome',
                name: 'welcome',
                component: () => import('@/views/home/index.vue'),
            }
        ]
    }
]