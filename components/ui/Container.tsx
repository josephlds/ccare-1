import React, { PropsWithChildren } from "react";

const Container = (props: PropsWithChildren) => {
  return (
    <div className='container px-5 mx-auto max-w'>
        {props.children}
    </div>
  )
}

export default Container