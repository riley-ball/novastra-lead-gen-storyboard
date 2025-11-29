import { LayoutGrid, ArrowLeft } from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import { CommentBox } from './CommentBox';

interface Frame3CRMProps {
  onNext: () => void;
  onPrev: () => void;
}

const columns = [
  {
    title: 'New Lead',
    color: 'bg-gray-200',
    cards: [
      { name: 'John Smith', role: 'SC', home: 'Home A' },
      { name: 'Anna Davis', role: 'PM', home: 'Home B' },
      { name: 'Tom Harris', role: 'SC', home: 'Home C' }
    ]
  },
  {
    title: 'Contacted',
    color: 'bg-blue-200',
    cards: [
      { name: 'Rachel Green', role: 'AH', home: 'Home D' },
      { name: 'Mark Wilson', role: 'SC', home: 'Home A' },
      { name: 'Kate Brown', role: 'PM', home: 'Home E' }
    ]
  },
  {
    title: 'Tour Booked',
    color: 'bg-teal-200',
    cards: [
      { name: 'Chris Taylor', role: 'SC', home: 'Home F' },
      { name: 'Julia Moore', role: 'PM', home: 'Home B' }
    ]
  },
  {
    title: 'Moved In',
    color: 'bg-green-200',
    cards: [
      { name: 'Sam Anderson', role: 'SC', home: 'Home G' },
      { name: 'Mia Johnson', role: 'AH', home: 'Home H' },
      { name: 'Ben Clarke', role: 'PM', home: 'Home A' }
    ]
  }
];

export function Frame3CRM({ onNext, onPrev }: Frame3CRMProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-12 min-h-[1000px] relative">
      <ProgressBar currentStep={3} />
      
      <div className="flex items-center gap-3 mb-8">
        <LayoutGrid className="w-8 h-8 text-teal-500" />
        <h1 className="text-gray-900">Track leads through the pipeline</h1>
      </div>

      <CommentBox className="mb-6 max-w-4xl">
        <p>Every reply becomes a lead in this simple pipeline – from first contact through to move-in.</p>
      </CommentBox>

      <div className="grid grid-cols-4 gap-6">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-4">
            {colIndex === 0 && (
              <CommentBox className="mb-2">
                <p>New leads appear here when someone engages with the email.</p>
              </CommentBox>
            )}
            {colIndex === 2 && (
              <CommentBox className="mb-2">
                <p>As your team talks to them and books tours, we move cards along the pipeline.</p>
              </CommentBox>
            )}
            <div className={`${column.color} rounded-lg px-4 py-3`}>
              <h3 className="text-gray-900">{column.title}</h3>
              <span className="text-gray-600">({column.cards.length})</span>
            </div>
            
            <div className="space-y-3">
              {column.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="text-gray-900 mb-2">{card.name}</div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">{card.role}</span>
                    <span className="text-gray-500">•</span>
                    <span>{card.home}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <CommentBox className="mt-8 max-w-3xl mx-auto">
        <p>You focus on speaking with leads. Novastra keeps the pipeline up to date and automated.</p>
      </CommentBox>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-center gap-8 text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gray-200"></div>
            <span>New leads from emails</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-teal-200"></div>
            <span>Tours scheduled automatically</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-200"></div>
            <span>Revenue generated</span>
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
