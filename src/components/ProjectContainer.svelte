<script lang="ts">
    import type { Project } from '../types';
    import ProjectCard from './ProjectCard.svelte';

    interface Props {
        projects: Project[];
    }

    const { projects }: Props = $props();

    let activeIndex = $state<number>();
</script>

<ul id="slide-projects-list">
    {#each projects as project, index}
        <ProjectCard
            {...project}
            isActive={index === activeIndex}
            onClick={() => {
                if (activeIndex !== index) {
                    activeIndex = index;
                } else {
                    activeIndex = undefined;
                }
            }}
        />
    {/each}
</ul>

<style lang="scss">
    @use '../style/variables.scss' as *;
    @use '../style/mixins.scss' as *;

    ul#slide-projects-list {
        @include if-mobile-tablet {
            width: $card-width;
            height: 0.75 * $card-width;
        }
        @include if-desktop {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }
</style>
