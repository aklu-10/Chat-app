import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { gray } from "../../constants/color";

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

export const InputBox = styled('input')({
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    padding: '0 3rem',
    borderRadius: '1.5rem',
    backgroundColor: gray
})