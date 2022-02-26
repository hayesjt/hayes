<template>

    <p>
        <b-icon class="nav-icon" :icon=icon></b-icon>
        {{ listtext }}
    </p>

</template>

<script>
export default {
    name: "ListItem",
    props: {
        icon: String,
        listtext: String
    }
};
</script>
