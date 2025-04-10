import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";

export const VisuallyHidden = styled('input')({
    position: 'absolute',
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    border: '0',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
})

export const Link = styled(LinkComponent)({
    textDecoration: 'none',
    color: 'inherit',
    "&:hover": {
        background: 'red'
    }
})