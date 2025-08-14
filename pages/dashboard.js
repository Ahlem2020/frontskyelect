import React, { useState, useEffect, useCallback } from 'react';
import PageHeader from "../shared/layout-components/page-header/page-header"
import Seo from '../shared/layout-components/seo/seo';
import { Bar } from "react-chartjs-2";
import * as chart from "../shared/data/chart/chat";
import { Card, Col, Container, Row, ProgressBar, Button } from 'react-bootstrap';
import CountUp from 'react-countup';
import Link from 'next/link';
import { API_ENDPOINTS, fetchFromServer } from '../shared/config/api';


//Images
import work3 from "../public/assets/img/brand/Cote_d-Ivoire_Waving_Flag_PNG_Image.png";

import dynamic from 'next/dynamic';
import ProjectBudget from '../shared/data/dashboard/project-budget';
const TodayTask = dynamic(() => import('../shared/data/dashboard/today-task'), { ssr: false })
import withAuth from './withAuth';

// Chart colors for consistent theming
const chartColors = ['#1A9F5C', '#FCEB37', '#366CAC'];
let colorIndex = 0;

const getNextColor = () => {
    const color = chartColors[colorIndex];
    colorIndex = (colorIndex + 1) % chartColors.length;
    return color;
};

// Election constants
const TOTAL_REGISTERED_VOTERS = 8700000;
const TOTAL_POLLING_STATIONS = 22381;
const DOMESTIC_VOTERS = 830729;
const EXPECTED_VOTES = 846822;

const Dashboard = () => {
    const [candidat, setCandidat] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchCandidat = useCallback(async () => {
        try {
            if (isInitialLoad) {
                setLoading(true);
            } else {
                setIsRefreshing(true);
            }
            
            const data = await fetchFromServer("http://localhost:5000/candidates");
            setCandidat(data);
            console.log('Fetched candidates:', data);
        } catch (error) {
            console.error('Error fetching candidates:', error);
            setCandidat([]);
        } finally {
            if (isInitialLoad) {
                setLoading(false);
                setIsInitialLoad(false);
            } else {
                setIsRefreshing(false);
            }
        }
    }, [isInitialLoad]);

    useEffect(() => {
        fetchCandidat();

        const intervalId = setInterval(fetchCandidat, 5000);

        return () => clearInterval(intervalId);
    }, [fetchCandidat]);

    const totalVotes = candidat.reduce((acc, curr) => acc + curr.totalVote, 0);
    const votePercentage = Math.ceil((totalVotes / EXPECTED_VOTES) * 100);
    const top4Candidates = candidat
        ? [...candidat].sort((a, b) => b.totalVote - a.totalVote).slice(0, 4)
        : [];


    const [chartData, setChartData] = useState(null);

    const fetchChartData = useCallback(async () => {
        try {
            let rawData = await fetchFromServer("http://localhost:5000/candidates/stats/perMinutes");
            
            // Check if rawData exists and is an array
            if (!rawData || !Array.isArray(rawData) || rawData.length === 0) {
                console.warn('No chart data available');
                setChartData({ labels: [], datasets: [] });
                return;
            }
            console.log('Fetched chart data:', rawData);
            
            rawData = rawData.reverse();

            console.log('Fetched chart data reversed:', rawData);

            // Check if the first entry has data property
            if (!rawData[0] || !rawData[0].data || !Array.isArray(rawData[0].data)) {
                console.warn('Invalid chart data structure');
                setChartData({ labels: [], datasets: [] });
                return;
            }
            
            const labels = rawData.map(entry => entry.time);
            const datasets = rawData[0].data.map(candidate => ({
                label: candidate.fullName,
                data: rawData.map(entry => {
                    const candidateData = entry.data ? entry.data.find(c => c.id === candidate.id) : null;
                    return candidateData ? candidateData.totalVote : 0;
                }),
                borderColor: getNextColor(),
                borderWidth: "0",
                backgroundColor: getNextColor(),
            }));

            setChartData({ labels, datasets });
        } catch (error) {
            console.error('Error fetching chart data:', error);
            setChartData({ labels: [], datasets: [] });
        }
    }, []);

    useEffect(() => {
        fetchChartData();
        console.log('Chart data fetched:', chartData);
    }, [chartData, fetchChartData]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="text-center">
                    <div className="lds-spinner">
                        <div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div>
                    </div>
                    <p className="mt-3">Loading Dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Seo title="Dashboard" />

            <PageHeader 
                title="Bienvenue sur Élections Côte d'Ivoire" 
                item="Accueil" 
                active_item="Tableau de Bord" 
            />
            
          
            
            

            <div className="row row-sm">
                <div className="col-sm-12 col-lg-12 col-xl-8">

                    {/* <!--Row--> */}
                    <div className="row row-sm  mt-lg-4">
                        <div className="col-sm-12 col-lg-12 col-xl-12">
                            <div className="card bg-primary custom-card card-box">
                                <div className="card-body p-4">
                                    <div className="row align-items-center">
                                        <div className="offset-xl-4 offset-sm-6 col-xl-8 col-sm-6 col-12 img-bg ">
                                            <h4 className="d-flex  mb-3">
                                                <span className="font-weight-bold text-white ">Élections Côte d&apos;Ivoire 2025!</span>
                                            </h4>
                                            <p className="tx-white-7 mb-1">
                                                La plateforme « Élections Côte d&apos;Ivoire 2025 » a été lancée par Alternance 2025. Elle a pour objectif de récolter et publier les tendances de l&apos;élection présidentielle du 25 octobre 2025. Une équipe de scrutateurs envoie, en temps réel, les premiers résultats des différents bureaux de vote, qui sont vérifiés, analysés et publiés, avec une réactualisation heure par heure. L’objectif d&apos;« Élections Côte d&apos;Ivoire 2025 » est d&apos;observer le bon déroulement du scrutin, que celui-ci soit transparent et ainsi d&apos;éviter toute tentative de manipulation.</p>
                                        </div>
                                        <img src={work3.src} alt="user-img" style={{ width: "300px" , paddingLeft: "50px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--Row --> */}

                    {/* <!--Row--> */}
                    <div className="row row-sm">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="card custom-card">
                                <div className="card-body">
                                    <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                            <svg className="text-primary" xmlns="http://www.w3.org/2000/svg"
                                                enableBackground="new 0 0 24 24" height="24"
                                                viewBox="0 0 24 24" width="24">
                                                <g>
                                                    <rect height="14" opacity=".3" width="14" x="5" y="5" />
                                                    <g>
                                                        <rect fill="none" height="24" width="24" />
                                                        <g>
                                                            <path
                                                                d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                                                            <rect height="5" width="2" x="7" y="12" />
                                                            <rect height="10" width="2" x="15" y="7" />
                                                            <rect height="3" width="2" x="11" y="14" />
                                                            <rect height="2" width="2" x="11" y="10" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                            <label className="main-content-label tx-13 font-weight-bold mb-1">NOMBRE D’ÉLECTEURS INSCRITS
                                            </label>
                                        </div>
                                        <div className="card-item-body">
                                            <div className="card-item-stat">
                                                <h4 className="font-weight-bold">
                                                    <CountUp start={0} end={TOTAL_REGISTERED_VOTERS} duration={3.5} separator=" " />
                                                </h4>
                                                <small><b className="text-success">18,6 % </b> nouveaux électeurs</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="card custom-card">
                                <div className="card-body">
                                    <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24"
                                                viewBox="0 0 24 24" width="24">
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path
                                                    d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
                                                    opacity=".3" />
                                                <path
                                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                                            </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                            <label className="main-content-label tx-13 font-weight-bold mb-1">  ÉLECTEURS SUR LE TERRAIN NATIONAL

                                            </label>
                                        </div>
                                        <div className="card-item-body">
                                            <div className="card-item-stat">
                                                <h4 className="font-weight-bold">
                                                    <CountUp start={0} end={830729} duration={3.5} separator=" " />
                                                </h4>
                                                <small><b className="text-success">1.9%</b>  électeurs à l’étranger </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="card custom-card">
                                <div className="card-body">
                                    <div className="card-item">
                                        <div className="card-item-icon card-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24"
                                                viewBox="0 0 24 24" width="24">
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path
                                                    d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
                                                    opacity=".3" />
                                                <path
                                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                                            </svg>
                                        </div>
                                        <div className="card-item-title mb-2">
                                            <label className="main-content-label tx-13 font-weight-bold mb-1">NOMBRES Bureaux de votes
                                            </label>
                                        </div>
                                        <div className="card-item-body">
                                            <div className="card-item-stat">
                                                <h4 className="font-weight-bold">
                                                    <CountUp start={0} end={TOTAL_POLLING_STATIONS} duration={3.5} separator=" " />
                                                </h4>
                                                <small><b className="text-success">9.32%</b> Augmentation</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End row--> */}

                    {/* <!--row--> */}
                    <Row className="row-sm">
                        <Col sm={12} lg={12} xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="border-bottom-0 pb-3">
                                    <div>
                                        <label className="main-content-label mb-2 font-weight-bold">
                                            Elections Vote
                                        </label>
                                        <span className="d-block tx-12 mb-0 text-muted">
                                            Ceci est une visualisation en temps réel du déroulement des votes électoraux par heure.
                                        </span>
                                    </div>
                                </Card.Header>
                                <Card.Body className="pt-0">
                                    <div>
                                        <Container>
                                            <div className="chart-dropshadow2 ht-300">
                                                <ProjectBudget />
                                            </div>
                                        </Container>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* <!-- col end --> */}
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="border-bottom-0 pb-0">
                                    <div>
                                        <div className="d-md-flex justify-content-between align-items-center">
                                            <label className="main-content-label my-auto pt-2">
                                                Calcul des votes
                                            </label>
                                            <div className="mt-3 mt-md-0">
                                                <span className="badge badge-primary px-3 py-2">
                                                    {totalVotes.toLocaleString()} / {EXPECTED_VOTES.toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                        <span className="d-block tx-12 mt-2 mb-0 text-muted">
                                            Calcul des votes en temps réel
                                        </span>
                                    </div>
                                </Card.Header>
                                <Card.Body className="py-3">
                                    <Row>
                                        <Col sm={6} className="my-auto">
                                            <div className="text-center text-sm-start">
                                                <h2 className="font-weight-bold mb-2 text-primary">
                                                    <CountUp start={0} end={totalVotes} duration={2.5} separator="," />
                                                </h2>
                                                <h6 className="mb-2 font-weight-normal text-muted">
                                                    Total des votes
                                                </h6>
                                                <div className="mt-3">
                                                    <small className="text-success font-weight-semibold">
                                                        <i className="fe fe-trending-up me-1"></i>
                                                        Taux de participation: {votePercentage}%
                                                    </small>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={6} className="my-auto">
                                            <div className="text-center position-relative">
                                                <div className="forth circle d-flex align-items-center justify-content-center" style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto' }}>
                                                    {/* Circular Progress Bar */}
                                                    <svg width="120" height="120" style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
                                                        <circle
                                                            cx="60"
                                                            cy="60"
                                                            r="50"
                                                            stroke="#e9ecef"
                                                            strokeWidth="8"
                                                            fill="transparent"
                                                        />
                                                        <circle
                                                            cx="60"
                                                            cy="60"
                                                            r="50"
                                                            stroke="#007bff"
                                                            strokeWidth="8"
                                                            fill="transparent"
                                                            strokeDasharray={`${2 * Math.PI * 50}`}
                                                            strokeDashoffset={`${2 * Math.PI * 50 * (1 - votePercentage / 100)}`}
                                                            strokeLinecap="round"
                                                            style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                                                        />
                                                    </svg>
                                                    <div className="chart-circle-value circle-style radialbar" style={{ height: '20px', zIndex: 1 }}>
                                                        <div className="tx-18 font-weight-bold text-primary">
                                                            {votePercentage}%
                                                        </div>
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                    {/* Progress indicator */}
                                    <Row className="mt-3">
                                        <Col xs={12}>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <small className="text-muted">Progression</small>
                                                <small className="text-muted">
                                                    {(EXPECTED_VOTES - totalVotes).toLocaleString()} votes restants
                                                </small>
                                            </div>
                                            <ProgressBar 
                                                now={votePercentage} 
                                                variant="primary" 
                                                className="progress ht-8"
                                                style={{ borderRadius: '10px' }}
                                            />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* <!-- col end --> */}
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <Card className="custom-card top-inquiries">
                                <Card.Header className="border-bottom-0 pb-0">
                                    <div>
                                        <div className="d-flex">
                                            <label className="main-content-label my-auto pt-2">
                                                RÉSULTATS PROVISOIRES                    </label>
                                        </div>
                                        <span className="d-block tx-12 mt-2 mb-0 text-muted">
                                            Principaux candidats en tête de la présidentielle 2025                   </span>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="mt-1">
                                        {top4Candidates.map(candidate => {
                                            const percentage = totalVotes > 0 ? ((candidate.totalVote / totalVotes) * 100).toFixed(1) : 0;
                                            return (
                                                <Row key={candidate.id} className="mb-3 align-items-center">
                                                    <Col xs={6} sm={5}>
                                                        <span className="font-weight-semibold">{candidate.lastName}</span>
                                                    </Col>
                                                    <Col xs={4} sm={5}>
                                                        <ProgressBar
                                                            className="progress ht-6"
                                                            now={percentage}
                                                            variant="primary"
                                                        />
                                                    </Col>
                                                    <Col xs={2} sm={2} className="text-end">
                                                        <small className="text-muted">{percentage}%</small>
                                                    </Col>
                                                </Row>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-3 text-end">
                                        <Link href="/candidats">
                                            <Button variant="light" style={{ borderRadius: '50px' }}>
                                                Candidats
                                            </Button>
                                        </Link>
                                    </div>
                                </Card.Body>

                            </Card>

                        </Col>
                        {/* <!-- col end --> */}
                        <Col lg={12}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Body>
                                    <div>
                                        <h6 className="main-content-label mb-1">TOP 3 VOTES Ci-dessous </h6>
                                        <p className="text-muted  card-sub-title">
                                            l’évolution des trois candidats en tête .
                                        </p>
                                    </div>
                                    <div className="chartjs-wrapper-demo">
                                        {chartData && chartData.datasets && chartData.datasets.length > 0 ? (
                                            <Bar
                                                options={{
                                                    ...chart.Barchart2,
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                    plugins: {
                                                        ...chart.Barchart2.plugins,
                                                        legend: {
                                                            display: true,
                                                            position: 'top',
                                                        },
                                                        title: {
                                                            display: false
                                                        }
                                                    },
                                                    scales: {
                                                        ...chart.Barchart2.scales,
                                                        y: {
                                                            ...chart.Barchart2.scales?.y,
                                                            beginAtZero: true,
                                                            ticks: {
                                                                callback: function(value) {
                                                                    return value.toLocaleString();
                                                                }
                                                            }
                                                        }
                                                    }
                                                }}
                                                data={{
                                                    ...chartData,
                                                    datasets: chartData.datasets.slice(0, 3) // Only show top 3
                                                }}
                                                className="barchart"
                                                height="300"
                                            />
                                        ) : chartData && chartData.labels && chartData.labels.length === 0 ? (
                                            <div className="text-center py-5">
                                                <div className="mb-3">
                                                    <i className="fe fe-bar-chart-2 text-muted" style={{ fontSize: '3rem' }}></i>
                                                </div>
                                                <h6 className="text-muted">Aucune donnée disponible</h6>
                                                <p className="text-muted small">Les données du graphique seront affichées une fois que les votes commenceront à arriver.</p>
                                            </div>
                                        ) : (
                                            <div className="text-center py-5">
                                                <div className="spinner-border text-primary mb-3" role="status">
                                                    <span className="visually-hidden">Chargement...</span>
                                                </div>
                                                <p className="text-muted">Chargement des données du graphique...</p>
                                            </div>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* <!-- col end --> */}
                    </Row>
                    {/* <!-- Row end --> */}
                </div>
                {/* <!-- col end --> */}
                <div className="col-sm-12 col-lg-12 col-xl-4 mt-xl-4">
                    <div className="card custom-card card-dashboard-calendar pb-0">
                        <label className="main-content-label mb-2 pt-1">Les Candidats</label>
                        <span className="d-block tx-12 mb-2 text-muted">La liste des candidats retenus pour la présidentielle d&apos;octobre 2025</span>
                        <table className="table table-hover m-b-0 transcations mt-2">
                            <tbody>
                                {candidat.map((items, index) => (
                                    <tr key={index} data-index={index} >
                                        <td className="wd-5p">
                                            <div className="main-img-user avatar-md">
                                                <img 
                                                    alt="avatar" 
                                                    className="img-fluid img-thumbnail rounded-circle me-3"
                                                    src={items.image}
                                                    />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-middle ms-3">
                                                <div className="d-inline-block">
                                                    <h6 className="mb-1"> {items.lastName} {items.firstName} </h6>
                                                    <p className="mb-0 tx-13 text-muted"> {items.part}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-end">
                                            <div className="d-inline-block">
                                                <h6 className="mb-2 tx-15 font-weight-semibold">{items.totalVote}
                                                </h6>
                                                <p className="mb-0 tx-11 text-muted">25 octobre 2025</p>
                                            </div>
                                        </td>
                                    </tr>

                                ))}

                            </tbody>

                        </table>
                    </div>
                </div>
                {/* <!-- col end --> */}
            </div>
        </>
    )
}

Dashboard.layout = "Contentlayout"

export default withAuth(Dashboard);
