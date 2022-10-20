<script setup lang="ts">
import InputArea from "../components/InputArea.vue"
import ListArea from "../components/ListArea.vue"
import StatusArea from "../components/StatusArea.vue"
import {onMounted} from "vue"
import {useRouter} from "vue-router"

const router = useRouter()
onMounted(() => {
    console.log(router)
})

</script>

<template>
<div>
    <input-area></input-area>
    <list-area></list-area>
    <status-area></status-area>
</div>
</template>
