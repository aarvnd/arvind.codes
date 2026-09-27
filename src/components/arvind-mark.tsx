export function ArvindMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 320 320"
      aria-hidden
      {...props}
    >
      <path fill="currentColor" d="M64 0h192v64H64zM0 64h64v64H0zM256 64h64v64H256zM0 128h320v64H0zM0 192h64v64H0zM256 192h64v64H256zM0 256h64v64H0zM256 256h64v64H256z" />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 160 160"><path fill="currentColor" d="M32 0h96v32H32zM0 32h32v32H0zM128 32h32v32H128zM0 64h160v32H0zM0 96h32v32H0zM128 96h32v32H128zM0 128h32v32H0zM128 128h32v32H128z"/></svg>`
}
