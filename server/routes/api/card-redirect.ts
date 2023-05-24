export default defineEventHandler((event) => {
  console.log( "ma come se fah")
  return sendRedirect(event, '/', 301)
})