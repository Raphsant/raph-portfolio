// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        pageTransition: {
            name: 'slide', mode: 'out-in'
        }
    },
    modules: [
        '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-icon', '@vueuse/nuxt', '@formkit/auto-animate/nuxt'
    ],
    //@ts-ignore
    googleFonts: {
        download: true,
        inject: true,
        families: {
            Lato: [100, 300],
        }
    }
})
