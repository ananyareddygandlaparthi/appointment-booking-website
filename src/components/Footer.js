const Footer = () => {
    return (
      <footer style={{ backgroundColor: '#D3D3D3', textAlign: 'center' ,paddingTop: '40px',marginTop:'100px',width:'100%'}}>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 auto' }}>
          <div>
            <h4>Resources</h4>
            <ul style={{ listStyle: 'none', padding: '50px' }}>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/docs">Docs</a></li>
              <li><a href="/help">Help</a></li>
            </ul>
          </div>
          <div>
            <h4>Socials</h4>
            <ul style={{ listStyle: 'none', padding: '50px' }}>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  