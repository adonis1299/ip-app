import { Typography, useTheme } from "@mui/material"
import {Box} from "@mui/system"
import {formatColor, formatGradient, gradient, neutral} from "../../theme"
import {generateSmoothGradient} from "../../theme/gradient/easing"


export const Cards: React.FC = ()=> {
    const theme = useTheme()
    return(<>
        <Box
            sx={{
                maxWidth: "100%",
                paddingTop: 10,
                paddingLeft: 10,
                paddingBottom: 10,
                backgroundColor: formatColor(neutral.white),
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent:"center",
                gap: {xs: 2, md: 5},
                [theme.breakpoints.down('md')]: {
                    paddingX: 2
                }
            }}>
            <Box sx={{
                display:"flex",
                flexWrap: "nowrap",
                flexBasis:"100%",
                flexDirection: {xs: 'column', md: 'row'},
                columnGap: 2,
                width:"100%",
                maxWidth:1250,
                alignItems: "left",
                justifyContent:"left",
                marginBottom: {xs: 2, md: 0}
                }}>
                <Typography
                    display="inline"
                    variant="h1"
                    sx={{
                        fontSize: "200%",
                        color: formatColor(neutral.black),
                    }}
                >
                    Lend, borrow, earn yield.
                </Typography>
                <Typography
                    display="inline"
                    variant="h1"
                    sx={{
                        fontSize: "200%",
                        color: formatColor(neutral.gray2),
                    }}
                >
                    Save Simply.
                </Typography>
            </Box>
            <Box
                sx={{
                    flexBasis: "100%",
                }}
            />
            <GradientBox
                bg={ `linear-gradient(${formatGradient(gradient.gradientPinkBlue)})`}
                left="Scalable" right="Build to be the leading lending market"/>
            <GradientBox
                bg={ `linear-gradient(${formatGradient(gradient.gradientPinkBlue2)})`}
                left="Stable" right="Thrives in volatile markets"/>
            <GradientBox
                bg={ `linear-gradient(${formatGradient(gradient.gradientPinkBlue)})`}
                left="Gas Efficient" right="No claiming neccesary"/>
        </Box>
    </>)
}

const GradientBox = (props:{left:string, right:string, bg:string})=>{
    const {left, right, bg} = props
    const theme = useTheme()
    return (<Box
        sx={{
            paddingX: {xs: 2, md: 6},
            paddingY:{xs: 4, md: 8},
            marginRight: {xs: 0, md: 8},
            flexBasis: "100%",
            display:"flex",
            alignItems: 'center',
            width:"100%",
            maxWidth:1250,
            background:bg,
            borderRadius: 5,
            columnGap: 5
        }}>
        <Box >
            <Typography variant="h1" sx={{color: formatColor(neutral.white), fontSize: "200%"}}>
                {left}
            </Typography>
        </Box>
        <Box ml="auto">
            <Typography  sx={{color: formatColor(neutral.white), fontSize: "100%", textAlign: 'right', fontWeight: 600}}>
                {right}
            </Typography>
        </Box>
    </Box>)
}
