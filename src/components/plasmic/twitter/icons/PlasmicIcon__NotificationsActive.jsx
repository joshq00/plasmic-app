// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function NotificationsActiveIcon(props) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "r-13gxpu9 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
      )}
      fill={"currentcolor"}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.533-.812-4.782-2.347-6.334-1.375-1.393-3.237-2.164-5.242-2.172h-.013c-2.004.008-3.866.78-5.242 2.172-1.534 1.553-2.367 3.802-2.346 6.333.037 4.332-2.02 5.967-2.102 6.03a.751.751 0 00.448 1.353h4.494c.1 2.544 2.188 4.587 4.756 4.587s4.655-2.043 4.756-4.587h4.494a.75.75 0 00.447-1.352zM12 20.408a2.771 2.771 0 01-2.756-2.588h5.512A2.772 2.772 0 0112 20.407z"
        }
      ></path>
    </svg>
  )
}

export default NotificationsActiveIcon
/* prettier-ignore-end */
