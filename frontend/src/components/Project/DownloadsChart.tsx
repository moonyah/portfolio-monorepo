import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartData as ChartJSData,
  TooltipItem,
} from 'chart.js';
import { ChartOptions } from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

// Define types for the API response
interface DownloadData {
  day: string;
  downloads: number;
}

interface ApiResponse {
  downloads: DownloadData[];
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    barThickness: number;
  }[];
}

const DownloadsChart: React.FC = () => {
  const [data, setData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        label: 'Downloads',
        data: [],
        backgroundColor: 'rgba(255, 206, 86, 0.2)', // 노란색 계열의 연한 색상
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        barThickness: 10,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date();
        const endDate = today.toISOString().split('T')[0]; // 현재 날짜
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - 30);
        const startDateFormatted = startDate.toISOString().split('T')[0]; // 30일 전 날짜

        // Fetch data from NPM API for the last 30 days
        const response = await fetch(
          `https://api.npmjs.org/downloads/range/${startDateFormatted}:${endDate}/use-scroll-animation`
        );
        const result: ApiResponse = await response.json();

        // Process the result into daily downloads
        const labels = result.downloads.map((item) => item.day);
        const values = result.downloads.map((item) => item.downloads);

        // Update state with processed data
        setData({
          labels: labels,
          datasets: [
            {
              label: 'Downloads',
              data: values,
              backgroundColor: 'rgba(255, 206, 86, 0.2)', // 노란색 계열의 연한 색상
              borderColor: 'rgba(255, 206, 86, 1)',
              borderWidth: 1,
              barThickness: 10,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'bar'>) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="mt-4" style={{ position: 'relative', height: '400px' }}>
      <Bar data={data as ChartJSData<'bar'>} options={options} />
    </div>
  );
};

export default DownloadsChart;
