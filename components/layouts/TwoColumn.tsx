import { PropsWithChildren } from "react"

const TwoColumn = (props: PropsWithChildren) => {
  return (
    <div className="grid lg:grid-cols-2">
      {props.children}
    </div>
  )
}

export default TwoColumn