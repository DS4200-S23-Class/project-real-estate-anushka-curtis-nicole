import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

export function ScatterPlot({ attribute, properties, propertyId }) {
  const townData = generateAreasData(attribute, properties);

  return townData.map((town) => (
    // eslint-disable-next-line react/jsx-key
    <AreaScatterPlot
      key={town.town}
      name={town.town}
      data={town.data}
      propertyId={propertyId}
    />
  ));
}

function AreaScatterPlot({ name, data, propertyId }) {
  return (
    <ResponsiveContainer width="100%" height={100}>
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
          dataKey="attributeValue"
          name="attributeValue"
          interval={0}
          tick={{ fontSize: 0 }}
          tickLine={{ transform: "translate(0, -6)" }}
          label={{ value: "attributeValue", position: "bottom" }}
        />
        <YAxis
          type="number"
          dataKey="index"
          height={80}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: name, position: "insideRight" }}
        />
        <Tooltip label={"Value"} cursor={{ strokeDasharray: "3 3" }} />
        <Scatter data={data} fill="#8884d8">
          {data.map((entry, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                fill={
                  Number(entry.propertyId) === Number(propertyId)
                    ? "red"
                    : "blue"
                }
              />
            );
          })}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
}

const towns = [
  "Aquinnah",
  "Chilmark",
  "Edgartown",
  "Oak Bluffs",
  "Vineyard Haven",
  "West Tisbury",
];
const attributes = ["price", "beds", "baths", "sqaureFeet", "lotSize"];

function generateAreasData(attribute, properties) {
  return towns.map((town) => {
    return { town: town, data: mapAreaData(town, attribute, properties) };
  });
}

function mapAreaData(town, attribute, properties) {
  const areaProperties = properties.filter(
    (property) => property.town === town
  );
  return areaProperties.map((property, index) => {
    return {
      attributeValue: parseFloat(property[attribute]),
      propertyId: property.id,
      index: 10,
    };
  });
}
