import {
    ScatterChart, Scatter, XAxis,
    YAxis, CartesianGrid, Cell, ResponsiveContainer, Tooltip
} from 'recharts';

export function ScatterPlot({ attribute, properties }) {

    const areaData = generateAreasData(attribute, properties)


    return areaData.map((area) => <AreaScatterPlot name={area.area} data={area.data} />)

};

function AreaScatterPlot({ name, data }) {
    return <ResponsiveContainer width="100%" height={60}>
        <ScatterChart
            width={800}
            height={60}
            margin={{
                top: 10,
                right: 0,
                bottom: 0,
                left: 0,
            }}
        >
            <XAxis
                type="category"
                dataKey="hour"
                name="hour"
                interval={0}
                tick={{ fontSize: 0 }}
                tickLine={{ transform: 'translate(0, -6)' }}
            />
            <YAxis
                type="number"
                dataKey="index"
                height={10}
                width={80}
                tick={false}
                tickLine={false}
                axisLine={false}
                label={{ value: name, position: 'insideRight' }}
            />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
            <Scatter data={data} fill="#8884d8" />
        </ScatterChart>
    </ResponsiveContainer>
}

const areas = ["Central", "Chappy", "Downtown", "East Chop", "Katama", "Lagoon",
    "Lagoon/Harbor", "Lambert's Cove", "North", "Sengy", "South", "South Shore",
    "State Beach", "Tashmoo", "West Chop"];

function generateAreasData(attribute, properties) {
    return areas.map(area => { return { area, data: mapAreaData(area, attribute, properties) } })
}


function mapAreaData(area, attribute, properties) {
    const areaProperties = properties.filter(property => property.area === area);
    return areaProperties.map((property) => { return property[attribute] })
}