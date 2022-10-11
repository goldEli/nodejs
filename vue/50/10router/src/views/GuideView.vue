<template>
    <div>
        <h1>这是指南</h1>
        <button @click="jumpToAPI">跳转到api参考</button>
        <button @click="jumpToAPI">返回上一页</button>
    </div>
</template>
<script>
export default {
    methods: {
        jumpToAPI: function() {
            this.$router.push("/api")
            // 返回上一页
        },
        goBack: function() {
            this.$router.go(-1)
        }
    },
}
</script>