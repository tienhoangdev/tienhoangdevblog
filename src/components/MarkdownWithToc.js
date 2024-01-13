// Import necessary libraries
import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkToc from 'remark-toc'
import PropTypes from 'prop-types'

// MarkdownWithToc component
const MarkdownWithToc = ({ markdownContent }) => {
  console.log('markdownContent', markdownContent)
  // const [markdownContent, setMarkdownContent] = useState('');
  // useEffect(() => {
  //   // Fetch the Markdown file
  //   const fetchMarkdown = async () => {
  //     try {
  //       const response = await fetch(markdownUrl);
  //       const content = await response.text();
  //       setMarkdownContent(content);
  //     } catch (error) {
  //       console.error('Error fetching Markdown:', error);
  //     }
  //   };

  //   fetchMarkdown();
  // }, [markdownUrl]);

  return (
    <div>
      {/* Render the Markdown content */}
      <ReactMarkdown
        remarkPlugins={[remarkToc]}
        components={{
          // Override the default heading renderer to add anchors for TOC
          heading: ({ level, children }) => {
            const id = children[0].props.value.replace(/\s+/g, '-').toLowerCase()
            return React.createElement(`h${level}`, { id }, children)
          },
        }}
      >
        {markdownContent}
      </ReactMarkdown>

      {/* Display the table of contents */}
      <div className="toc">
        <h2>Table of Contents</h2>
        <div dangerouslySetInnerHTML={{ __html: markdownContent.toc }} />
      </div>
    </div>
  )
}
MarkdownWithToc.propTypes = {
  markdownContent: PropTypes.string.isRequired,
}

export default MarkdownWithToc
