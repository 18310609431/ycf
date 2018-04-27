<template>
  <div id="home" >
    <witherPaper  id="paper" class="js-list-item"></witherPaper>
    <!-- <aboutUs id="aboutUs" class="js-list-item"></aboutUs> -->
    <design  id="sj" class="js-list-item"></design>
    <technology id="technology" class="js-list-item"></technology>
    <coin id="coin" class="js-list-item"></coin>
  	<development id="development" class="js-list-item"></development>
  	<team id="team" class="js-list-item"></team>
  	<!--<consultant id="consultant" class="js-list-item"></consultant>-->
    <invest id="hx" class="js-list-item"></invest>
  </div>
</template>

<script>
  //  import witherPaper from "../../components/whitePaper.vue"
  //  import design from "../../components/design.vue"
  //  import technology from "../../components/technology.vue"
  //  import development from "../../components/development.vue"
  //  import team from "../../components/team.vue"
  //  import coin from "../../components/pdxCoin.vue"
  //  import consultant from "../../components/consultant.vue"
  //  import invest from "../../components/invest.vue"
// import contactUs from "../../components/contactUs.vue"
export default {
//name: 'home',
  data () {
    return {
    }
  },
  methods: {
  },
//      components: 
// 	 {
// 	   witherPaper,
//        design,
//        technology,
//        coin,
//        development,
//        team,
//        consultant,
//        invest,
//  //    contactUs,
// 	 },
  components: 
  {
    witherPaper :resolve => {require(['../../components/whitePaper.vue'], resolve)},
    design      :resolve => {require(['../../components/design.vue'], resolve)},
    technology  :resolve => {require(['../../components/technology.vue'], resolve)},
    coin        :resolve => {require(['../../components/pdxCoin.vue'], resolve)},
    development :resolve => {require(['../../components/development.vue'], resolve)},
    team        :resolve => {require(['../../components/team.vue'], resolve)},
//  consultant  :resolve => {require(['../../components/consultant.vue'], resolve)},
    invest      :resolve => {require(['../../components/invest.vue'], resolve)},
//  contactUs   :resolve => {require(['../../components/contactUs.vue'], resolve)},
  },
  created () {
  }
}
</script>

<style scoped>
#home
{
  height: 100%;
  width: 100%;
  /* background: #1a1a1e; */
}
</style>
