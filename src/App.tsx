import './App.css';

export default function App() {
  return (
    <div className="fb-app-container">
      
      {/* 1. Header Section */}
      <header className="section header">
        <div className="fb-logo">facebook</div>
        <div className="header-icons">
          <button className="icon-btn">
            <span>+</span>
          </button>
          <button className="icon-btn">
            <span>🔍</span>
          </button>
          <button className="icon-btn">
            <span>💬</span>
            <span className="notification-badge">4</span>
          </button>
        </div>
      </header>

      {/* 2. Create Post Input */}
      <section className="section create-post">
        {/* Placeholder for user profile pic */}
        <div className="profile-pic" style={{ backgroundColor: '#555' }}></div>
        <div className="post-input">What's on your mind?</div>
        <span style={{ fontSize: '24px', color: '#45BD62', cursor: 'pointer' }}>🖼️</span>
      </section>

      {/* 3. Stories Carousel */}
      <section className="section stories-container">
        
        {/* Create Story Card */}
        <div className="story-card create-story-card">
          <div className="create-story-img" style={{ backgroundColor: '#2b3036' }}></div>
          <div className="create-story-bottom">
            <div className="create-story-btn">+</div>
            Create story
          </div>
        </div>

        {/* Friend Story 1 */}
        <div className="story-card">
          <div className="story-bg" style={{ backgroundColor: '#333' }}></div>
          <div className="story-author-pic" style={{ backgroundColor: '#666' }}></div>
          <div className="story-overlay"> Noor</div>
        </div>

        {/* Friend Story 2 */}
        <div className="story-card">
          <div className="story-bg" style={{ backgroundColor: '#888' }}></div>
          <div className="story-author-pic" style={{ backgroundColor: '#555' }}></div>
          <div className="story-overlay"> Miraj</div>
        </div>

        {/* Friend Story 3 */}
        <div className="story-card">
          <div className="story-bg" style={{ backgroundColor: '#622' }}></div>
          <div className="story-author-pic" style={{ backgroundColor: '#999' }}></div>
          <div className="story-overlay">Mo...</div>
        </div>
      </section>

      {/* 4. Post Feed */}
      <section className="section post">
        {/* Post Header */}
        <div className="post-header">
          <div className="post-author-info">
            <div className="profile-pic" style={{ backgroundColor: '#d0d8e8' }}></div>
            <div>
              <div className="post-author-name"> Ferdous</div>
              <div className="post-meta">
                37m • <span>🌍</span>
              </div>
            </div>
          </div>
          <div className="post-actions">
            <span>•••</span>
            <span>✕</span>
          </div>
        </div>

        {/* Post Text content */}
        <div className="post-text">
          যতদিন না বাংলাদেশে ধর্ষকদের এমন শাস্তি দেওয়া হবে, যেটা দেখে আরেকজন ধর্ষক ভয় পাবে, ততদিন এই ঘটনা থামবে না। পাবলিক এক্সিকিউশন ছাড়া ধর্ষণ থামবে... <span style={{ color: '#65676B', fontWeight: 'bold' }}>more</span>
        </div>

        {/* Post Image (Recreated purely with CSS & HTML to match your screenshot) */}
        <div className="post-image-mock">
          <span className="mock-quote-mark">“</span>
          <span className="mock-source">Via: Ekattor Television</span>
          
          <div style={{ marginTop: '10px' }}>
             <span className="mock-text-bg-red">এর বিচার আপনারা করতে পারবেন না।</span><br/>
             <span className="mock-text-bg-red">আপনাদের এই ধরনের কোনো রেকর্ড</span><br/>
             <span className="mock-text-bg-red">নেই।</span> 
             <span className="mock-text-white" style={{ fontWeight: 'bold' }}> আমার মেয়েও ফিরে আসবে না। [..]</span>
          </div>
          
          <div className="mock-text-white">
            বড়জোর ১৫ দিন, এরপর আরেকটা ঘটনা<br/>
            এসে এটা ধামাচাপা পড়ে যাবে। শেষষ!
          </div>

          <div style={{ marginTop: 'auto', color: '#aaa', fontSize: '12px' }}>
            - মেয়ের ম*রদেহ প্রতিবেশীর কক্ষে...
          </div>
        </div>
      </section>

     {/* 5. Bottom Navigation Bar */}
      <nav className="bottom-nav">
        
        {/* Home Icon (Active - Filled) */}
        <span className="nav-item active">
          <svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28">
            <path d="M12 3l8 6.5v11.5h-5v-6h-6v6h-5v-11.5z"/>
          </svg>
        </span>

        {/* Video / Watch Icon */}
        <span className="nav-item">
          <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="28" height="28">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <polygon points="10 11 15 14 10 17 10 11" fill="currentColor" stroke="none" />
          </svg>
        </span>

        {/* Friends / Groups Icon */}
        <span className="nav-item">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="28" height="28">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87"/>
            <path d="M16 3.13a4 4 0 010 7.75"/>
          </svg>
        </span>

        {/* Marketplace / Store Icon */}
        <span className="nav-item">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="28" height="28">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </span>

        {/* Notifications Icon */}
        <span className="nav-item">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="28" height="28">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 01-3.46 0"/>
          </svg>
        </span>

        {/* Profile menu icon */}
        <div className="nav-item">
          <div className="nav-profile" style={{ backgroundColor: '#ddd', width: '32px', height: '32px' }}></div>
        </div>
      </nav>

    </div>
  );
}
