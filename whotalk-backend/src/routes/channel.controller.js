import Account from './../models/account.js';
import Message from './../models/message.js';

// GET /valid/:username
export const valid = (req, res) => {
    Account
        .findUser(req.params.username)
        .then(account => {
            if (account) {
                const { familyName, givenName, thumbnail } = account.common_profile;
                res.json({
                    valid: true,
                    info: {
                        familyName,
                        givenName,
                        thumbnail
                    }
                });
            } else {
                res.status(404).json({code: 0, message: 'USER NOT FOUND'});
            }
        });
}


export const getRecentMsg = async (req, res) => {
    const username = req.params.username;

    try {
        const messages = await Message.getRecent({channel: username});

        res.json({
            messages: messages.reverse()
        });
    } catch (error) {
        throw error;
    }
}


export const getMsgBefore = async (req, res) => {
    const username = req.params.username;
    const cursorId = req.params.cursorId;

    try {
        const messages = await Message.getBefore({channel: username, cursorId});

        res.json({
            messages: messages.reverse()
        });
        
    } catch (error) {
        throw error;
    }
}