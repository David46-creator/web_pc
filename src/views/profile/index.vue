<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">
        <el-col :span="6" :xs="24">
          <user-card :user="user" />
        </el-col>
        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="accountTab">
<!--              <el-tab-pane label="Activity" name="activity">-->
<!--                <activity />-->
<!--              </el-tab-pane>-->
              <el-tab-pane label="巡查记录" name="timeline">
                <timeline />
              </el-tab-pane>
              <el-tab-pane label="修改资料" name="account">
                <account :user="user" />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Activity from './components/Activity'
import Timeline from './components/Timeline'
import Account from './components/Account'

export default {
  name: 'Profile',
  components: { UserCard, Activity, Timeline, Account },
  data() {
    return {
      user: {},
      activeTab: 'activity',
      accountTab: 'account'
    }
  },
  computed: {
    ...mapGetters(['name', 'idCard' , 'avatarUrl', 'phone', 'roles'])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        idCard: this.idCard,
        role: this.roles,
        phone: this.phone,
        avatarUrl: this.avatarUrl
      }
    }
  }
}
</script>
