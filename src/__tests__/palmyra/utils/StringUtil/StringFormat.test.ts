import { StringFormat, hasDot } from 'lib/palmyra/utils/StringUtil';
import { expect, test } from 'vitest'

test('StringFormat Object data', () => {
    const value = '/app/palmyra/{sensorId}';
    const data = {sensorId: 23};
    const fv = StringFormat(value, data);
    expect(fv).toBe('/app/palmyra/23')
})

test('StringFormat Array data', () => {
    const value = '/app/palmyra/{0}';
    const data = [23];
    const fv = StringFormat(value, data);
    expect(fv).toBe('/app/palmyra/23')
})

test('hasDot Check - pass', () => {
    const value = 'hello.raja';
    const r = hasDot(value);
    expect(r).toBe(true)
})

test('hasDot Check - fail', () => {
    const value = 'helloraja';
    const r = hasDot(value);
    expect(r).toBe(false)
})