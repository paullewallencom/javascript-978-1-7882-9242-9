// Execute these lines in an LoDash environment

const domNode = {
    className: 'js-container',
    tagName: 'div',
    childNodes: [
        {
            text: 'Hi'
        }
    ]
};

const clonedNode = _.cloneDeep( domNode );

clonedNode.childNodes[0].text = 'Hello';

console.log( domNode.childNodes[0], clonedNode.childNodes[0] );


const left = {};
left.right = {};
left.right.left = left;

console.log( _.cloneDeep( left ) );

