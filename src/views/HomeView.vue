<template>
  <div class="home">
    <div>CompositionAPI使用</div>
    <div class="user-card" v-for="(user, index) in repositories">
      <p>
        {{user.name}}·{{user.username}}
      </p>
      <p>
        Email: {{user.email}}
      </p>
      <p>
        Phone: {{user.phone}}
      </p>
      <p>
        Addrsss: {{user.address.city}}-{{user.address.street}}-{{user.address.suite}}
      </p>
    </div>
    
  </div>
</template>

<script>
import { toRefs } from 'vue'
import useUserRepositories from '@/hooks/useUserRepositories'
import useRepositoryNameSearch from '@/hooks/useRepositoryNameSearch'
export default {
  name: 'HomeView',
  props: {
    user: {
      type: String,
      default:''
    }
  },
  setup(props) {
  // 使用 `toRefs` 创建对 `props` 中的 `user` property 的响应式引用
    const { user } = toRefs(props)
    const { repositories, getUserRepositories } = useUserRepositories(user)
    console.log(repositories)
    const {searchQuery,repositoriesMatchingSearchQuery } = useRepositoryNameSearch(repositories)
    
    return {
      repositories: repositoriesMatchingSearchQuery,
      getUserRepositories,
      searchQuery,
    }
  }
}
</script>

<style scoped="scoped">
  .user-card {
    padding: 15px;
    text-align: left;
    border: 1px solid rgba(222,222,222,.08);
    margin: 15px;
  }
</style>
