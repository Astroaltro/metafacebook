import { useState } from 'react';
import { 
  Tv, Search, Heart, MessageCircle, Bookmark, Share2, 
  Home, Users, Plus, Inbox, User, Music 
} from 'lucide-react';
import './App.css';

function App() {
  // State for Navigation and Actions
  const [activeTopTab, setActiveTopTab] = useState('For You');
  const [activeBottomNav, setActiveBottomNav] = useState('Home');
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Generic handler for buttons without specific views yet
  const handleActionClick = (actionName: string) => {
    alert(`${actionName} clicked!`);
  };

  return (
    <div className="app-container">
      {/* Background Video Placeholder */}
      <div className="video-background">
        <div className="video-placeholder">
          {/* We can show different content based on the active tab */}
          {activeTopTab === 'Following' ? (
             <div className="content-text">Following Feed</div>
          ) : (
             <div className="content-text">For You Feed</div>
          )}
        </div>
        
        {/* Swipe Up Overlay */}
        <div className="swipe-up-overlay">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="hand-icon">
            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0a2 2 0 0 0-2 2v2.5" />
            <path d="M14 11V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
            <path d="M10 14V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10" />
            <path d="M6 14v-2a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8a6 6 0 0 0 6 6h1a7 7 0 0 0 7-7v-5a2 2 0 0 0-2-2h-1" />
          </svg>
          <h2>Swipe up for more</h2>
        </div>
      </div>

      {/* Top Navigation */}
      <header className="top-nav">
        <div className="nav-icon interactive" onClick={() => handleActionClick('Live')}>
          <Tv size={24} />
          <span className="live-badge">LIVE</span>
        </div>
        <div className="center-tabs">
          <span 
            className={`tab interactive ${activeTopTab === 'Following' ? 'active' : ''}`}
            onClick={() => setActiveTopTab('Following')}
          >
            Following
          </span>
          <span 
            className={`tab interactive ${activeTopTab === 'For You' ? 'active' : ''}`}
            onClick={() => setActiveTopTab('For You')}
          >
            For You
          </span>
        </div>
        <div className="nav-icon interactive" onClick={() => handleActionClick('Search')}>
          <Search size={24} />
        </div>
      </header>

      {/* Right Sidebar Actions */}
      <aside className="right-sidebar">
        <div className="action-item profile-wrapper interactive" onClick={() => handleActionClick('Profile Follow')}>
          <div className="profile-pic">
            <img src="https://ui-avatars.com/api/?name=Cat&background=random" alt="Profile" />
          </div>
          <div className="plus-button">
            <Plus size={12} strokeWidth={4} />
          </div>
        </div>
        
        <div className="action-item interactive" onClick={() => setIsLiked(!isLiked)}>
          <Heart 
            size={32} 
            fill={isLiked ? "#fe2c55" : "white"} 
            color={isLiked ? "#fe2c55" : "white"} 
            className={isLiked ? "pop-animation" : ""}
          />
          <span>{isLiked ? "2.8M" : "2.7M"}</span>
        </div>
        
        <div className="action-item interactive" onClick={() => handleActionClick('Comments')}>
          <MessageCircle size={32} fill="white" />
          <span>10.8K</span>
        </div>
        
        <div className="action-item interactive" onClick={() => setIsSaved(!isSaved)}>
          <Bookmark 
            size={32} 
            fill={isSaved ? "#eccb38" : "white"} 
            color={isSaved ? "#eccb38" : "white"}
            className={isSaved ? "pop-animation" : ""}
          />
          <span>{isSaved ? "193.8K" : "193.7K"}</span>
        </div>
        
        <div className="action-item interactive" onClick={() => handleActionClick('Share')}>
          <Share2 size={32} fill="white" />
          <span>591.3K</span>
        </div>
        
        <div className="action-item audio-record interactive" onClick={() => handleActionClick('Audio')}>
          <div className="record-disc">
            <Music size={16} color="black" />
          </div>
        </div>
      </aside>

      {/* Bottom Left Info */}
      <div className="bottom-info">
        <h3 className="username">@Funny Animal Daily</h3>
        <p className="description">#cat</p>
        <div className="audio-info interactive" onClick={() => handleActionClick('Original Audio')}>
          <Music size={16} />
          <span>Contains: JUMP - BLACK...</span>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="bottom-nav">
        <div 
          className={`nav-item interactive ${activeBottomNav === 'Home' ? 'active' : ''}`}
          onClick={() => setActiveBottomNav('Home')}
        >
          <Home size={24} fill={activeBottomNav === 'Home' ? "white" : "transparent"} />
          <span>Home</span>
        </div>
        
        <div 
          className={`nav-item interactive ${activeBottomNav === 'Friends' ? 'active' : ''}`}
          onClick={() => setActiveBottomNav('Friends')}
        >
          <div className="icon-with-badge">
            <Users size={24} fill={activeBottomNav === 'Friends' ? "white" : "transparent"} />
            <span className="dot-badge"></span>
          </div>
          <span>Friends</span>
        </div>
        
        <div className="nav-item create-btn-wrapper interactive" onClick={() => handleActionClick('Create')}>
          <div className="create-btn">
            <Plus size={20} strokeWidth={3} color="black" />
          </div>
        </div>
        
        <div 
          className={`nav-item interactive ${activeBottomNav === 'Inbox' ? 'active' : ''}`}
          onClick={() => setActiveBottomNav('Inbox')}
        >
          <Inbox size={24} fill={activeBottomNav === 'Inbox' ? "white" : "transparent"} />
          <span>Inbox</span>
        </div>
        
        <div 
          className={`nav-item interactive ${activeBottomNav === 'Profile' ? 'active' : ''}`}
          onClick={() => setActiveBottomNav('Profile')}
        >
          <User size={24} fill={activeBottomNav === 'Profile' ? "white" : "transparent"} />
          <span>Profile</span>
        </div>
      </nav>
    </div>
  );
}

export default App;