import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'; // Still imported but not used - can be removed if not needed
import Seo from '../shared/layout-components/seo/seo';
import Image from 'next/image';

// Import your logo image
import logolight from "../public/assets/img/brand/logo-light.png";

const UnderConstruction = () => {
  const router = useRouter();

  // Redirect on mount
  useEffect(() => {
    router.replace('/components/authentication/signin');
  }, [router]);

  // State for toggling demo changer
  const [isDemoChangerActive, setDemoChangerActive] = useState(false);

  const toggleDemoChanger = () => {
    setDemoChangerActive(!isDemoChangerActive);
  };

  // Optional: consider removing the 'remove' function if not needed
  const hideDemoChanger = () => {
    setDemoChangerActive(false);
  };

  return (
    <div>
      <Seo title=" " />

      {/* Error Background */}
      <div className="error-bg">
        <div className="main-container container-fluid">
          <div className="inner-body">
            <div className="row sidemenu-height">
              <div className="col-md-12">
                <div className="construction1 text-center details">
                  <div>
                    {/* You can replace multiple <br /> with proper padding/margin in CSS */}
                    <div className="mb-4">
                      {/* Using Next.js Image component for optimization */}
                      <Image src={logolight} alt="SkyElect Logo" width={200} height={100} />
                    </div>
                    <h6 className="tx-15 mt-3 mb-4 text-muted text-center">
                      <div className="lds-circle mx-auto">
                        <div></div>
                      </div>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* End Error Background */}
      
      {/* Demo Changer (if applicable) */}
      <div
        className={`demo_changer ${isDemoChangerActive ? 'active' : ''}`}
        style={{
          right: isDemoChangerActive ? '0px' : '-270px',
          transition: 'right 0.3s ease',
        }}
      >
        {/* Button to toggle demo changer */}
        <button onClick={toggleDemoChanger}>
          {isDemoChangerActive ? 'Close' : 'Open'} Demo Changer
        </button>
        {/* You might want a close button inside */}
        {isDemoChangerActive && (
          <button onClick={hideDemoChanger}>Close</button>
        )}
      </div>
    </div>
  );
};

UnderConstruction.layout = "Authenticationlayout";

export default UnderConstruction;