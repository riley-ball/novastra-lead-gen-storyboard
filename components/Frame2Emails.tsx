import { Mail, ArrowLeft } from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import { CommentBox } from './CommentBox';

interface Frame2EmailsProps {
  onNext: () => void;
  onPrev: () => void;
}

export function Frame2Emails({ onNext, onPrev }: Frame2EmailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-12 min-h-[1000px] relative">
      <ProgressBar currentStep={2} />
      
      <div className="flex items-center gap-3 mb-8">
        <Mail className="w-8 h-8 text-teal-500" />
        <h1 className="text-gray-900">Novastra automates sending and follow-ups</h1>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <div className="flex gap-8">
            {/* Email Preview */}
            <div className="flex-1 space-y-6">
              <CommentBox className="mb-4">
                <p>This is the type of email they receive. You provide the wording; Novastra handles sending.</p>
              </CommentBox>
              <div>
                <label className="text-gray-500 mb-2 block">To:</label>
                <div className="text-gray-900">Support Coordinator</div>
              </div>

              <div>
                <label className="text-gray-500 mb-2 block">Subject:</label>
                <div className="text-gray-900">Vacancy in SDA Home – [Suburb]</div>
              </div>

              <div className="pt-4 space-y-3">
                <div className="h-3 bg-gray-300 rounded w-full"></div>
                <div className="h-3 bg-gray-300 rounded w-full"></div>
                <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                <div className="h-3 bg-gray-300 rounded w-full"></div>
                <div className="h-3 bg-gray-300 rounded w-4/6"></div>
              </div>
            </div>

            {/* Metrics Panel */}
            <div className="w-64 space-y-3">
              <CommentBox>
                <p>We track who opens, clicks and replies so we know who is interested.</p>
              </CommentBox>
              <div className="bg-white rounded-lg p-6 border border-gray-200 space-y-4">
                <h3 className="text-gray-700 mb-4">Email Metrics</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Open</span>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    <span className="text-gray-900">68%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Clicked</span>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-gray-900">42%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Replied</span>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-900">18%</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 mt-6">
                <div className="text-gray-600 mb-2">Sent this month</div>
                <div className="text-gray-900">1,247 emails</div>
              </div>
              </div>
            </div>
          </div>

          <CommentBox className="mt-6">
            <p>Emails go out automatically in batches with follow-ups – no manual sending needed.</p>
          </CommentBox>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                  1
                </div>
                <span className="text-gray-600">Initial send</span>
              </div>
              <div className="flex-1 h-px bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  2
                </div>
                <span className="text-gray-600">Follow-up +3 days</span>
              </div>
              <div className="flex-1 h-px bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  3
                </div>
                <span className="text-gray-600">Final follow-up +7 days</span>
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
