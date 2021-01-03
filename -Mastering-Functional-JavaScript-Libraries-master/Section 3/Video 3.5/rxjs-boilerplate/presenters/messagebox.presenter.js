const chatBoxNode = document.querySelector( '.js-chatbox' );

export const renderMessageBox = messages => {
    chatBoxNode.innerHTML = '';
    messages.forEach( renderMessage );
};

const renderMessage = message => {
    if ( message.type === 'message' ) {
        const time = message.ts;
        const text = message.text;
        const user = message.user;

        chatBoxNode.innerHTML += `
            <div class="chatbox__message">
                <span class="chatbox-message__time">${ message.ts }</span>
                <span class="chatbox-message__user">${ message.user }</span>
                <span class="chatbox-message__text">${ message.text }</span>
            </div>            
        ` 
    }
};