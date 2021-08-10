import sessionReducer from '../session';

const initialState = {
    user: null
}

describe("Session Reducer", function() {
    it("Correctly stores the session with the CREATE_SESSION action", function() {
        expect(sessionReducer(initialState, { type: 'session/CREATE_SESSION', payload: { username: "test" } })).toEqual({
            user: {
                username: "test"
            }
        });
    });

    it("Correctly removes the session with the DESTROY_SESSION action", function() {
        expect(sessionReducer({ user: { username: "test" }}, { type: 'session/DESTROY_SESSION' })).toEqual({
            user: null
        });
    });
});