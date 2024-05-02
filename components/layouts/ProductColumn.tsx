import { PropsWithChildren } from "react"

const FourColumn = (props: PropsWithChildren) => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4">
      {props.children}
    </div>
  )
}

export default FourColumn