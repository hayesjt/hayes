<template>
<b-card-group deck class="bottom-space-needed">
    <b-card :header=header header-tag="header" :title=title>
        <b-card-text>{{ cardtext }}</b-card-text>
        <b-button :href=link1 class="button-space yellow">Quick Read</b-button>
        <b-button :href=link2 class="button-space yellow">Long Read</b-button>
        <b-button :href=link3 class="button-space yellow">Video</b-button>
        <b-button :href=link4 class="button-space yellow">Course</b-button>
    </b-card>
</b-card-group>
</template>

<script>
export default {
    name: "DevResourceCard",
    props: {
        header: String,
        title: String,
        cardtext: String,
        link1: String,
        link2: String,
        link3: String,
        link4: String
    },
    components: {},
};
</script>
