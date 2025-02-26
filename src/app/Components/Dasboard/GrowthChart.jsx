'use client';
import { ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer , Cell } from 'recharts';
import { Bar, Line } from 'recharts';

const data = [
    { day: '1', bar: 30, line: 20, color: '#8884d8' },
    { day: '2', bar: 40, line: 30, color: '#82ca9d' },
    { day: '3', bar: 50, line: 50, color: '#ffc658' },
    { day: '4', bar: 60, line: 60, color: '#ff7300' },
    { day: '5', bar: 70, line: 80, color: '#d0ed57' },
    { day: '6', bar: 80, line: 90, color: '#a4de6c' },
    { day: '7', bar: 55, line: 70, color: '#d084d8' },
    { day: '8', bar: 45, line: 60, color: '#ff6666' },
    { day: '9', bar: 35, line: 50, color: '#7d7dff' },
    { day: '10', bar: 65, line: 75, color: '#ffcc00' },
    { day: '11', bar: 75, line: 85, color: '#33ccff' },
    { day: '12', bar: 85, line: 95, color: '#ff9966' },
    { day: '13', bar: 90, line: 100, color: '#99cc33' },
    { day: '14', bar: 100, line: 110, color: '#cc6699' },
    { day: '15', bar: 110, line: 120, color: '#6699ff' },
    { day: '16', bar: 115, line: 130, color: '#ff5050' },
    { day: '17', bar: 120, line: 140, color: '#99ccff' },
    { day: '18', bar: 100, line: 125, color: '#ffcc66' },
    { day: '19', bar: 90, line: 115, color: '#66cccc' },
    { day: '20', bar: 110, line: 130, color: '#ff9999' },
    { day: '21', bar: 120, line: 140, color: '#cccc66' },
    { day: '22', bar: 130, line: 150, color: '#cc6699' },
    { day: '23', bar: 135, line: 160, color: '#99ccff' },
    { day: '24', bar: 140, line: 170, color: '#ffcc00' },
    { day: '25', bar: 145, line: 180, color: '#33ccff' },
    { day: '26', bar: 150, line: 190, color: '#ff9966' },
    { day: '27', bar: 155, line: 200, color: '#99cc33' },
    { day: '28', bar: 160, line: 210, color: '#cc6699' },
];

export default function GrowthChart() {
    return (
        <div className="bg-white shadow rounded-[20px] w-full max-w-2xl border p-4">
            <h2 className="text-xl font-bold border-b border-b-[#C2C2C2] mt-[14px] pb-[8px] px-6">Company Growth</h2>
            <p className="text-blue-500 px-6">February 2024</p>
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={data} margin={{ left: 50 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis type="number" tickFormatter={(tick) => {
                        if (tick >= 0 && tick < 50) return 'Week 1';
                        if (tick >= 50 && tick < 100) return 'Week 2';
                        if (tick >= 100 && tick < 150) return 'Week 3';
                        if (tick >= 150) return 'Week 4';
                        return tick;
                    }} />
                    <Tooltip />
                    <Bar dataKey="bar">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                    <Line type="monotone" dataKey="line" stroke="#199FB1" dot={{ r: 4 }} />
                </ComposedChart>
            </ResponsiveContainer>
            <div className="flex gap-2 justify-between items-center p-4">
                <button className="button-primary">Month</button>
                <button className='button-secondary'>Year</button>
                <button className='button-secondary'>2 Year</button>
                <button className='button-secondary'>3 Year</button>
            </div>
        </div>
    );
}