import { Typography} from "@mui/material"
import {Box} from "@mui/system"
import {formatColor, formatGradient, gradient, neutral} from "../../theme"
import {generateSmoothGradient} from "../../theme/gradient/easing"


export const Values: React.FC = ()=> {
    return(<>
        <Box
            sx={{
                maxWidth: "100%",
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: formatColor(neutral.white),
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent:"center",
                gap: 5,
            }}>
            <Box sx={{
                display:"flex",
                flexWrap:"nowrap",
                flexBasis:"100%",
                width:"100%",
                maxWidth:1250,
                alignItems: "center",
                justifyContent:"center",
                }}>
                <Typography
                    display="inline"
                    variant="h1"
                    sx={{
                        fontSize: "200%",
                        color: formatColor(neutral.black),
                    }}
                >
                    Our Values
                </Typography>
            </Box>
            <Box sx={{flexBasis: "100%"}} />
            <Box
                sx={{
                    flexBasis: "100%",
                    flexWrap: "nowrap",
                    flexDirection:"row",
                    display:"flex",
                    gap: 4,
                    maxWidth:1250,
                    justifyContent:"center",
                }}
            >
                <GradientBox
                    bg={ `linear-gradient(${formatGradient(gradient.gradientPinkBlue)})`}
                    left="1. Accessibility " right="Interest Protocol breaks down financial barriers. Whether banked or bankless, Interest Protocol provides yield for all."/>
                <GradientBox
                    bg={ `linear-gradient(${formatGradient(gradient.gradientPinkBlue2)})`}
                    left="2. Community" right="Community is the bedrock of Interest Protocol. A keep-it-simple approach to concepts and code encourages participation, leading to a vibrant community and an adaptable protocol. "/>
                <GradientBox
                    bg={ `linear-gradient(${formatGradient(gradient.gradientPinkBlue)})`}
                    left="3. Innovation" right="Existing stablecoins and lending markets were stagnant, so we innovated. Interest Protocol and its community will build the future of DeFi."/>
            </Box>
        </Box>
    </>)
}

const GradientBox = (props:{left:string, right:string, bg:string})=>{
    const {left, right, bg} = props
    return (<Box
        sx={{
            padding: 5,
            display:"flex",
            width:"100%",
            maxWidth: 300,
            flexWrap:"wrap",
            borderRadius: 5,
            background:bg,
            gap: 5,
        }}>
        <Box>
            <Typography variant="h3" sx={{color: formatColor(neutral.black)}}>
                {left}
            </Typography>
        </Box>
        <Box>
            <Typography  sx={{color: formatColor(neutral.black)}}>
                {right}
            </Typography>
        </Box>
    </Box>)
}
