<template>
    <div class="container"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from '../utils/axios';

export default defineComponent({
    setup() {
        axios
            .get('/xxx/xxx')
            .then(() => {})
            .catch(() => {});
    }
});
</script>
<style lang="scss">
.container {
    width: 100px;
    height: 100px;
    background-color: yellow;
}
</style>
