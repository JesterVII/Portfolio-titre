import clsx from "clsx"
import { PropsWithChildren } from "react"

export const Section = (props: PropsWithChildren<{className?:string}>) => {
    return (
        <section className={clsx("max-w-3xl px-1 m-auto", props.className)}>{props.children}</section>
    )
} 