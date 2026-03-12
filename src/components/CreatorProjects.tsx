import "./styles/CreatorProjects.css";

const row1 = [
  "Sonic EVM",
  "Story Protocol",
  "Boundless",
  "MiraDAO",
  "Humanity Protocol",
  "Magic Newton",
  "Virtual Protocol",
  "Kaito AI",
  "Base App",
  "Farcaster",
];

const row2 = [
  "Web3 Content",
  "Airdrop Hunter",
  "Community Mod",
  "Vibe Coder",
  "AI Research",
  "Prompt Engineer",
  "On-chain Activity",
  "Mindshare Creator",
  "Wallchain",
  "Cookie.fun",
];

const CreatorProjects = () => {
  return (
    <div className="creator-projects-section section-container">
      <div className="creator-projects-container">
        <h2>
          Web3 Projects I've <br /> <span>Created Content For</span>
        </h2>
        
        <div className="marquee-wrapper">
          <div className="marquee-row marquee-left">
            <div className="marquee-content">
              {row1.map((project, index) => (
                <div key={`row1-1-${index}`} className="project-tag">
                  {project}
                </div>
              ))}
              {row1.map((project, index) => (
                <div key={`row1-2-${index}`} className="project-tag">
                  {project}
                </div>
              ))}
            </div>
          </div>

          <div className="marquee-row marquee-right">
            <div className="marquee-content">
              {row2.map((project, index) => (
                <div key={`row2-1-${index}`} className="project-tag">
                  {project}
                </div>
              ))}
              {row2.map((project, index) => (
                <div key={`row2-2-${index}`} className="project-tag">
                  {project}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorProjects;
