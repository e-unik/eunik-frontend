import { useNavigate } from "react-router";
import Box from "../../component/ue-box/Box";
import Button from "../../component/ue-button/Button";

export default function Error({
    title,
    titleSize = '8em',
    comment,
    commentSize = '1.5em',
    buttonTitle,
    toPath = '/'
}) {
    const navigate = useNavigate();
    return (
        <Box style={{ gap: '2em' }} fullHeight direction='column'>
            <Box style={{ gap: '0em' }} direction='column'>
                <div style={{ fontSize: titleSize }}>{title}</div>
                <div style={{ fontSize: commentSize }}>{comment}</div>
            </Box>
            {buttonTitle ? <Button fullWidth title={buttonTitle} onClick={() => navigate(toPath)} /> : <></>}
        </Box>
    )
}