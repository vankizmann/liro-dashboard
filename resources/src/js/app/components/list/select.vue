<template>

<div class="app-list-select">
    <!-- Label start -->
   <label class="uk-checkbox-label">
       <input type="checkbox" class="uk-checkbox" :value="value" :checked="config.selected.indexOf(value) != -1" @input="selectItem">
       <span v-if="label" v-html="label"></span>
    </label>
    <!-- Label end -->
</div>

</template>
<script>

export default {

    inject: [
        'list'
    ],

    computed: {

        config: function () {
            return this.list.library.config.select;
        }

    },

    props: {

        value: {
            required: true,
            type: Number
        },

        label: {
            default: '',
            type: String
        }

    },

    methods: {

        selectItem: function () {
            this.list.library.toggleSelectData(this.value);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-list-select', this.default);
}

</script>
