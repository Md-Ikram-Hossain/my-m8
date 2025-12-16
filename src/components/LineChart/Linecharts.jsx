import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Linecharts = () => {

    const studentMarks = [
        { student: "Student 1", math: 98, physics: 72, chemistry: 55 },
        { student: "Student 2", math: 85, physics: 50, chemistry: 82 },
        { student: "Student 3", math: 67, physics: 35, chemistry: 70 },
        { student: "Student 4", math: 50, physics: 88, chemistry: 92 },
        { student: "Student 5", math: 72, physics: 20, chemistry: 58 },
        { student: "Student 6", math: 88, physics: 85, chemistry: 37 },
        { student: "Student 7", math: 100, physics: 58, chemistry: 62 },
        { student: "Student 8", math: 99, physics: 82, chemistry: 94 },
        { student: "Student 9", math: 50, physics: 68, chemistry: 91 },
        { student: "Student 10", math: 82, physics: 48, chemistry: 70 }
    ];



    return (
        <div>
            <LineChart width={800} height={400} data={studentMarks}>
                <XAxis dataKey="student"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={'physics'} stroke='yellow'></Line>
                <Line dataKey="chemistry" stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default Linecharts;
