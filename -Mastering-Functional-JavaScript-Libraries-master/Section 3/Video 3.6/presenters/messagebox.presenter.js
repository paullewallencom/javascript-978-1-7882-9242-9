const chatBoxNode = document.querySelector( '.js-chatbox' );

export const renderMessageBox = (messages, users) => {
    chatBoxNode.innerHTML = '';
    messages.forEach( message => renderMessage( message, users ) );
};

const formatTime = tsString => 
    new Date( Number.parseFloat( tsString ) * 1000 )
        .toTimeString().split( ' ' )[0];

const getUsername = ( userId, users ) => {
    const user = users.find( user => user.id === userId );
    if ( user ) return user.name;
}

const renderMessage = ( message, users ) => {
    if ( message.type === 'message' ) {
        const time = formatTime( message.ts );
        const text = message.text;
        const user = getUsername( message.user, users ) || 'Bot';

        chatBoxNode.innerHTML += `
            <div class="chatbox__message">
                <span class="chatbox-message__time">${ time }</span>
                <span class="chatbox-message__user">${ user }</span>
                <span class="chatbox-message__text">${ text }</span>
            </div>            
        ` 
    }
};