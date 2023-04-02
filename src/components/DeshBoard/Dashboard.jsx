import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const marksArray =[
        {
          "id": 1,
          "name": "Alice",
          "physics": 80,
          "chemistry": 70,
          "match_value": 75
        },
        {
          "id": 2,
          "name": "Bob",
          "physics": 70,
          "chemistry": 90,
          "match_value": 80
        },
        {
          "id": 3,
          "name": "Charlie",
          "physics": 75,
          "chemistry": 80,
          "match_value": 77.5
        },
        {
          "id": 4,
          "name": "Dave",
          "physics": 90,
          "chemistry": 85,
          "match_value": 87.5
        },
        {
          "id": 5,
          "name": "Eve",
          "physics": 85,
          "chemistry": 75,
          "match_value": 80
        },
        {
          "id": 6,
          "name": "Frank",
          "physics": 70,
          "chemistry": 60,
          "match_value": 65
        },
        {
          "id": 7,
          "name": "Grace",
          "physics": 75,
          "chemistry": 90,
          "match_value": 82.5
        },
        {
          "id": 8,
          "name": "Henry",
          "physics": 60,
          "chemistry": 70,
          "match_value": 65
        },
        {
          "id": 9,
          "name": "Isabel",
          "physics": 85,
          "chemistry": 80,
          "match_value": 82.5
        },
        {
          "id": 10,
          "name": "Jack",
          "physics": 80,
          "chemistry": 85,
          "match_value": 82.5
        },
        {
          "id": 11,
          "name": "Karen",
          "physics": 90,
          "chemistry": 70,
          "match_value": 80
        },
        {
            "id": 12,
            "name": "johnson",
            "physics": 85,
            "chemistry": 76,
            "match_value": 88
        }
    ];

      
    return (
        <div>
            <LineChart 
            width={500}
            height={300}
            data={marksArray}            
            >
            <Line  dataKey="physics"></Line>
            <Line stroke="#8884d8" dataKey="match_value"></Line>
            <XAxis dataKey="name" />
         <YAxis></YAxis>
         <Tooltip />
         <Legend />
            </LineChart>
        </div>
    );
};

export default Dashboard;
