import { Database, ChevronDown, ArrowLeft } from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import { CommentBox } from './CommentBox';

interface Frame1ContactsProps {
  onNext: () => void;
  onPrev: () => void;
}

const contacts = [
  { name: 'Sarah Mitchell', role: 'Support Coordinator', company: 'Care Connect', email: 's.mitchell@care.com' },
  { name: 'James Chen', role: 'Plan Manager', company: 'Plan Partners', email: 'j.chen@plan.com' },
  { name: 'Emma Wilson', role: 'Allied Health', company: 'Health First', email: 'e.wilson@health.com' },
  { name: 'Michael Brown', role: 'Support Coordinator', company: 'Support Plus', email: 'm.brown@support.com' },
  { name: 'Lisa Taylor', role: 'Plan Manager', company: 'Taylor Plans', email: 'l.taylor@plans.com' },
  { name: 'David Lee', role: 'Allied Health', company: 'Allied Services', email: 'd.lee@allied.com' },
  { name: 'Sophie Martin', role: 'Support Coordinator', company: 'Care Solutions', email: 's.martin@care.com' },
  { name: 'Ryan White', role: 'Plan Manager', company: 'White Plans', email: 'r.white@white.com' }
];

export function Frame1Contacts({ onNext, onPrev }: Frame1ContactsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-12 min-h-[1000px] relative">
      <ProgressBar currentStep={1} />
      
      <div className="flex items-center gap-3 mb-4">
        <Database className="w-8 h-8 text-teal-500" />
        <h1 className="text-gray-900">Find the right people in the database</h1>
      </div>

      <CommentBox className="mb-6 max-w-3xl">
        <p>You don't manage this – Novastra sets up and keeps this list clean and updated.</p>
      </CommentBox>

      <div className="flex gap-6">
        {/* Filter Panel */}
        <div className="w-64 space-y-3">
          <CommentBox>
            <p>We filter the big contact database by role, region and company to find the right people.</p>
          </CommentBox>
          <div className="bg-gray-50 rounded-lg p-6 space-y-6">
          <div>
            <label className="text-gray-700 mb-3 block">Role</label>
            <div className="space-y-2">
              {['Support Coordinator', 'Allied Health', 'Plan Manager'].map((role) => (
                <label key={role} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-teal-500 rounded" />
                  <span className="text-gray-600">{role}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-gray-700 mb-3 block">Region</label>
            <div className="space-y-2">
              {['Brisbane', 'Logan', 'Gold Coast'].map((region) => (
                <label key={region} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-teal-500 rounded" />
                  <span className="text-gray-600">{region}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-gray-700 mb-2 block">Status</label>
            <div className="relative">
              <select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-600 appearance-none cursor-pointer">
                <option>All statuses</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
          </div>
        </div>

        {/* Contacts Table */}
        <div className="flex-1 space-y-3">
          <CommentBox>
            <p>This shows real people (support coordinators, allied health, etc.) we can reach out to.</p>
          </CommentBox>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-6 py-4 text-left text-gray-700">Name</th>
                  <th className="px-6 py-4 text-left text-gray-700">Role</th>
                  <th className="px-6 py-4 text-left text-gray-700">Company</th>
                  <th className="px-6 py-4 text-left text-gray-700">Email</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <tr key={index} className="border-t border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="px-6 py-4 text-gray-800">{contact.name}</td>
                    <td className="px-6 py-4 text-gray-600">{contact.role}</td>
                    <td className="px-6 py-4 text-gray-600">{contact.company}</td>
                    <td className="px-6 py-4 text-gray-500">{contact.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 flex gap-3">
        <button
          onClick={onPrev}
          className="px-6 py-3 bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed"
          disabled
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={onNext}
          className="px-8 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
        >
          Next step
        </button>
      </div>
    </div>
  );
}
