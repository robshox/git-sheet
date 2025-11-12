'use client';

import { useState } from 'react';

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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🎅 Secret Santa
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Organize your Secret Santa gift exchange
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-white dark:bg-gray-800 p-1 shadow-md">
            <button
              onClick={() => setViewMode('manage')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                viewMode === 'manage'
                  ? 'bg-red-500 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Manage Participants
            </button>
            <button
              onClick={() => setViewMode('assignments')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                viewMode === 'assignments'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              View Assignments
            </button>
          </div>
        </div>

        {viewMode === 'manage' ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
            {/* Add Participant Form */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Add Participants
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              <button
                onClick={addParticipant}
                className="w-full md:w-auto px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Add Participant
              </button>
            </div>

            {/* Participants List */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Participants ({participants.length})
              </h2>
              {participants.length === 0 ? (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  <p className="text-lg">No participants yet. Add some to get started!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {participants.map((participant) => (
                    <div
                      key={participant.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {participant.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {participant.email}
                        </p>
                      </div>
                      <button
                        onClick={() => removeParticipant(participant.id)}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Assign Button */}
            {participants.length >= 2 && (
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={assignSecretSantas}
                  className="w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  🎲 Assign Secret Santas
                </button>
                {assignments.length > 0 && (
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                    Assignments have been made! Switch to &quot;View Assignments&quot; to see them.
                  </p>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Secret Santa Assignments
            </h2>
            {assignments.length === 0 ? (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                <p className="text-lg mb-4">No assignments yet.</p>
                <p className="text-sm">
                  Go to &quot;Manage Participants&quot; and click &quot;Assign Secret Santas&quot; to create
                  assignments.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select your name to see your assignment:
                  </label>
                  <select
                    value={selectedParticipant || ''}
                    onChange={(e) => setSelectedParticipant(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">-- Select your name --</option>
                    {participants.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedParticipant && (
                  <div className="bg-gradient-to-br from-green-50 to-red-50 dark:from-green-900/20 dark:to-red-900/20 rounded-lg p-6 border-2 border-green-200 dark:border-green-800">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        You are Secret Santa for:
                      </p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {getAssignment(selectedParticipant)?.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {getAssignment(selectedParticipant)?.email}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    💡 Tip: Each person should select their own name to see their unique
                    assignment. Keep it secret!
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
