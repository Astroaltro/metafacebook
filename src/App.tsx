import React, { useState } from 'react';
import { 
  Menu, Search, MoreVertical, Archive, VolumeX, CheckCheck, 
  MessageCircle, UserCircle, Settings, Camera, Pen
} from 'lucide-react';
import './App.css';

// Mock data matching the image provided
const chatData = [
  { id: 1, isArchived: true, title: 'Archived Chats', message: 'MODYOLO 💎⚡', unread: 1 },
  { id: 2, title: 'Top-Apps', message: '3 Months NordVpn Grab Fast...', time: '1:21 PM', unread: 10099, isMuted: true, img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop' },
  { id: 3, title: 'iPapkfgforn', message: '▶️ This is exactly what a blockbust...', time: 'Mon', unread: 612, img: 'https://images.unsplash.com/photo-1585647347384-2593bc35786b?w=100&h=100&fit=crop' },
  { id: 4, title: 'BEST ||  SHORT 💥🔥', message: '➡️ https://t.me/NovaEarn10bot/ap...', time: 'Sun', unread: 859, img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=100&h=100&fit=crop' },
  { id: 5, title: 'BOOM SHORT COMMUNITY 💥✨', message: '➡️ 🧱 ATTENTION! 🧱', time: 'Sun', unread: 1219, img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=100&h=100&fit=crop' },
  { id: 6, title: 'Boro ', message: '🖼️ Photo', time: 'Fri', isRead: true, img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop' },
  { id: 7, title: 'iPapkornBots', message: '🏛️ Netflix sued by Texas for allegedl...', time: 'May 12', unread: 37, img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=100&h=100&fit=crop' },
  { id: 8, title: 'HEMAL Pro features', message: 'PDF VIP', time: '11', unread: 30, hasCamera: true, img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=100&h=100&fit=crop' },
  { id: 9, title: 'Israt a', message: 'Israt Jahan Iseta joined Telegram!', time: '10', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
];

export default function TelegramClone() {
  const [activeTab, setActiveTab] = useState('chats');

  return (
    <div className="tg-container">
      
      {/* Header */}
      <header className="tg-header">
        <div className="tg-header-left">
          {/* Using a generic Paper Plane as a Telegram icon substitute */}
          <div style={{ backgroundColor: '#40a7e3', padding: '6px', borderRadius: '50%' }}>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </div>
          <h1 className="tg-title">Telegram</h1>
        </div>
        <MoreVertical size={24} color="#ffffff" />
      </header>

      {/* Search */}
      <div className="tg-search-container">
        <div className="tg-search-bar">
          <Search size={18} color="#6b7d8d" />
          <input type="text" placeholder="Search Chats" className="tg-search-input" />
        </div>
      </div>

      {/* Main Chat List */}
      <div className="tg-chat-list">
        {chatData.map((chat) => (
          <div key={chat.id} className="tg-chat-item">
            
            {/* Avatar */}
            <div className="tg-avatar-container">
              {chat.isArchived ? (
                <Archive size={24} color="#6b7d8d" />
              ) : (
                <img src={chat.img} alt={chat.title} className="tg-avatar" />
              )}
            </div>

            {/* Chat Content */}
            <div className="tg-chat-info">
              <div className="tg-chat-row-1">
                <div className="tg-chat-title">
                  {chat.title}
                  {chat.isMuted && <VolumeX size={14} color="#6b7d8d" style={{ marginLeft: '4px' }} />}
                </div>
                {chat.time && <span className="tg-chat-time">{chat.time}</span>}
              </div>
              
              <div className="tg-chat-row-2">
                <div className="tg-chat-message">
                  {chat.isRead && <CheckCheck size={16} color="#40a7e3" style={{ marginRight: '4px' }} />}
                  {chat.message}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {chat.hasCamera && <Camera size={16} color="#6b7d8d" />}
                  {chat.unread && (
                    <span className={`tg-badge ${chat.isMuted ? 'tg-badge-muted' : ''}`}>
                      {chat.unread > 999 ? '10099' : chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <div className="tg-fab">
        <Pen size={24} color="white" />
      </div>

      {/* Bottom Navigation */}
      <nav className="tg-bottom-nav">
        
        <div className={`tg-nav-item ${activeTab === 'chats' ? 'active' : ''}`} onClick={() => setActiveTab('chats')}>
          <div className="tg-nav-icon-bg"><MessageCircle size={24} /></div>
          <span>Chats</span>
          <div className="tg-nav-badge">90</div>
        </div>

        <div className={`tg-nav-item ${activeTab === 'contacts' ? 'active' : ''}`} onClick={() => setActiveTab('contacts')}>
          <div className="tg-nav-icon-bg"><UserCircle size={24} /></div>
          <span>Contacts</span>
        </div>

        <div className={`tg-nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
          <div className="tg-nav-icon-bg"><Settings size={24} /></div>
          <span>Settings</span>
        </div>

        <div className={`tg-nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
           {/* Custom Profile Circle for 'AG' */}
          <div className="tg-nav-icon-bg" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#2a5a3b', color: '#a3d9a5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>
              AG
            </div>
          </div>
          <span>Profile</span>
        </div>

      </nav>

    </div>
  );
}