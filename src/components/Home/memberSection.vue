<template>
  <!-- <sectionLayout title="Member" style="padding: 0"> -->
  <sectionLayout title="Member">
    <p class="description">
      <span>所属部署や仕事も様々な、個性豊かな仲間たちです。</span>
    </p>
    <div class="scroll_pc_container">
      <div class="scroll_pc">
        <!-- TODO: 見切れ防止のために同じリストを2つ並べている。よりよい方法があれば修正する -->
        <MembersScroll />
        <MembersScroll />
      </div>
    </div>
    <div class="scroll_sp_container">
      <div class="scroll_sp">
        <MembersScroll half="left" />
        <MembersScroll half="left" />
      </div>
      <div class="scroll_sp">
        <MembersScroll half="right" :reverse="true" />
        <MembersScroll half="right" :reverse="true" />
      </div>
    </div>
    <Button message="メンバーページ" url="/member" />
  </sectionLayout>
</template>
<script>
import SectionLayout from './SectionLayout.vue'
import MembersScroll from './MembersScroll.vue'
import Button from '../common/Button.vue'
export default {
  components: {
    SectionLayout,
    MembersScroll,
    Button
  },
  computed: {
    left_members() {
      return this.members.slice(0, 7)
    },
    right_members() {
      return this.members.slice(8, 14)
    }
  }
}
</script>
<style scoped>
.description {
  margin: 0 0 50px 0;
}

span {
  display: inline-block;
}

.scroll_pc {
  margin-left: -20px;
  margin-right: -20px;
  width: 100vw;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: max-content;
  overflow-y: hidden;
  color: lightgoldenrodyellow;
}
.scroll_sp_container {
  display: none;
}
.scroll_sp {
  margin-top: 2px;
  margin-left: -20px;
  margin-right: -20px;
  width: 100vw;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: max-content;
  overflow-y: hidden;
  color: lightgoldenrodyellow;
}
.scroll_list_to_left {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  animation: loop_to_left infinite linear 60s both;
}
.scroll_list_to_right {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  animation: loop_to_right infinite linear 60s both;
}
.slide {
  margin: 0 15px;
  width: 240px;
  height: auto;
  border-radius: 20px;
}

li {
  list-style-type: none;
}
@media screen and (max-width: 834px) {
  .description {
    margin: 0 0 30px 0;
  }
}
@media screen and (max-width: 600px) {
  .description {
    margin: 0 0 20px 0;
  }
  .scroll_pc_container {
    display: none;
  }
  .scroll_sp_container {
    display: block;
  }
}
</style>
