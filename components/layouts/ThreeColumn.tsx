import { PropsWithChildren } from "react"

const ThreeColumn = (props: PropsWithChildren) => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
      {props.children}
    </div>
  )
}

export default ThreeColumn