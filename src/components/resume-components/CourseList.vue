<template>
<div class="top-space-needed border-needed">
    <p>{{ coursetitle }}</p>
    <b-button pill class="button-format" :href='courselink'>Take it yourself</b-button>
</div>
</template>

<script>
export default {
    name: "CourseTile",
    props: {
        coursetitle: String,
        courselink: String
    },
};
</script>
