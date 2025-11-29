import { BarChart3, ArrowLeft } from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import { CommentBox } from './CommentBox';

interface Frame4ResultsProps {
  onNext: () => void;
  onPrev: () => void;
}

const chartData = [
  { label: 'Emails Sent', value: 1247, color: 'bg-blue-500' },
  { label: 'Replies', value: 224, color: 'bg-teal-500' },
  { label: 'Tours', value: 89, color: 'bg-green-500' },
  { label: 'Move-ins', value: 34, color: 'bg-emerald-600' }
];

const maxValue = Math.max(...chartData.map(d => d.value));

export function Frame4Results({ onNext, onPrev }: Frame4ResultsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-12 min-h-[1000px] relative">
      <ProgressBar currentStep={4} />
      
      <div className="flex items-center gap-3 mb-8">
        <BarChart3 className="w-8 h-8 text-teal-500" />
        <h1 className="text-gray-900">Performance overview</h1>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* KPI Card */}
        <div className="relative">
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg p-8 text-white">
            <div className="text-white/80 mb-2">Clients moved in this month</div>
            <div className="text-6xl">34</div>
          </div>
          <CommentBox className="mt-3">
            <p>Simple headline: how many clients actually moved into homes from all outreach.</p>
          </CommentBox>
        </div>

        <div className="flex gap-8">
          {/* Bar Chart */}
          <div className="flex-1 space-y-3">
            <CommentBox>
              <p>This shows the funnel – how outreach turns into replies, tours and move-ins over time.</p>
            </CommentBox>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-gray-900 mb-6">Pipeline Performance</h3>
              <div className="space-y-6">
                {chartData.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">{item.label}</span>
                      <span className="text-gray-900">{item.value}</span>
                    </div>
                    <div className="h-10 bg-gray-200 rounded-lg overflow-hidden">
                      <div
                        className={`h-full ${item.color} transition-all duration-500`}
                        style={{ width: `${(item.value / maxValue) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Stats */}
          <div className="w-80 space-y-6">
            <CommentBox>
              <p>We can see which regions and roles are giving the best results and focus more on them.</p>
            </CommentBox>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-gray-900 mb-4">Top-performing regions</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Brisbane</span>
                  <span className="text-gray-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Gold Coast</span>
                  <span className="text-gray-900">11</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Logan</span>
                  <span className="text-gray-900">8</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-gray-900 mb-4">Top-performing roles</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Support Coordinator</span>
                  <span className="text-gray-900">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Plan Manager</span>
                  <span className="text-gray-900">10</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Allied Health</span>
                  <span className="text-gray-900">6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 flex gap-3">
        <button
          onClick={onPrev}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
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
