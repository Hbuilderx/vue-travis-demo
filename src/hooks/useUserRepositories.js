import { fetchUserRepositories } from '@/api/repositories'
import { ref, onMounted, watch } from 'vue'
export default function useUserRepositories(user) {
  const repositories = ref([])
  const getUserRepositories = async () => {
    
    try{
      repositories.value = await fetchUserRepositories(user.value)
    }catch(err){
      if(err){
        repositories.value = [
          {
            name: "zhu",
            username: "dongshuai",
            email: "ratszhu@gmail.com",
            phone: "18855055159",    
            address: {
              city: "SuZhou",
              street: "NanShi Street",
              suite: "BaiTang"
            }
          }
        ]
      }
    }
    
    
  }
  onMounted(getUserRepositories)
  watch(user, getUserRepositories)
  return {
    repositories,
    getUserRepositories
  }
}
