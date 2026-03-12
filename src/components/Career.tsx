import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
             <div className="career-info-in">
               <div className="career-role">
                 <h4>Entered Crypto & Web3</h4>
               </div>
               <h3>2021</h3>
             </div>
             <p>
               Started exploring the crypto and Web3 ecosystem, learning the
               fundamentals of blockchain technology.
             </p>
           </div>
           <div className="career-info-box">
             <div className="career-info-in">
               <div className="career-role">
                 <h4>Airdrop Hunting & Community Mod</h4>
                 <h5>Farcaster / Base App</h5>
               </div>
               <h3>2022-23</h3>
             </div>
             <p>
               Became active in airdrop hunting and community moderation. Focused on
               engaging with users on Farcaster and the Base ecosystem.
             </p>
           </div>
           <div className="career-info-box">
             <div className="career-info-in">
               <div className="career-role">
                 <h4>Web3 Content Creation</h4>
                 <h5>Sonic EVM / Story Protocol / Boundless</h5>
               </div>
               <h3>2023</h3>
             </div>
             <p>
               Started creating content for various Web3 projects, helping to build
               their brand presence and community reach.
             </p>
           </div>
           <div className="career-info-box">
             <div className="career-info-in">
               <div className="career-role">
                 <h4>AI x Web3 Building</h4>
                 <h5>Kaito AI / Wallchain / Cookie.fun</h5>
               </div>
               <h3>2024-PR</h3>
             </div>
             <p>
               Building AI x Web3 apps using vibe coding. Active on Base App and
               Farcaster, participating in creator reward programs.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
