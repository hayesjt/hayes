<template>
<b-card-group deck>
    <b-card :header=header header-tag="header" :footer=footer footer-tag="footer" :title=title>
        <b-card-text>{{ cardtext }}</b-card-text>
        <b-button :href=gitlink variant="primary">Git Repository</b-button>
    </b-card>
</b-card-group>
</template>

<script>
export default {
    name: "ProjectTile",
    props: {
        header: String,
        footer: String,
        title: String,
        cardtext: String,
        gitlink: String,
    },
    components: {},
};
</script>
