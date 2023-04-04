import { ScatterChart, Scatter, XAxis, 
    YAxis, CartesianGrid, Cell } from 'recharts';

export function ScatterPlot({value, city, attribute}) {

    return (
        <ScatterChart width={250} height={200}>
                <CartesianGrid />
            <XAxis type="number" dataKey= {value} />
            <YAxis type="number" dataKey= {city} />
            <Scatter data={attribute} fill="green" />
        </ScatterChart>
    )
};