<template>
<b-card :title=title>
<b-card-img :src="require('@/assets/' + img)" class="image-padding"/>
    <b-card-text>
        {{ cardtext }}
    </b-card-text>
</b-card>
</template>

<script>
export default {
    name: "VolunteerExamples",
    props: {
        img: String,
        title: String,
        cardtext: String,
    },
    components: {},
};
</script>
