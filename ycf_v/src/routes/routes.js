//import home from '../page/home/index.vue'

export default [
  /*{
    path:'*',component:NotFound,hidden:true
  },*/
  {
    path:'/',
    // component:home,
    component:  resolve => require(['../page/home/index.vue'], resolve),
  },
  // {path:'/404',component:NotFound}
  ]


