<script lang="ts">
    interface Props {
        name: string;
        icon: string;
    }

    const { name, icon } = $props();
</script>

<li>
    <figure>
        <img class="icon" src={icon} alt={name} title={name} />
        <figcaption>{name}</figcaption>
    </figure>
</li>
