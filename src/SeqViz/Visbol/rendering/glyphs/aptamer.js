const defaultString = `
<svg  version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:parametric="https://parametric-svg.github.io/v0.2"
      width="100"
      height="100"
      glyphtype="Spacer"
      soterms=""
      parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;pad_after=2;pad_before=2;pad_bottom=3;pad_top=3;width=18">

<path
      id="aptamer-path" 
      parametric:d="M{(baseline_x+pad_before)+(width*0.35)},{(baseline_y-baseline_offset)} L{(baseline_x+pad_before)+(width*0.35)},{(baseline_y-baseline_offset)-(width*0.3)} C{(baseline_x+pad_before)+(width*0.0)},{(baseline_y-baseline_offset)-(width*0.4)} {(baseline_x+pad_before)+(width*0.3)},{(baseline_y-baseline_offset)-(width*0.9)} {(baseline_x+pad_before)+(width*0.55)},{(baseline_y-baseline_offset)-(width*0.65)} L{(baseline_x+pad_before)+(width*0.75)},{(baseline_y-baseline_offset)-(width*0.8)} C{(baseline_x+pad_before)+(width*0.72)},{(baseline_y-baseline_offset)-(width*0.95)} {(baseline_x+pad_before)+(width*0.9)},{(baseline_y-baseline_offset)-(width*1.0)} {(baseline_x+pad_before)+(width*0.97)},{(baseline_y-baseline_offset)-(width*0.92)} C{(baseline_x+pad_before)+(width*1.05)},{(baseline_y-baseline_offset)-(width*0.72)} {(baseline_x+pad_before)+(width*0.9)},{(baseline_y-baseline_offset)-(width*0.7)} {(baseline_x+pad_before)+(width*0.82)},{(baseline_y-baseline_offset)-(width*0.68)} L{(baseline_x+pad_before)+(width*0.6)},{(baseline_y-baseline_offset)-(width*0.5)} C{(baseline_x+pad_before)+(width*0.63)},{(baseline_y-baseline_offset)-(width*0.37)} {(baseline_x+pad_before)+(width*0.5)},{(baseline_y-baseline_offset)-(width*0.35)} {(baseline_x+pad_before)+(width*0.5)},{(baseline_y-baseline_offset)-(width*0.3)} L{(baseline_x+pad_before)+(width*0.5)},{(baseline_y-baseline_offset)} Z" 
      d="M8.3,25 L8.3,19.6 C2.0,17.8 7.3999999999999995,8.8 11.9,13.299999999999999 L15.5,10.6 C14.959999999999999,7.900000000000002 18.2,7.0 19.46,8.439999999999998 C20.900000000000002,12.040000000000001 18.2,12.4 16.759999999999998,12.76 L12.799999999999999,16.0 C13.34,18.34 11.0,18.7 11.0,19.6 L11.0,25 Z" 
      fill="rgb(230,230,230)"
        fill-rule="nonzero"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="miter"
        stroke-linecap="butt" />

</svg>`;

const dimensions = [14.44, 17.24];
const inset = 0;

export {
    defaultString,
    dimensions,
    inset,
}