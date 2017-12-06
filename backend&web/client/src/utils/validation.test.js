import {validateUsername, validatePassword} from "./validation";

test('validate username', () => {
    expect(validateUsername("abcdefg")).toBe(true);
    expect(validateUsername("abc")).toBe(true);
    expect(validateUsername("ac")).toBe(false);
    expect(validateUsername("")).toBe(false);

});


test('validate password', () => {
    expect(validatePassword("12345")).toBe(true);
    expect(validatePassword("abc")).toBe(false);

});