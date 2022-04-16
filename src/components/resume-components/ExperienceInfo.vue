<template>
<b-container>

    <b-row class="top-space-needed border-needed">
        <b-col sm="6" lg="12">
            <p><em>{{ time }}</em></p>
            <p>{{ summary }}</p>
        </b-col>
        <b-col sm="6" lg="12">
            <list-item :icon='icon1' :listtext='listitem1' />
            <list-item :icon='icon2' :listtext='listitem2' />
            <list-item :icon='icon3' :listtext='listitem3' />
            <list-item :icon='icon4' :listtext='listitem4' />
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import ListItem from '@/components/universal-components/ListItem.vue';

export default {
    name: "ExperienceInfo",
    components: {
        ListItem,
    }, 
    props: {
        time: String,
        summary: String,
        icon1: String,
        listitem1: String,
        icon2: String,
        listitem2: String,
        icon3: String,
        listitem3: String,
        icon4: String,
        listitem4: String,
    }
};
</script>
