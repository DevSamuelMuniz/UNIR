"use cliente"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';

const data = [
  { month: 'Jan', withSite: 5000, withoutSite: 2000 },
  { month: 'Feb', withSite: 6000, withoutSite: 2200 },
  { month: 'Mar', withSite: 7500, withoutSite: 2400 },
  { month: 'Apr', withSite: 9000, withoutSite: 2600 },
  { month: 'May', withSite: 11000, withoutSite: 2800 },
  { month: 'Jun', withSite: 13000, withoutSite: 3000 },
  { month: 'Jul', withSite: 15000, withoutSite: 3200 },
];

function GainsChartStacked() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <Typography variant="h5" align="center" gutterBottom>
        Comparação de Ganhos com e sem um Site
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="withoutSite" stackId="a" fill="#82ca9d" name="Sem Site" />
          <Bar dataKey="withSite" stackId="a" fill="#8884d8" name="Com Site" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default GainsChartStacked;
