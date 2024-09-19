import CodeBlock from './CodeBlock';

const ptComponents = {
    types: {
      code: (props) => <CodeBlock value={props.value} />,
    },
};

export default ptComponents;