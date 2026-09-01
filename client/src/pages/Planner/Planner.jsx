import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import { BsListUl, BsCalendar3, BsMap, BsPlus, BsTrash, BsCheck, BsClock, BsX } from 'react-icons/bs';
import './Planner.css';

const UNIVERSAL_CATEGORIES = [
  'University Application', 'Scholarship', 'SOP', 'LOR', 
  'Documents', 'Visa', 'Accommodation', 'Flight/Travel', 'Other'
];
const ENGLISH_CATEGORIES = ['GRE/GMAT/SAT', 'IELTS/TOEFL/PTE'];
const EU_CATEGORIES = ['B2/C1 Language Certification', 'APS Certificate', 'Blocked Account/Financials'];

export default function Planner() {
  const [deadlines, setDeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('list'); // 'list', 'calendar', 'roadmap'
  const [profile, setProfile] = useState(null);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDeadline, setEditingDeadline] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    deadlineDate: '',
    deadlineType: 'Other',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [deadlinesRes, profileRes] = await Promise.all([
        api.get('/deadlines'),
        api.get('/users/profile').catch(() => ({ data: { data: { preferredCountries: [] } } }))
      ]);
      setDeadlines(deadlinesRes.data.data || []);
      setProfile(profileRes.data.data);
    } catch (err) {
      toast.error('Failed to load planner data');
    } finally {
      setLoading(false);
    }
  };

  const getAvailableCategories = () => {
    let categories = [...UNIVERSAL_CATEGORIES];
    const preferred = profile?.preferredCountries || [];
    
    const isEnglishTarget = preferred.some(c => 
      ['United States', 'United Kingdom', 'Canada', 'Australia', 'New Zealand'].includes(c)
    );
    const isEuTarget = preferred.some(c => 
      ['Germany', 'France', 'Netherlands', 'Austria', 'Switzerland'].includes(c)
    );

    if (isEnglishTarget || preferred.length === 0) categories = [...categories, ...ENGLISH_CATEGORIES];
    if (isEuTarget) categories = [...categories, ...EU_CATEGORIES];
    
    return [...new Set(categories)]; // deduplicate
  };

  const handleOpenModal = (deadline = null) => {
    if (deadline) {
      setEditingDeadline(deadline);
      // Parse UTC string to local datetime-local input format
      const localDate = new Date(deadline.deadlineDate);
      const tzOffset = localDate.getTimezoneOffset() * 60000; // offset in milliseconds
      const localISOTime = (new Date(localDate - tzOffset)).toISOString().slice(0, 16);
      
      setFormData({
        title: deadline.title,
        deadlineDate: localISOTime,
        deadlineType: deadline.deadlineType,
      });
    } else {
      setEditingDeadline(null);
      setFormData({ title: '', deadlineDate: '', deadlineType: 'Other' });
    }
    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.deadlineDate) {
      return toast.error('Title and Date are required');
    }

    try {
      // Convert local datetime input back to UTC ISO string for the backend
      const utcDate = new Date(formData.deadlineDate).toISOString();
      const payload = { ...formData, deadlineDate: utcDate };

      if (editingDeadline) {
        await api.put(`/deadlines/${editingDeadline.id}`, payload);
        toast.success('Deadline updated');
      } else {
        await api.post('/deadlines', payload);
        toast.success('Deadline created');
      }
      setIsModalOpen(false);
      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.error?.message || 'Failed to save deadline');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this deadline?')) return;
    try {
      await api.delete(`/deadlines/${id}`);
      toast.success('Deleted successfully');
      fetchData();
    } catch (err) {
      toast.error('Failed to delete');
    }
  };

  const handleToggleComplete = async (d) => {
    try {
      await api.put(`/deadlines/${d.id}`, { isCompleted: !d.isCompleted });
      toast.success(d.isCompleted ? 'Marked as incomplete' : 'Marked as complete');
      fetchData();
    } catch (err) {
      toast.error('Failed to update status');
    }
  };

  const renderListView = () => {
    const upcoming = deadlines.filter(d => !d.isCompleted && new Date(d.deadlineDate) >= new Date()).sort((a, b) => new Date(a.deadlineDate) - new Date(b.deadlineDate));
    const overdue = deadlines.filter(d => !d.isCompleted && new Date(d.deadlineDate) < new Date()).sort((a, b) => new Date(b.deadlineDate) - new Date(a.deadlineDate));
    const completed = deadlines.filter(d => d.isCompleted).sort((a, b) => new Date(b.deadlineDate) - new Date(a.deadlineDate));

    return (
      <div className="deadline-list-view">
        {overdue.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--error-500)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BsClock /> Overdue
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              {overdue.map(d => <DeadlineRow key={d.id} d={d} onEdit={() => handleOpenModal(d)} onDelete={() => handleDelete(d.id)} onToggle={() => handleToggleComplete(d)} />)}
            </div>
          </div>
        )}

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BsClock /> Upcoming Deadlines
          </h3>
          {upcoming.length === 0 ? (
            <div className="empty-state">No upcoming deadlines.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              {upcoming.map(d => <DeadlineRow key={d.id} d={d} onEdit={() => handleOpenModal(d)} onDelete={() => handleDelete(d.id)} onToggle={() => handleToggleComplete(d)} />)}
            </div>
          )}
        </div>

        {completed.length > 0 && (
          <div>
            <h3 style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BsCheck /> Completed
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              {completed.map(d => <DeadlineRow key={d.id} d={d} onEdit={() => handleOpenModal(d)} onDelete={() => handleDelete(d.id)} onToggle={() => handleToggleComplete(d)} />)}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderRoadmapView = () => {
    // 1. Find the anchor deadline (earliest University Application, or earliest deadline overall)
    const upcoming = deadlines.filter(d => !d.isCompleted && new Date(d.deadlineDate) > new Date()).sort((a, b) => new Date(a.deadlineDate) - new Date(b.deadlineDate));
    let anchor = upcoming.find(d => d.deadlineType === 'University Application');
    if (!anchor && upcoming.length > 0) anchor = upcoming[0];
    
    if (!anchor) {
      return (
        <div className="empty-state" style={{ marginTop: '2rem' }}>
          <BsMap size={32} style={{ marginBottom: '1rem', color: 'var(--text-muted)' }} />
          <h3>No anchor deadline found</h3>
          <p>Add a "University Application" deadline to generate your personalized timeline.</p>
          <button className="btn btn-primary mt-2" onClick={() => handleOpenModal()}>Add Deadline</button>
        </div>
      );
    }

    const anchorDate = new Date(anchor.deadlineDate);
    
    // 2. Generate Roadmap Milestones relative to anchor
    const template = [
      { title: "Take English/Standardized Tests", monthsBefore: 4, type: "Test Preparation", hint: "Ensure scores are reported on time" },
      { title: "Finalize University Shortlist", monthsBefore: 3, type: "Research", hint: "Aim for 2 safe, 3 target, and 2 reach schools" },
      { title: "Request Letters of Recommendation", monthsBefore: 2, type: "LOR", hint: "Give your professors at least 4 weeks notice" },
      { title: "Finalize Statement of Purpose (SOP)", monthsBefore: 1.5, type: "SOP", hint: "Have it reviewed by peers or mentors" },
      { title: "Gather Transcripts & Documents", monthsBefore: 1, type: "Documents", hint: "Get official translations if necessary" },
      { title: "Submit Application (AdmitQ Buffer)", monthsBefore: 0.5, type: "Submission", hint: "Submit early to avoid server crashes" },
    ];

    const milestones = template.map(t => {
      const d = new Date(anchorDate);
      d.setMonth(d.getMonth() - t.monthsBefore);
      return { ...t, targetDate: d };
    }).filter(m => m.targetDate > new Date()); // Only show future milestones

    // Add the anchor itself
    milestones.push({
      title: anchor.title,
      targetDate: anchorDate,
      type: anchor.deadlineType,
      hint: "Your Official Deadline",
      isAnchor: true
    });

    return (
      <div className="roadmap-view">
        <div className="roadmap-timeline-wrapper">
          <div className="roadmap-timeline">
            {milestones.map((m, i) => {
              const daysLeft = Math.ceil((m.targetDate - new Date()) / (1000 * 60 * 60 * 24));
              const positionClass = i % 2 === 0 ? 'top-item' : 'bottom-item';
              
              return (
                <div key={i} className={`roadmap-item ${m.isAnchor ? 'is-anchor' : ''} ${positionClass}`}>
                  <div className="roadmap-node"></div>
                  <div className="roadmap-month-label">
                    {m.targetDate.toLocaleDateString(undefined, { month: 'short' })}<br/>
                    <span style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{m.targetDate.getDate()}</span>
                  </div>
                  
                  <div className="roadmap-content-wrapper">
                    <div className="roadmap-content">
                      <div className="roadmap-content-left">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <span className="badge badge-outline" style={{ fontSize: '0.7rem' }}>{m.type}</span>
                          {m.isAnchor && <span className="badge badge-accent" style={{ fontSize: '0.7rem' }}>Goal</span>}
                        </div>
                        <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>{m.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>{m.hint}</p>
                      </div>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem', borderTop: '1px solid var(--border-primary)', paddingTop: '0.75rem' }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Days left:</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: m.isAnchor ? 'var(--accent-500)' : 'var(--primary-500)' }}>
                          {daysLeft}d
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          • Working backward from your target: <strong>{anchor.title}</strong> on {anchorDate.toLocaleDateString()}
        </div>
      </div>
    );
  };

  return (
    <div className="page container">
      <div className="planner-header animate-fadeInUp">
        <div>
          <h1 className="page-title">Study-Abroad Planner</h1>
          <p className="page-subtitle">Track every milestone of your education journey</p>
        </div>
        <button className="btn btn-primary" onClick={() => handleOpenModal()}>
          <BsPlus size={20} /> Add Deadline
        </button>
      </div>

      <div className="planner-controls animate-fadeInUp">
        <div className="view-toggles">
          <button className={`view-toggle-btn ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')}>
            <BsListUl /> List View
          </button>
          <button className={`view-toggle-btn ${view === 'calendar' ? 'active' : ''}`} onClick={() => setView('calendar')}>
            <BsCalendar3 /> Calendar
          </button>
          <button className={`view-toggle-btn ${view === 'roadmap' ? 'active' : ''}`} onClick={() => setView('roadmap')}>
            <BsMap /> Roadmap
          </button>
        </div>
      </div>

      {loading ? (
        <div style={{ padding: '4rem', textAlign: 'center' }}>Loading planner data...</div>
      ) : (
        <div className="animate-fadeIn" style={{ marginTop: '2rem' }}>
          {view === 'list' && renderListView()}
          {view === 'calendar' && (
            <div className="empty-state" style={{ marginTop: '2rem' }}>
              <BsCalendar3 size={32} style={{ marginBottom: '1rem', color: 'var(--text-muted)' }} />
              <p>Calendar view is rendering basic layout.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1rem', marginTop: '2rem', textAlign: 'left' }}>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d} style={{fontWeight: 'bold', borderBottom: '1px solid var(--border-primary)', paddingBottom: '0.5rem'}}>{d}</div>)}
                {Array.from({length: 31}).map((_, i) => {
                   const dayDeadlines = deadlines.filter(d => new Date(d.deadlineDate).getDate() === i + 1);
                   
                   const handleDayClick = () => {
                     // Get current month/year to construct a valid datetime-local string
                     const now = new Date();
                     const targetDate = new Date(now.getFullYear(), now.getMonth(), i + 1, 12, 0, 0); // Default to noon
                     const tzOffset = targetDate.getTimezoneOffset() * 60000;
                     const localISOTime = (new Date(targetDate - tzOffset)).toISOString().slice(0, 16);
                     
                     setEditingDeadline(null);
                     setFormData({ title: '', deadlineDate: localISOTime, deadlineType: 'Other' });
                     setIsModalOpen(true);
                   };

                   return (
                     <div 
                       key={i} 
                       onClick={handleDayClick}
                       className="calendar-day-cell"
                       style={{ 
                         minHeight: '80px', 
                         padding: '0.5rem', 
                         background: 'var(--bg-card)', 
                         border: '1px solid var(--border-primary)', 
                         borderRadius: 'var(--radius-sm)',
                         cursor: 'pointer',
                         transition: 'border-color 0.2s ease'
                       }}
                       onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary-400)'}
                       onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-primary)'}
                     >
                       <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{i + 1}</span>
                       {dayDeadlines.map(d => (
                         <div 
                           key={d.id} 
                           onClick={(e) => {
                             e.stopPropagation(); // prevent opening the "add new" modal
                             handleOpenModal(d); // open edit modal for this specific deadline
                           }}
                           style={{ fontSize: '0.75rem', marginTop: '0.25rem', background: 'var(--primary-500-10)', color: 'var(--primary-500)', padding: '2px 4px', borderRadius: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                         >
                           {d.title}
                         </div>
                       ))}
                     </div>
                   );
                })}
              </div>
            </div>
          )}
          {view === 'roadmap' && renderRoadmapView()}
        </div>
      )}

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="planner-modal animate-fadeInUp">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h2 style={{ margin: 0 }}>{editingDeadline ? 'Edit Deadline' : 'Add Deadline'}</h2>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <BsX size={24} color="var(--text-secondary)" />
              </button>
            </div>
            
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label>Task Title</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Submit LOR for TU Munich"
                  required
                />
              </div>
              
              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label>Date & Time</label>
                <input 
                  type="datetime-local" 
                  className="form-input" 
                  value={formData.deadlineDate}
                  onChange={e => setFormData({ ...formData, deadlineDate: e.target.value })}
                  required
                />
                <small style={{ color: 'var(--text-muted)', marginTop: '0.25rem', display: 'block' }}>
                  Dates are saved accurately relative to your local timezone.
                </small>
              </div>

              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label>Category</label>
                <select 
                  className="form-input"
                  value={formData.deadlineType}
                  onChange={e => setFormData({ ...formData, deadlineType: e.target.value })}
                >
                  {getAvailableCategories().map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Save</button>
                <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function DeadlineRow({ d, onEdit, onDelete, onToggle }) {
  const localDate = new Date(d.deadlineDate);
  const isOverdue = !d.isCompleted && localDate < new Date();
  
  return (
    <div className={`deadline-row ${d.isCompleted ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}`}>
      <div className="deadline-date-block">
        <div className="month">{localDate.toLocaleDateString(undefined, { month: 'short' })}</div>
        <div className="day">{localDate.getDate()}</div>
      </div>
      
      <div className="deadline-info">
        <h3>{d.title}</h3>
        <div className="deadline-meta">
          <span className="badge badge-outline" style={{ fontSize: '0.7rem' }}>{d.deadlineType}</span>
          <span>{localDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</span>
          {d.universityName && <span>• {d.universityName}</span>}
        </div>
      </div>

      <div className="deadline-actions">
        <button 
          className="btn btn-ghost btn-sm" 
          onClick={onToggle}
          title={d.isCompleted ? 'Mark incomplete' : 'Mark complete'}
        >
          <BsCheck size={20} color={d.isCompleted ? 'var(--primary-500)' : 'currentColor'} />
        </button>
        <button className="btn btn-ghost btn-sm" onClick={onEdit}>Edit</button>
        <button className="btn btn-ghost btn-sm" onClick={onDelete} style={{ color: 'var(--error-500)' }}><BsTrash /></button>
      </div>
    </div>
  );
}
