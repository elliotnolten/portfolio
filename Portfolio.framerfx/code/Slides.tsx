import * as React from "react"
import { Frame, Page, addPropertyControls, ControlType } from "framer"
import styled from "styled-components"

export function Slides(props) {
    // document.addEventListener("keydown", handleKeyDown, false)
    const { width, height, children } = props
    const [state, setState] = React.useState({
        currentPage: 0,
    })

    function handleKeyDown(event) {
        if (
            event.key == "ArrowRight" &&
            state.currentPage != children.length - 1
        ) {
            setState({ ...state, currentPage: state.currentPage + 1 })
        } else if (event.key == "ArrowLeft" && state.currentPage != 0) {
            setState({ ...state, currentPage: state.currentPage - 1 })
        }
    }

    function previousSlide() {
        if (state.currentPage !== 0) {
            setState({ currentPage: state.currentPage - 1 })
        }
    }

    function nextSlide() {
        if (state.currentPage !== children.length) {
            setState({ currentPage: state.currentPage + 1 })
        }
    }

    return (
        <Frame
            width={width}
            height={height}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <Page width="100%" height="100%" currentPage={state.currentPage}>
                {children}
            </Page>
            <Frame left={0} onTap={previousSlide}>
                {"⬅️"}
            </Frame>
            <Frame right={0} onTap={nextSlide}>
                {"➡️"}
            </Frame>

            <Frame center>{`${state.currentPage + 1}/${
                children.length
            }`}</Frame>
        </Frame>
    )
}

addPropertyControls(Slides, {
    children: {
        type: ControlType.Array,
        propertyControl: { type: ControlType.ComponentInstance },
        title: "Slides",
    },
})

Slides.defaultProps = {
    width: 1920,
    height: 1080,
}
