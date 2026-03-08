export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    console.log(html)
    html.head.push(`<meta name="ngabuburit" content="Track your ramadhan daily" />`)
  })
  nitroApp.hooks.hook('render:response', (response, { event }) => { console.log(response) })
})
