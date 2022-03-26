<template>
<div class="top-space-needed border-needed">
    <p>{{ coursetitle }}</p>
    <b-link class="link-format" target="_blank" :href='courselink'>Take it yourself</b-link>
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
