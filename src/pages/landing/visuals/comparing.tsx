import {FormControl, InputAdornment, InputLabel, OutlinedInput, Paper, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import * as d3 from "d3";
import Slider from '@mui/material/Slider';
import {ChangeEvent, useEffect, useRef, useState} from 'react';

function valuetext(value: number) {
    return `${value}°C`;
}

export const DiscreteSliderSteps: React.FC = () =>{

    const answer = Array(6).fill(0).map((_,x)=>{
        return {value: 20*x, label:(20*x)+"%"}
    })
    const [reserveRatio, setReserveRatio] = useState<number>(
        33,
    );

    const [deposits, setDeposits] = useState<number>(
        10000,
    );


    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        if(newValue as number < 1) {
            newValue = 1
        }
        setReserveRatio(newValue as number);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(isNaN(Number(event.target.value))) {
            return
        }
        let nv = event.target.value === '' ? 0 : Number(event.target.value)
        if(nv <= 0) {
            nv = 1
        }
        if(nv > 1e12) {
            return
        }
        setDeposits(nv)
    };

    return (
        <Paper>
            <Box
                sx={{
                    display:'flex',
                    paddingLeft:3,
                    paddingRight:1,
                    paddingY: 5,
                    gap: 8,
                }}
            >
                <Box sx={{ width: 250, marginTop: 2}}>
                    <Slider
                        aria-label="Target Reserve Ratio"
                        id="slider"
                        defaultValue={33}
                        getAriaValueText={(n)=>{return Math.round(n)+"%"}}
                        valueLabelFormat={(n)=>{return Math.round(n)+"%"}}
                        step={1}
                        min={1}
                        max={99}
                        onChange={handleSliderChange}
                        valueLabelDisplay="on"
                       // marks={answer}
                    />
                    <InputLabel htmlFor="slider" >
                       Target Reserve Ratio
                    </InputLabel>
                </Box>
                <Box sx={{ width: 200}}>
                    <FormControl fullWidth sx={{ marginTop: 3, marginLeft: -1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Total USDC Deposited</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={deposits}
                            onChange={handleChange}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Total USDC Deposited"
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            sx={{
                                MozAppearance: 'textfield',
                                margin:0,
                                WebkitAppearance:'none',
                            }}
                        />
                    </FormControl>
                </Box>
            </Box>
            <Box
                sx={{
                    padding: 5,
                    width: 800,
                }}>
                <BarChart rr={reserveRatio} deposits={deposits}/>
            </Box>
        </Paper>
    );
}



const BarChart = (props:{rr:number, deposits:number})=>{
    const {rr, deposits} = props
    const svgRef = useRef(null);
    var margin = {top: -30, right: 0, bottom: -30, left: 60},
    width = 800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll("*").remove(); // Clear svg content before adding new elements
    const svg = svgEl
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

    // X axis
    useEffect(()=>{
        let data = [
            {group: "IP", value: Math.floor(deposits/(1-rr/100) - deposits)},
            {group: "COMP/AAVE", value: Math.floor(rr*deposits/100)},
        ]
        var x = d3.scaleBand()
        .range([ 0, width ])
        .domain(data.map(function(d) { return d.group; }))
        .padding(0.2);

        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))

        var y = d3.scaleLinear()
        .domain([data[0].value * 1.4,0])
        .range([ 0,height]);
        svg.append("g")
        .attr("class", "myYaxis")
        .call(d3.axisLeft(y));

        var u = svg.selectAll("rect")
        .data(data)
        u.enter()
        .append("rect")
        .merge(u as any)
        .attr("x", (d)=> { return x(d.group) as any; })
        .attr("y", (d)=> { return y(d.value); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.value); })
        .attr("fill", "#69b3a2")
    },[rr, deposits])

    svg.append("text")
    .attr("x", (width / 2))
    .attr("y", 50)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("Total Issuable Loans ($)");
    return <svg
        preserveAspectRatio={"xMaxYMax"} viewBox={`0 0 ${width} ${height}`} ref={svgRef}
    />;
}
