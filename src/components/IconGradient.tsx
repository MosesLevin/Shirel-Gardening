export default function IconGradient({
  component,
  size = 'size-12',
}: {
  component: React.ElementType
  size?: string
}) {
  // in order to put a gradient on SVG we can't use normal gradient in css, we can FILL and SVG with an ID (icon-gradient-id) which we define here
  // set the recieved component prop as a Component again to be used in the return
  const Component = component
  return (
    <>
      {/* fill the prop SVG component with the url gradient set below it */}
      <Component className={`${size} fill-[url(#icon-gradient-id)]`} />
      <svg className="size-0 absolute">
        <linearGradient id="icon-gradient-id">
          <stop offset="0%" stopColor="rgb(34, 78, 65)" />
          <stop offset="50%" stopColor="rgb(186, 216, 107)" />
          <stop offset="100%" stopColor="rgb(34, 78, 65)" />
        </linearGradient>
      </svg>
    </>
  )
}
