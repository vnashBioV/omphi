import React from 'react';
import CodeBlock from './CodeBlock';

const ptComponentsprivacy = {
    types: {
        code: ({ value }) => <CodeBlock value={value} />,
    },
    marks: {
        link: ({ children, value }) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
            return (
                <a href={value?.href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
                    {children}
                </a>
            );
        }
    },
    list: {
        bullet: ({ children }) => <ul className="ml-4 list-disc">{children}</ul>,
    },
    listItem: {
        bullet: ({ children }) => <li className="mb-1">{children}</li>,
    },
};

export default ptComponentsprivacy;
