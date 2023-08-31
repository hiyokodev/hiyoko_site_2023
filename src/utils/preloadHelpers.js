export function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = resolve
  })
}

export async function preloadImages(images) {
  return Promise.all(images.map((img) => preloadImage(img)))
}
