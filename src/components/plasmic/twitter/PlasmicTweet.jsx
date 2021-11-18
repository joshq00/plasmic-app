// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cmxbiR2DDRv5pf3jozTs35
// Component: DQbVzEvSWEa
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import Avatar from "../../Avatar" // plasmic-import: zQn5MXmA4Iq4/component
import ActionButton from "../../ActionButton" // plasmic-import: pbv-Mbq112w/component
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_twitter.module.css" // plasmic-import: cmxbiR2DDRv5pf3jozTs35/projectcss
import * as sty from "./PlasmicTweet.module.css" // plasmic-import: DQbVzEvSWEa/css
import IconIcon from "./icons/PlasmicIcon__Icon" // plasmic-import: gqQKSbkcgqzC/icon
import ReplyIcon from "./icons/PlasmicIcon__Reply" // plasmic-import: vBJ7i4cXFTFW/icon
import RetweetIcon from "./icons/PlasmicIcon__Retweet" // plasmic-import: SqDqlULiZBNo/icon
import LikeIcon from "./icons/PlasmicIcon__Like" // plasmic-import: u2O4Wx-ofVmX/icon
import ShareIcon from "./icons/PlasmicIcon__Share" // plasmic-import: 3BKF_ch9ozh9/icon
import image3OkxxA1Lcmjnf from "./images/image3.png" // plasmic-import: okxxA1Lcmjnf/picture

export const PlasmicTweet__VariantProps = new Array("options")

export const PlasmicTweet__ArgProps = new Array(
  "name",
  "username",
  "children",
  "photo",
  "timestamp"
)

function PlasmicTweet__RenderFunc(props) {
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.freeBox__ng2QU
        )}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox__dJ8He
          )}
        >
          <Avatar
            data-plasmic-name={"avatar"}
            data-plasmic-override={overrides.avatar}
            className={classNames("__wab_instance", sty.avatar)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___3Nh98)}
                  displayHeight={"49px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"49px"}
                  src={{
                    src: image3OkxxA1Lcmjnf,
                    fullWidth: 400,
                    fullHeight: 400,
                    aspectRatio: undefined,
                  }}
                />
              ),

              value: args.photo,
            })}
          </Avatar>

          {(hasVariant(variants, "options", "hasReplies") ? true : false) ? (
            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__xvHw0,
                {
                  [sty.freeBox__options_hasReplies__xvHw0UoRXc]: hasVariant(
                    variants,
                    "options",
                    "hasReplies"
                  ),
                }
              )}
            />
          ) : null}
        </p.Stack>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.freeBox__rz2X
        )}
      >
        <div
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox___2Sf0V
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox__llo8N
            )}
          >
            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__t1Rpw
              )}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__hdORy
                )}
              >
                {p.renderPlasmicSlot({
                  defaultContents: "Dan Abramov",
                  value: args.name,
                  className: classNames(sty.slotTargetName),
                })}
              </div>
            </div>

            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__zKnF
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents: "@dan_abramov",
                value: args.username,
                className: classNames(sty.slotTargetUsername),
              })}
            </div>

            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                defaultcss.__wab_text,
                sty.text
              )}
            >
              {"·"}
            </div>

            {p.renderPlasmicSlot({
              defaultContents: "9h",
              value: args.timestamp,
              className: classNames(sty.slotTargetTimestamp),
            })}
          </p.Stack>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__m2Ip7)}
            slot={"25"}
          >
            <IconIcon
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.svg__knl8H
              )}
              role={"img"}
            />
          </ActionButton>
        </div>

        <div
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox__aRqQ
          )}
        >
          {p.renderPlasmicSlot({
            defaultContents:
              "Is anyone intentionally using multiple versions of React? (Yeah I know this is generally frowned upon but sometimes you have no other good options for legacy reasons.) I want to know how your build is set up to handle code sharing.",
            value: args.children,
          })}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox__jg9Mv
          )}
        >
          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__bjRa8)}
            options={["labeled"]}
            slot={"25"}
          >
            <ReplyIcon
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.svg__qq5SU
              )}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__wpDNy)}
            options={["labeled"]}
            slot={"25"}
          >
            <RetweetIcon
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.svg__iH4Pb
              )}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__zSZwT)}
            options={["labeled"]}
            slot={"25"}
          >
            <LikeIcon
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.svg__vg5Q4
              )}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__byS3)}
            slot={"25"}
          >
            <ShareIcon
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.svg__xcdnE
              )}
              role={"img"}
            />
          </ActionButton>
        </div>
      </p.Stack>
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root", "avatar", "text"],
  avatar: ["avatar"],
  text: ["text"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTweet__ArgProps,
      internalVariantPropNames: PlasmicTweet__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicTweet__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicTweet"
  } else {
    func.displayName = `PlasmicTweet.${nodeName}`
  }
  return func
}

export const PlasmicTweet = Object.assign(
  // Top-level PlasmicTweet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicTweet
    internalVariantProps: PlasmicTweet__VariantProps,
    internalArgProps: PlasmicTweet__ArgProps,
  }
)

export default PlasmicTweet
/* prettier-ignore-end */
