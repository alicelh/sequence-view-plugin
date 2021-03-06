const defaultString = `
<svg  version="1.1"
xmlns="http://www.w3.org/2000/svg"
xmlns:parametric="https://parametric-svg.github.io/v0.2"
width="100"
height="100"
glyphtype="RibosomeEntrySite"
soterms="SO:0000139"
parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;pad_after=2;pad_before=2;width=15">

    <path 
    id="rbs" 
    parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)} C{baseline_x+pad_before},{(baseline_y-baseline_offset)-(width/1.5)} {baseline_x+pad_before+width},{(baseline_y-baseline_offset)-(width/1.5)} {baseline_x+pad_before+width},{(baseline_y-baseline_offset)} L{baseline_x+pad_before},{(baseline_y-baseline_offset)}Z" 
    d="M2,25 C2,15.0 17,15.0 17,25 L2,25Z" 
    fill="#966fd6"
    fill-rule="nonzero"
    stroke="black"
    stroke-width="1pt"
    stroke-linejoin="miter"
    stroke-linecap="butt"/>

</svg>`;

const dimensions = [15, 7.5];
const inset = 0;
const link = 5;

export {
    defaultString,
    dimensions,
    inset,
    link
}