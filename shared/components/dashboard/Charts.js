import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Card, Col, Row } from 'react-bootstrap';
import LoadingSpinner from '../LoadingSpinner';

// Lazy load chart components
const Bar = dynamic(() => import("react-chartjs-2").then(mod => ({ default: mod.Bar })), {
  loading: () => <LoadingSpinner text="Loading bar chart..." />,
  ssr: false
});

const Pie = dynamic(() => import("react-chartjs-2").then(mod => ({ default: mod.Pie })), {
  loading: () => <LoadingSpinner text="Loading pie chart..." />,
  ssr: false
});

const Line = dynamic(() => import("react-chartjs-2").then(mod => ({ default: mod.Line })), {
  loading: () => <LoadingSpinner text="Loading line chart..." />,
  ssr: false
});

const Charts = ({ candidatData = [] }) => {
  // Sample chart data - replace with your actual data
  const barData = {
    labels: candidatData.slice(0, 5).map((c, i) => c.nom || `Candidat ${i + 1}`),
    datasets: [{
      label: 'Votes (%)',
      data: [25, 20, 18, 15, 12],
      backgroundColor: ['#1A9F5C', '#FCEB37', '#366CAC', '#FF6B6B', '#4ECDC4'],
      borderColor: ['#1A9F5C', '#FCEB37', '#366CAC', '#FF6B6B', '#4ECDC4'],
      borderWidth: 1
    }]
  };

  const pieData = {
    labels: ['Parti A', 'Parti B', 'Parti C', 'Indépendants'],
    datasets: [{
      data: [35, 25, 20, 20],
      backgroundColor: ['#1A9F5C', '#FCEB37', '#366CAC', '#FF9F43'],
      borderWidth: 2
    }]
  };

  const lineData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Intention de Vote (%)',
      data: [12, 19, 15, 25, 22, 30],
      fill: false,
      borderColor: '#1A9F5C',
      backgroundColor: '#1A9F5C',
      tension: 0.4
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <Row className="row-sm">
      <Col xl={4} lg={6} md={12} sm={12}>
        <Card>
          <Card.Header>
            <Card.Title as="h3">Répartition des Votes</Card.Title>
          </Card.Header>
          <Card.Body>
            <div style={{ height: '300px' }}>
              <Suspense fallback={<LoadingSpinner text="Loading chart..." />}>
                <Bar data={barData} options={chartOptions} />
              </Suspense>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col xl={4} lg={6} md={12} sm={12}>
        <Card>
          <Card.Header>
            <Card.Title as="h3">Répartition par Parti</Card.Title>
          </Card.Header>
          <Card.Body>
            <div style={{ height: '300px' }}>
              <Suspense fallback={<LoadingSpinner text="Loading chart..." />}>
                <Pie data={pieData} options={chartOptions} />
              </Suspense>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col xl={4} lg={12} md={12} sm={12}>
        <Card>
          <Card.Header>
            <Card.Title as="h3">Évolution des Intentions</Card.Title>
          </Card.Header>
          <Card.Body>
            <div style={{ height: '300px' }}>
              <Suspense fallback={<LoadingSpinner text="Loading chart..." />}>
                <Line data={lineData} options={chartOptions} />
              </Suspense>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Charts;
