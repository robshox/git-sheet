'use client';

import { useState, useEffect } from 'react';

interface Participant {
  id: string;
  name: string;
  email: string;
}

interface Assignment {
  giverId: string;
  receiverId: string;
}

export default function SecretSanta() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [selectedParticipant, setSelectedParticipant] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'manage' | 'assignments'>('manage');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const addParticipant = () => {
    if (newName.trim() && newEmail.trim()) {
      const newParticipant: Participant = {
        id: Date.now().toString(),
        name: newName.trim(),
        email: newEmail.trim(),
      };
      setParticipants([...participants, newParticipant]);
      setNewName('');
      setNewEmail('');
    }
  };

  const removeParticipant = (id: string) => {
    setParticipants(participants.filter((p) => p.id !== id));
    setAssignments(assignments.filter((a) => a.giverId !== id && a.receiverId !== id));
    if (selectedParticipant === id) {
      setSelectedParticipant(null);
    }
  };

  const assignSecretSantas = () => {
    if (participants.length < 2) {
      alert('You need at least 2 participants to assign Secret Santas!');
      return;
    }

    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    const newAssignments: Assignment[] = [];

    for (let i = 0; i < shuffled.length; i++) {
      const giver = shuffled[i];
      const receiver = shuffled[(i + 1) % shuffled.length];
      newAssignments.push({
        giverId: giver.id,
        receiverId: receiver.id,
      });
    }

    setAssignments(newAssignments);
    setViewMode('assignments');
  };

  const getAssignment = (participantId: string) => {
    const assignment = assignments.find((a) => a.giverId === participantId);
    if (!assignment) return null;
    return participants.find((p) => p.id === assignment.receiverId);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addParticipant();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-green-600 to-red-500 relative overflow-hidden">
      {/* Animated Snowflakes - Only render on client to avoid hydration mismatch */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white text-2xl animate-snow"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
                opacity: 0.7,
              }}
            >
              ❄
            </div>
          ))}
        </div>
      )}

      {/* Floating Ornaments - Only render on client to avoid hydration mismatch */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              {['🎄', '🎁', '🎅', '🦌', '🔔', '⭐'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-12 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-yellow-300 mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse">
            🎅 Switch Dimension Secret Santa 🎄
          </h1>
          <p className="text-2xl text-yellow-100 font-semibold drop-shadow-lg">
            🎁 Organize your Secret Santa gift exchange! 🎁
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-yellow-300 p-2 shadow-2xl border-4 border-yellow-400">
            <button
              onClick={() => setViewMode('manage')}
              className={`px-8 py-3 rounded-md font-bold text-lg transition-all transform hover:scale-110 ${
                viewMode === 'manage'
                  ? 'bg-red-600 text-yellow-200 shadow-lg border-4 border-red-800'
                  : 'bg-green-600 text-yellow-200 hover:bg-green-700 border-4 border-green-800'
              }`}
            >
              🎯 Manage Participants
            </button>
            <button
              onClick={() => setViewMode('assignments')}
              className={`px-8 py-3 rounded-md font-bold text-lg transition-all transform hover:scale-110 ${
                viewMode === 'assignments'
                  ? 'bg-green-600 text-yellow-200 shadow-lg border-4 border-green-800'
                  : 'bg-red-600 text-yellow-200 hover:bg-red-700 border-4 border-red-800'
              }`}
            >
              🎁 View Assignments
            </button>
          </div>
        </div>

        {viewMode === 'manage' ? (
          <div className="bg-gradient-to-br from-yellow-200 via-red-100 to-green-200 rounded-2xl shadow-2xl p-8 border-8 border-yellow-400 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 text-6xl animate-bounce">🎄</div>
            <div className="absolute bottom-4 left-4 text-5xl animate-bounce" style={{ animationDelay: '0.5s' }}>🎁</div>
            
            {/* Add Participant Form */}
            <div className="mb-8 relative z-10">
              <h2 className="text-4xl font-bold text-red-700 mb-6 drop-shadow-lg flex items-center gap-3">
                <span className="text-5xl">👥</span> Add Participants
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="🎅 Name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="px-5 py-4 border-4 border-red-500 rounded-xl focus:ring-4 focus:ring-yellow-400 focus:border-yellow-400 bg-white text-red-800 font-semibold text-lg placeholder-red-400 shadow-lg"
                />
                <input
                  type="email"
                  placeholder="📧 Email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="px-5 py-4 border-4 border-green-500 rounded-xl focus:ring-4 focus:ring-yellow-400 focus:border-yellow-400 bg-white text-green-800 font-semibold text-lg placeholder-green-400 shadow-lg"
                />
              </div>
              <button
                onClick={addParticipant}
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-yellow-200 font-bold text-xl rounded-xl transition-all shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 border-4 border-red-800"
              >
                ➕ Add Participant 🎉
              </button>
            </div>

            {/* Participants List */}
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-green-700 mb-6 drop-shadow-lg flex items-center gap-3">
                <span className="text-5xl">🎊</span> Participants ({participants.length})
              </h2>
              {participants.length === 0 ? (
                <div className="text-center py-12 bg-white/80 rounded-xl border-4 border-dashed border-yellow-500">
                  <p className="text-2xl font-bold text-red-600">🎄 No participants yet! 🎄</p>
                  <p className="text-lg text-green-700 mt-2">Add some to get started! 🎁</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {participants.map((participant, index) => (
                    <div
                      key={participant.id}
                      className="flex items-center justify-between p-5 bg-gradient-to-r from-white via-yellow-50 to-white rounded-xl hover:shadow-2xl transition-all transform hover:scale-[1.02] border-4 border-green-500 shadow-lg"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{['🎅', '🎄', '🎁', '🦌', '🔔', '⭐'][index % 6]}</span>
                        <div>
                          <p className="font-bold text-xl text-red-700">
                            {participant.name}
                          </p>
                          <p className="text-sm font-semibold text-green-700">
                            {participant.email}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeParticipant(participant.id)}
                        className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-yellow-200 font-bold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-110 border-4 border-red-800"
                      >
                        ❌ Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Assign Button */}
            {participants.length >= 2 && (
              <div className="mt-8 pt-8 border-t-4 border-yellow-500 relative z-10">
                <button
                  onClick={assignSecretSantas}
                  className="w-full px-8 py-6 bg-gradient-to-r from-green-600 via-yellow-500 to-green-600 hover:from-green-700 hover:via-yellow-400 hover:to-green-700 text-red-800 font-black text-3xl rounded-2xl transition-all shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 border-8 border-green-800 animate-pulse"
                >
                  🎲 ASSIGN SECRET SANTAS! 🎲
                </button>
                {assignments.length > 0 && (
                  <p className="text-center text-xl font-bold text-green-700 mt-6 bg-yellow-300 p-4 rounded-xl border-4 border-green-600 shadow-lg">
                    🎉 Assignments have been made! Switch to &quot;View Assignments&quot; to see them! 🎉
                  </p>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-gradient-to-br from-yellow-200 via-red-100 to-green-200 rounded-2xl shadow-2xl p-8 border-8 border-yellow-400 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 text-6xl animate-spin" style={{ animationDuration: '3s' }}>🎄</div>
            <div className="absolute bottom-4 right-4 text-5xl animate-bounce">🎁</div>
            
            <h2 className="text-4xl font-bold text-red-700 mb-8 drop-shadow-lg flex items-center gap-3 relative z-10">
              <span className="text-5xl">🎅</span> Secret Santa Assignments <span className="text-5xl">🎄</span>
            </h2>
            {assignments.length === 0 ? (
              <div className="text-center py-12 bg-white/90 rounded-xl border-4 border-dashed border-red-500 relative z-10">
                <p className="text-3xl font-bold text-red-600 mb-4">🎁 No assignments yet! 🎁</p>
                <p className="text-xl text-green-700 font-semibold">
                  Go to &quot;Manage Participants&quot; and click &quot;Assign Secret Santas&quot; to create assignments! 🎉
                </p>
              </div>
            ) : (
              <div className="space-y-6 relative z-10">
                <div className="mb-6">
                  <label className="block text-2xl font-bold text-green-700 mb-4 drop-shadow-lg">
                    🎯 Select your name to see your assignment:
                  </label>
                  <select
                    value={selectedParticipant || ''}
                    onChange={(e) => setSelectedParticipant(e.target.value)}
                    className="w-full px-6 py-4 border-4 border-green-600 rounded-xl focus:ring-4 focus:ring-yellow-400 focus:border-yellow-400 bg-white text-green-800 font-bold text-lg shadow-2xl"
                  >
                    <option value="">-- 🎅 Select your name --</option>
                    {participants.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedParticipant && (
                  <div className="bg-gradient-to-br from-green-300 via-yellow-300 to-red-300 rounded-2xl p-8 border-8 border-green-600 shadow-2xl transform hover:scale-[1.02] transition-transform">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-red-800 mb-4 drop-shadow-lg">
                        🎁 You are Secret Santa for: 🎁
                      </p>
                      <p className="text-5xl font-black text-green-800 mb-4 drop-shadow-lg animate-pulse">
                        {getAssignment(selectedParticipant)?.name}
                      </p>
                      <p className="text-xl font-bold text-red-700 bg-yellow-200 p-3 rounded-lg border-4 border-red-600 inline-block">
                        📧 {getAssignment(selectedParticipant)?.email}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t-4 border-yellow-500">
                  <p className="text-xl font-bold text-green-700 text-center bg-yellow-300 p-4 rounded-xl border-4 border-green-600 shadow-lg">
                    💡 Tip: Each person should select their own name to see their unique assignment. Keep it secret! 🤫
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
