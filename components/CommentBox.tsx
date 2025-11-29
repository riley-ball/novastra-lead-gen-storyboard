interface CommentBoxProps {
  children: React.ReactNode;
  className?: string;
}

export function CommentBox({ children, className = '' }: CommentBoxProps) {
  return (
    <div className={`bg-yellow-50 border border-yellow-200 rounded px-3 py-2 text-gray-700 ${className}`}>
      {children}
    </div>
  );
}
