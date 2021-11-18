// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cmxbiR2DDRv5pf3jozTs35
// Component: zQn5MXmA4Iq4
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_twitter.module.css" // plasmic-import: cmxbiR2DDRv5pf3jozTs35/projectcss
import * as sty from "./PlasmicAvatar.module.css" // plasmic-import: zQn5MXmA4Iq4/css
import image22R4JEb5W3Yh7 from "./images/image2.png" // plasmic-import: 2R4JEb5w3Yh7/picture

export const PlasmicAvatar__VariantProps = new Array("options")

export const PlasmicAvatar__ArgProps = new Array("children")

function PlasmicAvatar__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__yxiAb)}
            displayHeight={"49px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"49px"}
            src={{
              src: image22R4JEb5W3Yh7,
              fullWidth: 225,
              fullHeight: 223,
              aspectRatio: undefined,
            }}
          />
        ),

        value: args.children,
      })}
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAvatar__ArgProps,
      internalVariantPropNames: PlasmicAvatar__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicAvatar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicAvatar"
  } else {
    func.displayName = `PlasmicAvatar.${nodeName}`
  }
  return func
}

export const PlasmicAvatar = Object.assign(
  // Top-level PlasmicAvatar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicAvatar
    internalVariantProps: PlasmicAvatar__VariantProps,
    internalArgProps: PlasmicAvatar__ArgProps,
  }
)

export default PlasmicAvatar
/* prettier-ignore-end */