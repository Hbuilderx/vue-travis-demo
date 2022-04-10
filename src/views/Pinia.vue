<template>
  <div>
    <p>Pinia使用</p>
    <form @submit.prevent="addItemToCart" data-testid="add-items">
      <input type="text" v-model="itemName" />
      <button>Add</button>
    </form>
  
    <form @submit.prevent="buy">
      <ul data-testid="items">
        <li v-for="item in cart.items" :key="item.name">
          <span> {{ item.name }} </span>
          <span class="count">x{{ item.amount }}</span>
          <button
            @click="cart.removeItem(item.name)"
            type="button"
          >X</button>
        </li>
      </ul>
  
      <button :disabled="!user.name">Buy</button>
      <button
        :disabled="!cart.items.length"
        @click="clearCart"
        type="button"
        data-testid="clear"
      >Clear the cart</button>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useUserStore } from '@/store/user'
import { useCartStore } from '@/store/cart'

export default defineComponent({
  setup() {
    const user = useUserStore()
    const cart = useCartStore()

    const itemName = ref('')

    function addItemToCart() {
      if (!itemName.value) return
      cart.addItem(itemName.value)
      itemName.value = ''
    }

    function clearCart() {
      if (window.confirm('Are you sure you want to clear the cart?')) {
        cart.rawItems = []
      }
    }

    async function buy() {
      const n = await cart.purchaseItems()

      console.log(`Bought ${n} items`)

      cart.rawItems = []
    }

    // @ts-ignore
    window.stores = { user, cart }

    return {
      itemName,
      addItemToCart,
      cart,

      user,
      buy,
      clearCart,
    }
  },
})
</script>

<style scoped>


ul {
  width: 300px;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
}

li {
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid rgb(133,133,133,.2);
  border-radius: 2px;
  padding: 5px;
  color: #CDCDCD;
  margin: 10px;
  text-align: left;
}

.count {
  font-weight: 600;
  color: orangered;
}
</style>
