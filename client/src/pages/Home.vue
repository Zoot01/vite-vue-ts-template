<template>
  <div id="Home">
    <div class="p-d-flex p-ai-center p-jc-center p-py-4 p-flex-column">
      <form @submit.prevent="addTodo" class="p-d-flex p-flex-column">
        <h5 class="p-my-2">Add Todo -</h5>
        <InputText type="text" v-model="newTodo" placeholder="Add Todo" />
        <h5 class="p-my-2">Is Completed -</h5>
        <Checkbox id="binary" v-model="isComplete" :binary="true" />
        <Button
          type="submit"
          class="p-my-2"
          label="Submit"
          icon="pi pi-check"
          iconPos="right"
        />
      </form>
      <div class="p-d-flex p-flex-column p-mt-2" style="width: 30%">
        <Card
          v-for="(i, index) in todoItems"
          :key="index"
          class="p-my-2"
          style="background-color: #e0e0e0"
        >
          <template v-slot:title> {{ i.content }} </template>
          <template v-slot:content>
            {{ i.done === false ? "Not Completed ❌" : "Completed 🔥" }}
          </template>
          <template v-slot:footer>
            <Button
              @click="removeTodo(i.id)"
              icon="pi pi-times"
              class="p-button"
            />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue"
  import { useStore } from "../store"
  import { Todo } from "../store/types/TodoType"

  export default defineComponent({
    components: {},
    setup() {
      const store = useStore()
      const todoItems = ref(store.state.todo.items)

      const newTodo = ref("")
      const isComplete = ref(false)

      const addTodo = () => {
        console.log("clicked")
        store.dispatch("todo/addTodo", {
          done: isComplete.value,
          content: newTodo.value,
          id: Date.now(),
        })
        newTodo.value = ""
        isComplete.value = false
      }

      const removeTodo = (id: number) => {
        console.log(id)
        store.dispatch("todo/removeTodo", id)
      }

      return {
        addTodo,
        newTodo,
        isComplete,
        todoItems,
        removeTodo,
      }
    },
  })
</script>

<style lang="scss"></style>
