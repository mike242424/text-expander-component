import { useState } from 'react';

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = 'Show More',
  collapseButtonText = 'Show Less',
  buttonColor = '#1f09cd',
  className = '',
  expanded = false,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const buttonStyle = {
    color: buttonColor,
    cursor: 'pointer',
    marginLeft: '6px',
  };

  return (
    <div className={className}>
      <span>
        {isExpanded
          ? children
          : children.split(' ').slice(0, collapsedNumWords).join(' ')}
        ...
      </span>
      <span style={buttonStyle} onClick={() => setIsExpanded((exp) => !exp)}>
        {expanded || isExpanded ? collapseButtonText : expandButtonText}
      </span>
    </div>
  );
}
