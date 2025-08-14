  import React from 'react'
  import dynamic from 'next/dynamic';
  import withAuth from './withAuth';
  import PageHeader from '../../../shared/layout-components/page-header/page-header'
  import Seo from '../../../shared/layout-components/seo/seo';
  const Candidatecom = dynamic(() => import('./candidatsContent'), { ssr: false });


  const Candidate = () => {
      return (
          <>
              <Seo title={"Candidat"} />

              <PageHeader title="Candidat de Élections Côte d'Ivoire 2025! " item="Accueil" active_item="List des Candidats" />
              <Candidatecom />
          </>
      )
  }

  Candidate.layout = "Contentlayout"


  export default withAuth(Candidate)

