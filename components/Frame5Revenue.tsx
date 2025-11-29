import { DollarSign, ArrowLeft } from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import { CommentBox } from './CommentBox';

interface Frame5RevenueProps {
  onNext: () => void;
  onPrev: () => void;
}

const leadSources = [
  { name: 'Novastra Email Campaigns', clients: 18, revenue: 22680, color: 'bg-teal-500' },
  { name: 'Google Ads', clients: 9, revenue: 11340, color: 'bg-blue-500' },
  { name: 'Facebook Ads', clients: 5, revenue: 6300, color: 'bg-purple-500' },
  { name: 'Other / Existing referrals', clients: 2, revenue: 2520, color: 'bg-gray-400' }
];

const totalClients = leadSources.reduce((sum, source) => sum + source.clients, 0);
const totalRevenue = leadSources.reduce((sum, source) => sum + source.revenue, 0);

const novastraClients = leadSources[0].clients;
const novastraRevenue = leadSources[0].revenue;
const commissionRate = 10;
const commissionAmount = (novastraRevenue * commissionRate) / 100;

export function Frame5Revenue({ onNext, onPrev }: Frame5RevenueProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-12 min-h-[1000px] relative">
      <ProgressBar currentStep={5} />
      
      <div className="flex items-center gap-3 mb-4">
        <DollarSign className="w-8 h-8 text-teal-500" />
        <h1 className="text-gray-900">Lead Sources & Commission</h1>
      </div>

      <CommentBox className="mb-8 max-w-4xl">
        <p>At the end of each period you can see: total clients, what channel they came from, and exactly what commission is due to Novastra based on email-sourced clients.</p>
      </CommentBox>

      <div className="max-w-6xl mx-auto">
        <div className="flex gap-8">
          {/* Left side - Lead Sources */}
          <div className="flex-1 space-y-4">
            <h2 className="text-gray-900 mb-4">Where did your new clients come from?</h2>
            
            <CommentBox className="mb-6">
              <p>We track exactly which channel each client came from – email campaigns, ads or other.</p>
            </CommentBox>

            {/* Horizontal Bar Chart */}
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              {leadSources.map((source, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">{source.name}</span>
                    <span className="text-gray-900">{source.clients} clients</span>
                  </div>
                  <div className="h-12 bg-gray-200 rounded-lg overflow-hidden">
                    <div
                      className={`h-full ${source.color} flex items-center justify-end px-4 text-white transition-all duration-500`}
                      style={{ width: `${(source.clients / totalClients) * 100}%` }}
                    >
                      ${source.revenue.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-300 mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-900">Total</span>
                  <div className="text-right">
                    <div className="text-gray-900">{totalClients} clients</div>
                    <div className="text-gray-600">${totalRevenue.toLocaleString()} revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Commission Panel */}
          <div className="w-96 space-y-4">
            <h2 className="text-gray-900 mb-4">Commission – Novastra Email Leads</h2>
            
            <div className="space-y-3">
              <CommentBox>
                <p>Commission only applies to clients that came from Novastra's email campaigns.</p>
              </CommentBox>
              
              <CommentBox>
                <p>You see clearly how much revenue those clients brought in and what Novastra earns.</p>
              </CommentBox>
            </div>

            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg p-6 text-white space-y-4">
              <div>
                <div className="text-white/80 mb-1">Clients from Novastra campaigns</div>
                <div className="text-4xl">{novastraClients}</div>
              </div>
              
              <div className="border-t border-white/20 pt-4">
                <div className="text-white/80 mb-1">Revenue from those clients</div>
                <div className="text-3xl">${novastraRevenue.toLocaleString()}</div>
              </div>
              
              <div className="border-t border-white/20 pt-4">
                <div className="text-white/80 mb-1">Commission owed to Novastra</div>
                <div className="text-3xl">${commissionAmount.toLocaleString()}</div>
                <div className="text-white/80 mt-1">({commissionRate}% of email-sourced revenue)</div>
              </div>
            </div>

            {/* Summary box */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="text-gray-700 mb-2">Other lead sources</div>
              <div className="text-gray-900">
                {totalClients - novastraClients} clients from ads & referrals
              </div>
              <div className="text-gray-600">
                ${(totalRevenue - novastraRevenue).toLocaleString()} revenue – no commission
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12">
        <button
          onClick={onPrev}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
