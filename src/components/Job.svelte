<script lang="ts">
    import type { Job, WithContent } from '../types';
    import Icon from './Icon.svelte';
    import ToUrl from './ToUrl.svelte';

    interface Props {
        job: WithContent<Job>;
        isActive: boolean;
        onClick: () => void;
    }

    const { job, isActive, onClick }: Props = $props();
</script>

<li>
    <div class="career-years">
        <span>{job.years}</span>
    </div>
    <div class="career-container">
        <div class="career-header">
            <ToUrl name={job.name} url={job.url} />
            <h3>{job.name}</h3>
            <small class="position">
                <span>{job.position}</span>
                <ul class="career-langs">
                    {#each job.languages as language}
                        <Icon {...language} />
                    {/each}
                </ul>
            </small>
        </div>
        <div class="career-body">
            <div class="career-body-container" class:is-active={isActive}>
                {@html job.description}
            </div>
            <button type="button" class="career-more" onclick={onClick}>
                {#if isActive}
                    close
                {:else}
                    more
                {/if}
            </button>
        </div>
        <ul class="career-langs">
            {#each job.languages as language}
                <Icon {...language} />
            {/each}
        </ul>
    </div>
</li>

<style lang="scss">
    @use '../style/variables.scss' as *;
    @use '../style/mixins.scss' as *;

    li {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-height: $career-height;
        padding: 0 0.4 * $career-height 0.2 * $career-height 0.4 * $career-height;

        @include if-mobile-tablet {
            flex-direction: row;
            padding: 0 0 0.2 * $career-height 0;
        }

        &:last-child {
            padding-bottom: 0;
        }

        .career-years {
            font-size: 1.4 * $h3-size;
            color: $acolor;
            opacity: 60%;

            @include if-mobile-tablet {
                font-size: 0.9 * $h3-size;
                padding-right: 2 * $spacing;
                min-width: 80px;
            }
        }

        .career-header {
            position: relative;

            @include if-mobile-tablet {
                margin-bottom: 0.5 * $spacing;
            }

            @include if-desktop {
                margin-bottom: 1.5 * $spacing;
            }

            h3 {
                @include if-mobile {
                    font-size: 0.8 * $h3-size;
                }
            }

            small {
                color: $acolor;
                text-transform: uppercase;

                &.position {
                    display: flex;
                    align-items: center;

                    ul.career-langs {
                        display: none;
                        margin-left: auto;

                        @include if-mobile-tablet {
                            display: flex;
                        }

                        @include if-small-height {
                            display: none;
                        }

                        :global(li) {
                            :global(img) {
                                margin: 0 $spacing;
                                width: 1.5rem;
                                height: 1.5rem;
                            }

                            :global(figcaption) {
                                display: none;
                            }
                        }
                    }
                }
            }

            :global(a.to-url) {
                position: absolute;
                fill: $acolor;
                top: 0;
                right: 0;
            }
        }

        .career-body {
            @include if-desktop {
                margin-bottom: 2 * $spacing;
            }

            .career-body-container {
                @include if-mobile-tablet {
                    max-height: 0;
                    overflow-y: hidden;
                    transition: 0.3s;

                    &.is-active {
                        max-height: 5rem;
                    }

                    :global(p:last-child) {
                        margin-bottom: $spacing;
                    }
                }
            }

            .career-more {
                background-color: transparent;
                border: none;
                color: $fgcolor;
                padding: 0;
                text-decoration: underline;

                @include if-desktop {
                    display: none;
                }
            }
        }

        ul.career-langs {
            display: flex;
            margin-left: auto;

            @include if-mobile-tablet {
                display: none;
            }

            :global(li img) {
                margin: 0 $spacing;
                width: 3rem;
                height: 3rem;
            }
        }
    }
</style>
