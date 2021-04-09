import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const StyledH3 = styled.h3`
    display: inline;
`

export default function HeaderTitle(props) {
    return (
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <StyledH3>{ props.children }</StyledH3>
        </Link>
    )
}