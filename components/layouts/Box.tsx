import { PropsWithChildren } from "react"

const Box = (props: PropsWithChildren) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Box