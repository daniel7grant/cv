<script lang="ts">
    import { onMount } from 'svelte';
    import type { Language } from '../types';
    import LangBlob from './LangBlob.svelte';

    interface Props {
        languages: Language[];
    }

    const { languages }: Props = $props();

    const offset = Math.PI / 2;
    let radius = $state(300);
    let activeIndex = $state<number>();

    const activateLanguage = (index: number) => {
        activeIndex = index;
    };

    const deactivateLanguage = () => {
        activeIndex = undefined;
    };

    onMount(() => {
        if (window.matchMedia('(min-width: 800px) and (min-height: 800px)').matches) {
            radius = 300;
        } else {
            radius = Math.min(window.innerWidth, window.innerHeight) * 0.5 * 0.7;
        }

        document.addEventListener('click', () => {
            deactivateLanguage();
        });
    });
</script>

<h2 class:is-active={activeIndex !== undefined}>Skills</h2>
{#each languages as language, index}
    <LangBlob
        {language}
        x={radius * Math.cos((index * 2 * Math.PI) / languages.length + offset)}
        y={-radius * Math.sin((index * 2 * Math.PI) / languages.length + offset)}
        isActive={activeIndex === index}
        isOpen={activeIndex !== undefined}
        onClick={() => activateLanguage(index)}
        onClose={() => deactivateLanguage()}
    />
{/each}

<style lang="scss">
    @use '../style/variables.scss' as *;
    @use '../style/mixins.scss' as *;

    h2 {
        position: relative;
        top: 50vh;
        margin: 0;
        transition: $trans-short;
        margin-top: -0.5 * $img-size;

        &.is-active {
            transform: translateY(-$lang-radius * 0.75);
            transition: $trans-short;
        }
    }
</style>
