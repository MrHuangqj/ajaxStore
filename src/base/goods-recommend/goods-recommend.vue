<template>
    <div>
        <header-component/>
        <div>this is template body</div>
        <other-componet/>
    </div>
</template>
<style>
    body {
        background-color: #ff0000;
    }
</style>
<script>
    import HeaderComponent from './components/header.vue'
    import OtherComponent from './components/other.vue'

    export default {
        data() {
            return {
                msg: 'hello vue'
            }
        },
        components: {
            'other-componet': OtherComponent,
            HeaderComponent,
        }
    }
</script>
