<template>
<h5>
    <b-icon class="nav-icon" :icon=icon></b-icon>
    {{ title }}
</h5>
</template>

<script>
export default {
    name: "ExperienceTitle",
    props: {
        icon: String,
        title: String
    }
};
</script>
