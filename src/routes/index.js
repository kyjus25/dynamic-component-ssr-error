export const get = async () => {
    const component = (await import(`../lib/MyComponent.svelte`)).default;
    return {
        body: {
            component 
        }
    }
}