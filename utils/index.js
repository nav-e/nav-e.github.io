import catchLinks from 'catch-links'

// update internal links to use router
export function fixLinks (ref, router) {
  catchLinks(ref, (href) => {
    const ext = href.split('.').pop().toLowerCase()
    if (['zip', 'png', 'jpg', 'txt', 'md'].indexOf(ext) === -1) {
      router.push(href)
    }
  })
}
