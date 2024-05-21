import React, { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";
import { ResponsiveLine } from "@nivo/line";
import { parseISO } from 'date-fns';

const token = "4RrO5LOy0QCOg_eW_R8iiCK-wdNa-0Nxbk8v9yyGN8Zk-o4wCAcT6oqq__eTTdVpJSe61Eeshc0goe2NEAtCjw==";
const org = "Amrita";
const bucket = "pzem"; 
const url = "https://us-east-1-1.aws.cloud2.influxdata.com";

let query = `from(bucket: "pzem")
    |> range(start: -30m)
    |> filter(fn: (r) => r["_measurement"] == "lab_data")
    |> filter(fn: (r) => r["_field"] == "co2_level")
    |> yield(name: "raw")`;

export const InfluxChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let res = [];
        const influxQuery = async () => {
            // Create InfluxDB client
            const queryApi = new InfluxDB({ url, token }).getQueryApi(org);
            // Make query
            await queryApi.queryRows(query, {
                next(row, tableMeta) {
                    const o = tableMeta.toObject(row);
                    // Push rows from query into an array object
                    res.push(o);
                },
                complete() {
                    let finalData = [];

                    for (let i = 0; i < res.length; i++) {
                        let point = {
                            x: parseISO(res[i]["_time"]),
                            y: res[i]["_value"]
                        };
                        finalData.push(point);
                    }

                    // Nivo line chart expects an array of objects with a 'data' key
                    setData([
                        {
                            id: "Co2_level",
                            data: finalData
                        }
                    ]);
                },
                error(error) {
                    console.log("query failed- ", error);
                }
            });
        };

        influxQuery();
    }, []);

    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{
                type: 'time',
                format: '%Y-%m-%dT%H:%M:%S.%LZ',
                useUTC: false,
                precision: 'minute',
            }}
            xFormat="time:%H:%M:%S"
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
            axisLeft={{
                legend: 'co2(ppm)',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            axisBottom={{
                format: '%H:%M:%S',
                tickValues: 'every 5 minutes',
                legend: 'Time',
                legendOffset: -12,
                tickRotation: -45
            }}
            useMesh={true}
            enableSlices="x"
            tooltip={({ point }) => (
                <div
                    style={{
                        background: 'white',
                        padding: '9px 12px',
                        border: '1px solid #ccc',
                    }}
                >
                    <strong>Time:</strong> {point.data.xFormatted}<br />
                    <strong>CO2 Level:</strong> {point.data.yFormatted} ppm
                </div>
            )}
        />
    );
};

export default InfluxChart;
