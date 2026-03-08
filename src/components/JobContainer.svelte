<script lang="ts">
    import type { Job as JobType, WithContent } from '../types';
    import Job from './Job.svelte';

    interface Props {
        careers: WithContent<JobType>[];
    }

    const { careers }: Props = $props();
    let activeIndex = $state<number>();
</script>

<ol class="career-timeline">
    {#each careers as job, index}
        <Job
            {job}
            isActive={activeIndex === index}
            onClick={() => {
                if (activeIndex !== index) {
                    activeIndex = index;
                } else {
                    activeIndex = undefined;
                }
            }}
        />
    {/each}
</ol>

<style lang="scss">
    @use '../style/variables.scss' as *;
    @use '../style/mixins.scss' as *;

    ol.career-timeline {
        display: flex;

        @include if-desktop {
            margin-top: 0.25 * $h1-size;
        }

        @include if-mobile-tablet {
            flex-direction: column;
        }
    }
</style>
